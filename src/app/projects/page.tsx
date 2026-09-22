"use client";

import SiteHeader from "@/components/SiteHeader";
import SectionMarker from "@/components/SectionMarker";
import Sidebar from "@/components/Sidebar";
import { projects, socials } from "@/data/data";

function social(name: string) {
  return socials.find((s) => s.name.toLowerCase() === name.toLowerCase());
}

function projectWhy(name: string) {
  switch (name) {
    case "PIVA":
      return "Webinars that talk back. Built it to turn one-way presentations into live, AI-driven conversations.";
    case "OsFit":
      return "Built for the Apify × Lingo.dev hackathon: fitness coaching that works in 20+ languages.";
    case "MyTube":
      return "A YouTube clone built to learn how video platforms actually work under the hood.";
    case "VeoMate":
      return "Workplace tools forget everything. This one remembers. Currently being built.";
    default:
      return "";
  }
}

function projectBlurb(name: string, desc: string) {
  if (name === "OsFit")
    return "Multilingual fitness app for the Apify × Lingo.dev hackathon.";
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
        <div className="lg:grid lg:grid-cols-[1fr_1px_310px] lg:gap-6">
        <div className="min-w-0 space-y-12">
          {/* projects */}
          <section id="projects" className="scroll-mt-20">
            <SectionMarker right="things i built">projects</SectionMarker>
            <div className="divide-y divide-border border-y border-border">
              {projects.map((p) => (
                <article key={p.name} className="py-4">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="mono text-[13px] font-medium tracking-[0.1em]">
                      {p.name.toUpperCase()}
                    </h3>
                    <p className="mono text-[11px] text-muted-foreground">
                      {p.tech}
                    </p>
                  </div>
                  <p className="text-sm mt-1.5 text-foreground/90">
                    {projectBlurb(p.name, p.desc)}{" "}
                    <span className="text-muted-foreground">
                      {projectWhy(p.name)}
                    </span>
                  </p>
                  <div className="flex gap-4 mt-2">
                    <ArrowLink href={p.liveLink}>live</ArrowLink>
                    <ArrowLink href={p.link}>source</ArrowLink>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <Sidebar />
        </div>
      </main>

      {email && <span className="hidden" aria-hidden>{email.handle}</span>}
    </div>
  );
}
