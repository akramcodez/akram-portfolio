"use client";

import SiteHeader from "@/components/SiteHeader";
import SectionMarker from "@/components/SectionMarker";

import { projects, socials } from "@/data/data";

function social(name: string) {
  return socials.find((s) => s.name.toLowerCase() === name.toLowerCase());
}

function projectWhy(name: string) {
  switch (name) {
    case "PIVA":
      return "Webinars that talk back. Built it to turn one-way presentations into live, AI-driven conversations.";
    case "OsFit":
      return "Built it to seamlessly analyze code and fix complex issues right from GitHub.";
    case "MyTube":
      return "A YouTube clone built to learn how video platforms actually work under the hood.";
    case "RepoTune":
      return "Offline-first CLI. Built it to enforce pristine repos without needing API keys or complex setups.";
    default:
      return "";
  }
}

function projectBlurb(name: string, desc: string) {
  if (name === "OsFit")
    return "AI-powered tool for analyzing GitHub files and solving issues.";
  if (name === "RepoTune")
    return "Repository quality toolkit for open source maintainers.";
  return desc.endsWith(".") ? desc : `${desc}.`;
}

function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mono text-[11px] text-muted-foreground hover:text-primary transition-colors duration-150"
    >
      → {children}
    </a>
  );
}

export default function ProjectsPage() {
  const email = social("email");

  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      <SiteHeader />

      <main className="flex-1 w-full max-w-5xl mx-auto px-5 md:px-8 py-8 md:py-10">
        <div className="min-w-0 space-y-12 w-full">
          {/* projects */}
          <section id="projects" className="scroll-mt-20">
            <SectionMarker right="things i built">projects</SectionMarker>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {projects.map((p) => {
                const imageName = p.name === 'VeoMate' ? 'waitlist-veomate.png' : `${p.name.toLowerCase()}.png`;
                return (
                  <article key={p.name} className="flex flex-col border border-border rounded-sm overflow-hidden group hover:border-foreground/40 dark:hover:border-foreground/20 transition-colors duration-300 bg-card/20">
                    <div className="aspect-video w-full overflow-hidden border-b border-border bg-muted/30 relative">
                      <img 
                        src={`/${imageName}`} 
                        alt={`${p.name} screenshot`} 
                        className="w-full h-full object-cover object-top" 
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="mb-3">
                        <h3 className="font-semibold text-[16px] text-foreground mb-1">
                          {p.name}
                        </h3>
                        <p className="mono text-[10px] tracking-wider font-semibold text-primary uppercase">
                          {p.tech}
                        </p>
                      </div>
                      <p className="text-[14px] text-foreground/80 leading-relaxed mb-6 flex-1">
                        {projectBlurb(p.name, p.desc)}{" "}
                        <span className="text-muted-foreground">
                          {projectWhy(p.name)}
                        </span>
                      </p>
                      <div className="flex gap-5 mt-auto pt-4 border-t border-border/50">
                        <ArrowLink href={p.liveLink}>live</ArrowLink>
                        <ArrowLink href={p.link}>source</ArrowLink>
                        {(p as any).video && (
                          <ArrowLink href={(p as any).video}>video</ArrowLink>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </main>

      {email && <span className="hidden" aria-hidden>{email.handle}</span>}
    </div>
  );
}
