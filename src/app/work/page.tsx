"use client";

import SiteHeader from "@/components/SiteHeader";
import SectionMarker from "@/components/SectionMarker";
import { IoIosGitMerge } from "react-icons/io";

import { repos, socials, experiences } from "@/data/data";

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
              {experiences.map((exp, index) => (
                <div key={index} className="border border-border p-4 flex gap-4 items-start">
                  <img src={exp.logo} alt={`${exp.company} logo`} className="w-9 h-9 rounded-sm object-cover bg-white border border-border shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-medium text-[14px] md:text-[15px] text-foreground">
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="link-quiet">
                          {exp.company}
                        </a>
                      </h3>
                      {exp.roles.length === 1 && (
                        <p className="text-[13px] md:text-[14px] text-primary">
                          {exp.roles[0].period}
                        </p>
                      )}
                    </div>
                    
                    {exp.roles.length === 1 ? (
                      <p className="text-[14px] md:text-[15px] text-foreground/85 mt-1">
                        {exp.roles[0].title} · {exp.roles[0].type} · {exp.roles[0].location}
                      </p>
                    ) : (
                      <div className="mt-4 pl-2">
                        <div className="border-l-2 border-border/50 pl-4 space-y-4">
                          {exp.roles.map((role, rIndex) => (
                            <div key={rIndex}>
                              <div className="flex flex-wrap items-baseline justify-between gap-2">
                                <p className="font-medium text-[14px] md:text-[15px] text-foreground/90">
                                  {role.title} · {role.type} · {role.location}
                                </p>
                                <p className="text-[13px] md:text-[14px] text-muted-foreground">
                                  {role.period}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
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
              <p className="mono text-[10px] md:text-[11px] tracking-[0.14em] text-muted-foreground mb-2">
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
                          <span className="mono text-[10px] md:text-[11px] text-muted-foreground group-open:text-primary transition-colors">
                            <span className="group-open:hidden">[+]</span>
                            <span className="hidden group-open:inline">[-]</span>
                          </span>
                          <span className="text-sm font-semibold truncate">
                            {repo.name === "internetarchive"
                              ? "internetarchive/openlibrary"
                              : repo.name}
                          </span>
                        </span>
                        <span className="mono text-[10px] md:text-[11px] text-muted-foreground shrink-0">
                          {repo.prs.length} pr{repo.prs.length > 1 ? "s" : ""}
                        </span>
                      </summary>
                      <ul className="mt-2.5 ml-6 space-y-1.5 pb-1">
                        {repo.prs.map((pr) => (
                          <li
                            key={pr.url}
                            className="mono text-[10px] md:text-[11px] leading-relaxed flex items-start gap-1.5"
                          >
                            <IoIosGitMerge className="shrink-0 text-[13px] md:text-[14px] text-[#8250df] dark:text-[#a371f7] mt-[1px]" />
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
              <p className="mono text-[10px] md:text-[11px] text-muted-foreground mt-2.5">
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
