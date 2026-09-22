"use client";

import { useEffect, useMemo, useState } from "react";

type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type EventItem = { id: string; text: string; date: string };

type RepoItem = { name: string; desc: string; pushedAt: string };

type Data = {
  login: string;
  totalContributions: number;
  weeks: { days: ContributionDay[] }[];
  events: EventItem[];
  repos: RepoItem[];
};

const GQL = `
query ($login: String!, $from: DateTime!) {
  user(login: $login) {
    login
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

const cellColor = [
  "bg-[#e6e5dd] dark:bg-[#22221d]",
  "bg-[#b9ccf2]",
  "bg-[#7ba1ec]",
  "bg-[#3f6fd8]",
  "bg-[#1647b0]",
];

function shortRepo(full: string) {
  const parts = full.split("/");
  return parts[parts.length - 1];
}

function describeEvent(ev: {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
  payload: Record<string, unknown>;
}): EventItem | null {
  const repo = shortRepo(ev.repo.name);
  const date = ev.created_at;
  const p = ev.payload as {
    action?: string;
    ref?: string;
    ref_type?: string;
    commits?: { message: string }[];
    pull_request?: { number?: number; title?: string };
    number?: number;
    issue?: { number?: number };
  };

  switch (ev.type) {
    case "PushEvent": {
      const n = p.commits?.length ?? 0;
      if (n === 0) return null;
      return {
        id: ev.id,
        text: `pushed ${n} commit${n > 1 ? "s" : ""} to ${repo}`,
        date,
      };
    }
    case "PullRequestEvent": {
      const action =
        p.action === "closed" ? "merged/closed" : (p.action ?? "opened");
      return {
        id: ev.id,
        text: `${action} PR #${p.pull_request?.number ?? ""} in ${repo}`,
        date,
      };
    }
    case "PullRequestReviewEvent":
      return {
        id: ev.id,
        text: `reviewed PR #${p.pull_request?.number ?? ""} in ${repo}`,
        date,
      };
    case "IssuesEvent":
      return {
        id: ev.id,
        text: `${p.action ?? "opened"} issue #${p.issue?.number ?? ""} in ${repo}`,
        date,
      };
    case "CreateEvent":
      return {
        id: ev.id,
        text:
          p.ref_type === "repository"
            ? `created ${repo}`
            : `created ${p.ref_type} ${p.ref ?? ""} in ${repo}`,
        date,
      };
    case "ForkEvent":
      return { id: ev.id, text: `forked ${ev.repo.name}`, date };
    case "WatchEvent":
      return { id: ev.id, text: `starred ${ev.repo.name}`, date };
    default:
      return null;
  }
}

function relTime(iso: string) {
  const s = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (s < 3600) return `${Math.max(1, Math.floor(s / 60))}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  const d = Math.floor(s / 86400);
  if (d < 30) return `${d}d ago`;
  const m = Math.floor(d / 30);
  if (m < 12) return `${m}mo ago`;
  return `${Math.floor(m / 12)}y ago`;
}

export default function GithubPanel() {
  const [data, setData] = useState<Data | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    const login = "akramcodez";

    async function load() {
      const from = new Date();
      from.setFullYear(from.getFullYear() - 1);

      const [gqlRes, eventsRes, reposRes] = await Promise.all([
        fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({
            query: GQL,
            variables: { login, from: from.toISOString() },
          }),
        }),
        fetch(`https://api.github.com/users/${login}/events/public?per_page=100`),
        fetch(
          `https://api.github.com/users/${login}/repos?per_page=100&type=owner&sort=pushed`,
        ),
      ]);

      if (!gqlRes.ok || !eventsRes.ok || !reposRes.ok) throw new Error("fetch failed");

      const gql = await gqlRes.json();
      const calendar =
        gql?.data?.user?.contributionsCollection?.contributionCalendar;
      if (!calendar) throw new Error("no calendar");

      const weeks = calendar.weeks.map(
        (w: { contributionDays: { date: string; contributionCount: number; contributionLevel: string }[] }) => ({
          days: w.contributionDays.map((d) => ({
            date: d.date,
            count: d.contributionCount,
            level: LEVELS[d.contributionLevel] ?? 0,
          })),
        }),
      );

      const rawEvents = (await eventsRes.json()) as {
        id: string;
        type: string;
        repo: { name: string };
        created_at: string;
        payload: Record<string, unknown>;
      }[];

      const events = rawEvents
        .map(describeEvent)
        .filter((e): e is EventItem => e !== null)
        .filter(
          (e, i, arr) => arr.findIndex((x) => x.text === e.text) === i,
        )
        .slice(0, 6);

      const rawRepos = (await reposRes.json()) as {
        name: string;
        fork: boolean;
        description: string | null;
        pushed_at: string;
      }[];

      const repos = rawRepos
        .filter((r) => !r.fork)
        .sort(
          (a, b) =>
            new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
        )
        .slice(0, 4)
        .map((r) => ({
          name: r.name,
          desc: r.description ?? "",
          pushedAt: r.pushed_at,
        }));

      setData({
        login,
        totalContributions: calendar.totalContributions,
        weeks,
        events,
        repos,
      });
    }

    load().catch(() => setFailed(true));
  }, []);

  const months = useMemo(() => {
    if (!data) return [];
    const labels: { label: string; span: number }[] = [];
    let last = -1;
    data.weeks.forEach((w) => {
      const m = new Date(w.days[0].date).getMonth();
      if (m !== last) {
        labels.push({
          label: new Date(w.days[0].date).toLocaleString("en", {
            month: "short",
          }),
          span: 1,
        });
        last = m;
      } else {
        labels[labels.length - 1].span++;
      }
    });
    return labels;
  }, [data]);

  return (
    <section id="github" className="scroll-mt-20">
      <div className="flex items-baseline justify-between">
        <p className="mono text-[11px] tracking-[0.14em] text-muted-foreground">
          GITHUB
        </p>
        <a
          href="https://github.com/akramcodez"
          target="_blank"
          rel="noopener noreferrer"
          className="mono text-[11px] link-quiet"
        >
          @akramcodez ↗
        </a>
      </div>

      <div className="mt-3 border border-border p-3">
        {failed ? (
          <p className="mono text-[11px] text-muted-foreground">
            activity unavailable —{" "}
            <a
              href="https://github.com/akramcodez"
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet"
            >
              view on github ↗
            </a>
          </p>
        ) : !data ? (
          <div className="space-y-2">
            <div className="h-[74px] bg-muted animate-pulse" />
            <div className="h-3 w-2/3 bg-muted animate-pulse" />
            <div className="h-3 w-1/2 bg-muted animate-pulse" />
          </div>
        ) : (
          <>
            <div className="overflow-x-auto pb-1">
              <div className="min-w-[430px]">
                <div
                  className="grid gap-[2px] mb-1"
                  style={{
                    gridTemplateColumns: `repeat(${data.weeks.length}, 1fr)`,
                  }}
                >
                  {months.map((m, i) => (
                    <span
                      key={i}
                      className="mono text-[9px] text-muted-foreground leading-none"
                      style={{ gridColumn: `span ${m.span}` }}
                    >
                      {m.label}
                    </span>
                  ))}
                </div>
                <div
                  className="grid grid-rows-7 grid-flow-col gap-[2px]"
                >
                  {data.weeks.flatMap((w, wi) =>
                    w.days.map((d) => (
                      <span
                        key={`${wi}-${d.date}`}
                        title={`${d.count} contribution${d.count === 1 ? "" : "s"} · ${d.date}`}
                        className={`w-full aspect-square rounded-[1px] ${cellColor[d.level]}`}
                      />
                    )),
                  )}
                </div>
              </div>
            </div>

            <p className="mono text-[11px] text-muted-foreground mt-3">
              <span className="text-primary font-medium">
                {data.totalContributions.toLocaleString()}
              </span>{" "}
              contributions in the last year
            </p>

            {data.events.length > 0 && (
              <ul className="mt-3 space-y-1.5 border-t border-border pt-3">
                {data.events.map((e) => (
                  <li
                    key={e.id}
                    className="mono text-[11px] flex items-baseline justify-between gap-3"
                  >
                    <span className="text-foreground/85 truncate">
                      {e.text}
                    </span>
                    <span className="text-muted-foreground shrink-0">
                      {relTime(e.date)}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {data.repos.length > 0 && (
              <div className="mt-3 border-t border-border pt-3">
                <p className="mono text-[10px] tracking-[0.12em] text-muted-foreground mb-2">
                  RECENTLY PUSHED
                </p>
                <ul className="space-y-1.5">
                  {data.repos.map((r) => (
                    <li key={r.name} className="mono text-[11px]">
                      <a
                        href={`https://github.com/${data.login}/${r.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-quiet"
                      >
                        {r.name}
                      </a>
                      {r.desc && (
                        <span className="text-muted-foreground">
                          {" "}
                          — {r.desc}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
