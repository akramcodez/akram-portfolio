import { NextResponse } from "next/server";

export const runtime = "nodejs";
// Re-fetch at most once per hour; GitHub data doesn't change faster than that matters here.
export const revalidate = 3600;

const LOGIN = "akramcodez";

const GQL = `
query ($login: String!, $from: DateTime!) {
  user(login: $login) {
    contributionsCollection(from: $from) {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            date
            contributionCount
            contributionLevel
          }
        }
      }
    }
  }
}`;

const LEVELS: Record<string, 0 | 1 | 2 | 3 | 4> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json(
      {
        error:
          "GITHUB_TOKEN is not set on the server. Add it to .env.local (see .env.example) and restart the dev server.",
      },
      { status: 501 },
    );
  }

  const from = new Date();
  from.setMonth(from.getMonth() - 3);

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "User-Agent": "akram-portfolio",
      },
      body: JSON.stringify({
        query: GQL,
        variables: { login: LOGIN, from: from.toISOString() },
      }),
      next: { revalidate },
    });

    const body = await res.json().catch(() => null);

    if (!res.ok || body?.errors) {
      return NextResponse.json(
        { error: body?.errors?.[0]?.message ?? `GitHub responded ${res.status}` },
        { status: 502 },
      );
    }

    const calendar =
      body?.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) {
      return NextResponse.json(
        { error: "No contribution calendar in GitHub response." },
        { status: 502 },
      );
    }

    const weeks = calendar.weeks.map(
      (w: {
        contributionDays: {
          date: string;
          contributionCount: number;
          contributionLevel: string;
        }[];
      }) => ({
        days: w.contributionDays.map((d) => ({
          date: d.date,
          count: d.contributionCount,
          level: LEVELS[d.contributionLevel] ?? 0,
        })),
      }),
    );

    return NextResponse.json(
      { totalContributions: calendar.totalContributions, weeks },
      { headers: { "Cache-Control": "public, s-maxage=3600" } },
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to reach GitHub." },
      { status: 502 },
    );
  }
}
