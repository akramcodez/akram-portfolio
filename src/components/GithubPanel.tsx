"use client";

import { useEffect, useMemo, useState } from "react";

type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type Data = {
  totalContributions: number;
  weeks: { days: ContributionDay[] }[];
};

const cellColor = [
  "bg-[#e6e5dd] dark:bg-[#22221d]",
  "bg-[#b9ccf2] dark:bg-white/20",
  "bg-[#7ba1ec] dark:bg-white/40",
  "bg-[#3f6fd8] dark:bg-white/60",
  "bg-[#1647b0] dark:bg-white/90",
];

export default function GithubPanel() {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/github")
      .then(async (res) => {
        const body = await res.json().catch(() => null);
        if (!res.ok) throw new Error(body?.error ?? "fetch failed");
        return body as Data;
      })
      .then(setData)
      .catch((e: Error) => setError(e.message));
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
        <p className="mono text-[10px] md:text-[11px] tracking-[0.14em] text-muted-foreground">
          GITHUB
        </p>
        <a
          href="https://github.com/akramcodez"
          target="_blank"
          rel="noopener noreferrer"
          className="mono text-[10px] md:text-[11px] link-quiet"
        >
          @akramcodez ↗
        </a>
      </div>

      <div className="mt-3 border border-border p-3">
        {error ? (
          <p className="mono text-[10px] md:text-[11px] text-muted-foreground leading-relaxed">
            graph unavailable · {error}{" "}
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
          </div>
        ) : (
          <>
            <div className="overflow-x-auto pb-1">
              <div>
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
                  style={{
                    gridTemplateColumns: `repeat(${data.weeks.length}, 1fr)`,
                  }}
                >
                  {data.weeks.flatMap((w, wi) =>
                    w.days.map((d, di) => (
                      <span
                        key={`${wi}-${d.date}`}
                        title={`${d.count} contribution${d.count === 1 ? "" : "s"} · ${d.date}`}
                        className={`w-full aspect-square rounded-[1px] ${cellColor[d.level]}`}
                        style={
                          wi === 0 && di === 0
                            ? {
                                gridRowStart:
                                  new Date(d.date + "T00:00:00").getDay() + 1,
                              }
                            : undefined
                        }
                      />
                    )),
                  )}
                </div>
              </div>
            </div>

            <p className="mono text-[10px] md:text-[11px] text-muted-foreground mt-3">
              <span className="text-primary font-medium">
                {data.totalContributions.toLocaleString()}
              </span>{" "}
              contributions in the last 3 months
            </p>
          </>
        )}
      </div>
    </section>
  );
}
