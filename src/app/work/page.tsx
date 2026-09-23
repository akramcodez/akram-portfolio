"use client";

import SiteHeader from "@/components/SiteHeader";
import SectionMarker from "@/components/SectionMarker";

import { repos, socials } from "@/data/data";

const ORGS = [
  "Nano Collective",
  "Zed",
  "CircuitVerse",
  "Zulip",
  "Ghostfolio",
  "Activepieces",
  "Requestly",
  "OpenLibrary",
];

const FEATURED_REPOS = [
  "nanocoder",
  "internetarchive",
  "activepieces",
  "ghostfolio",
];

const totalPRs = repos.reduce((acc, r) => acc + r.prs.length, 0);

function social(name: string) {
  return socials.find((s) => s.name.toLowerCase() === name.toLowerCase());
}

export default function WorkPage() {
  const email = social("email");

  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      <SiteHeader />

      <main className="flex-1 w-full max-w-5xl mx-auto px-5 md:px-8 py-8 md:py-10">
        <div className="min-w-0 space-y-12 w-full">
          {/* work */}
          <section id="work" className="scroll-mt-20">
            <SectionMarker
              right={`${totalPRs}+ merged prs · ${repos.length} projects`}
            >
              work
            </SectionMarker>

            <div className="border border-border p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-bold">Nano Collective</h3>
                <p className="mono text-[11px] text-primary">
                  currently · here now
                </p>
              </div>
              <p className="mono text-[11px] text-muted-foreground mt-1">
                open-source contributor → maintainer
              </p>
              <p className="text-sm text-foreground/85 mt-3 leading-relaxed">
                Building{" "}
                <a
                  href="https://github.com/Nano-Collective/nanocoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-quiet"
                >
                  Nanocoder
                </a>
                , a community-first AI coding agent for the terminal. Features,
                bug fixes, PR reviews, GitHub workflows. whatever a real
                production open-source project needs.
              </p>
            </div>

            <div className="mt-6">
              <p className="mono text-[11px] tracking-[0.14em] text-muted-foreground mb-2">
                OPEN SOURCE
              </p>
              <p className="text-[15px] leading-relaxed">
                <span className="text-primary font-bold">
                  {totalPRs}+ merged PRs
                </span>{" "}
                across projects people actually use.
              </p>
              <p className="mono text-[11px] text-muted-foreground mt-2 leading-relaxed">
                {ORGS.join(" · ")}
              </p>
            </div>

            <div className="mt-6">
              <p className="mono text-[11px] tracking-[0.14em] text-muted-foreground mb-2">
                SELECTED CONTRIBUTIONS
              </p>
              <div className="border border-border divide-y divide-border">
                {FEATURED_REPOS.map((name) => {
                  const repo = repos.find((r) => r.name === name);
                  if (!repo) return null;
                  return (
                    <details key={repo.name} className="group px-3 py-2.5">
                      <summary className="flex items-baseline justify-between gap-3 cursor-pointer list-none select-none">
                        <span className="flex items-baseline gap-2 min-w-0">
                          <span className="mono text-[11px] text-muted-foreground group-open:text-primary transition-colors">
                            [+]
                          </span>
                          <span className="text-sm font-semibold truncate">
                            {repo.name === "internetarchive"
                              ? "internetarchive/openlibrary"
                              : repo.name}
                          </span>
                        </span>
                        <span className="mono text-[11px] text-muted-foreground shrink-0">
                          {repo.prs.length} pr{repo.prs.length > 1 ? "s" : ""}
                        </span>
                      </summary>
                      <ul className="mt-2.5 ml-6 space-y-1.5 pb-1">
                        {repo.prs.map((pr) => (
                          <li
                            key={pr.url}
                            className="mono text-[11px] leading-relaxed"
                          >
                            <a
                              href={pr.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link-quiet"
                            >
                              {pr.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  );
                })}
              </div>
              <p className="mono text-[11px] text-muted-foreground mt-2.5">
                full list on{" "}
                <a
                  href="https://github.com/akramcodez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-quiet"
                >
                  github.com/akramcodez ↗
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

      {email && <span className="hidden" aria-hidden>{email.handle}</span>}
    </div>
  );
}
