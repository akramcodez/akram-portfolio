"use client";

import SiteHeader from "@/components/SiteHeader";
import SectionMarker from "@/components/SectionMarker";
import { IoIosGitMerge } from "react-icons/io";

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
          {/* experience */}
          <section id="experience" className="scroll-mt-20">
            <SectionMarker
              right="3 companies"
            >
              experience
            </SectionMarker>

            <div className="space-y-4">
              <div className="border border-border p-4 flex gap-4 items-start">
                <img src="/afterquery.png" alt="AfterQuery Experts logo" className="w-9 h-9 rounded-sm object-cover bg-white border border-border shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-medium text-[15px] text-foreground">
                      <a href="https://experts.afterquery.com" target="_blank" rel="noopener noreferrer" className="link-quiet">
                        AfterQuery Experts
                      </a>
                    </h3>
                    <p className="text-[14px] text-primary">
                      Aug 2026 - Present
                    </p>
                  </div>
                  <p className="text-[15px] text-foreground/85 mt-1">
                    Software Engineer · Part-time · Remote
                  </p>
                </div>
              </div>

              <div className="border border-border p-4 flex gap-4 items-start">
                <img src="/nc.png" alt="Nano Collective logo" className="w-9 h-9 rounded-sm object-cover bg-white border border-border shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-medium text-[15px] text-foreground">
                      <a href="http://nanocollective.org" target="_blank" rel="noopener noreferrer" className="link-quiet">
                        Nano Collective
                      </a>
                    </h3>
                    <p className="text-[14px] text-primary">
                      Jun 2026 - Present
                    </p>
                  </div>
                  <p className="text-[15px] text-foreground/85 mt-1">
                    Software Developer · Full-time · Remote
                  </p>
                </div>
              </div>

              <div className="border border-border p-4 flex gap-4 items-start">
                <img src="/kebulan.png" alt="Kebulan Grid logo" className="w-9 h-9 rounded-sm object-cover bg-white border border-border shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-medium text-[15px] text-foreground">
                      <a href="https://kebulangrid.com" target="_blank" rel="noopener noreferrer" className="link-quiet">
                        Kebulan Grid
                      </a>
                    </h3>
                  </div>
                  <div className="mt-4 pl-2">
                    <div className="border-l-2 border-border/50 pl-4 space-y-4">
                      <div>
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <p className="font-medium text-[15px] text-foreground/90">Full-stack Developer · Part-time · Remote</p>
                          <p className="text-[14px] text-muted-foreground">
                            May 2026 - Aug 2026
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <p className="font-medium text-[15px] text-foreground/90">Full-stack Developer · Full-time · Remote</p>
                          <p className="text-[14px] text-muted-foreground">
                            Nov 2025 - Apr 2026
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* open source */}
          <section id="open-source" className="scroll-mt-20">
            <SectionMarker
              right={`${totalPRs} merged prs · ${repos.length} oss orgs`}
            >
              open source
            </SectionMarker>

            <div className="mt-6">
              <p className="mono text-[11px] tracking-[0.14em] text-muted-foreground mb-2">
                MERGED PULL REQUESTS
              </p>
              <div className="border border-border divide-y divide-border">
                {[...repos]
                  .sort((a, b) => b.prs.length - a.prs.length)
                  .map((repo) => {
                  return (
                    <details key={repo.name} name="oss-accordion" className="group px-3 py-2.5">
                      <summary className="flex items-baseline justify-between gap-3 cursor-pointer list-none select-none">
                        <span className="flex items-baseline gap-2 min-w-0">
                          <span className="mono text-[11px] text-muted-foreground group-open:text-primary transition-colors">
                            <span className="group-open:hidden">[+]</span>
                            <span className="hidden group-open:inline">[-]</span>
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
                            className="mono text-[11px] leading-relaxed flex items-start gap-1.5"
                          >
                            <IoIosGitMerge className="shrink-0 text-[14px] text-[#8250df] dark:text-[#a371f7] mt-[1px]" />
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
                checkout more activity on{" "}
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
