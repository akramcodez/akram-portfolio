"use client";

import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionMarker from "@/components/SectionMarker";
import GithubPanel from "@/components/GithubPanel";
import { projects, repos, socials } from "@/data/data";
import { blogPosts } from "@/data/blogPosts";

const INTERESTS = [
  "AI",
  "developer tools",
  "open source",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
];

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

export default function Home() {
  const email = social("email");

  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      <SiteHeader />

      <main className="flex-1 w-full max-w-5xl mx-auto px-5 md:px-8 py-8 md:py-10 lg:grid lg:grid-cols-[1fr_310px] lg:gap-12">
        {/* ── Left / main column ─────────────────────────────── */}
        <div className="min-w-0 space-y-12">
          {/* about */}
          <section id="about" className="scroll-mt-20">
            <SectionMarker right="cs student · india">about</SectionMarker>
            <p className="text-[15px] leading-relaxed max-w-xl">
              hi, i&apos;m akram. i&apos;m a full-stack developer who likes
              building things, breaking things, and contributing to software
              i actually use. i&apos;m a computer science student who learned
              to code by shipping: most of what i know came from getting real
              pull requests reviewed, rejected, and merged.
            </p>
            <p className="text-[15px] leading-relaxed max-w-xl mt-4">
              right now i&apos;m mostly into{" "}
              <span className="mono text-[13px]">
                {INTERESTS.map((t, i) => (
                  <span key={t}>
                    <span className={i < 3 ? "text-primary" : ""}>{t}</span>
                    {i < INTERESTS.length - 1 && " · "}
                  </span>
                ))}
              </span>
            </p>
            <p className="mono text-[11px] text-muted-foreground mt-4">
              @akramcodez{" "}
              <span className="text-primary animate-blink">▊</span>
            </p>
          </section>

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

          {/* writing */}
          <section id="writing" className="scroll-mt-20">
            <SectionMarker
              right={
                <Link href="/blogs" className="link-quiet">
                  all posts →
                </Link>
              }
            >
              writing
            </SectionMarker>
            <div className="divide-y divide-border border-y border-border">
              {blogPosts.map((post) => (
                <div key={post.slug} className="py-3 flex items-start gap-4">
                  <span className="mono text-[11px] text-muted-foreground mt-[3px] shrink-0 w-14">
                    *
                  </span>
                  <div className="min-w-0">
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="text-sm font-semibold link-quiet"
                    >
                      {post.title}
                    </Link>
                    <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── Right / sidebar column (desktop) ───────────────── */}
        <aside className="hidden lg:block space-y-9">
          <GithubPanel />

          <section>
            <p className="mono text-[11px] tracking-[0.14em] text-muted-foreground">
              CURRENT STATUS
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-baseline gap-2">
                <span className="mono text-[11px] text-primary">●</span>
                building at Nano Collective
              </li>
              <li className="flex items-baseline gap-2">
                <span className="mono text-[11px] text-primary">●</span>
                open to interesting opportunities
              </li>
            </ul>
          </section>

          <section>
            <p className="mono text-[11px] tracking-[0.14em] text-muted-foreground">
              LINKS
            </p>
            <ul className="mt-3 space-y-1.5">
              {["GitHub", "X (Twitter)", "LinkedIn", "Email"].map((name) => {
                const s = social(name);
                if (!s) return null;
                return (
                  <li key={name} className="mono text-[12px]">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-quiet"
                    >
                      {name === "X (Twitter)" ? "x" : name.toLowerCase()}
                    </a>
                    <span className="text-muted-foreground">
                      {" "}
                      · {name === "Email" ? "skakram00zz" : s.handle}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>

          <section>
            <p className="mono text-[11px] tracking-[0.14em] text-muted-foreground">
              META
            </p>
            <ul className="mt-3 space-y-1.5 mono text-[12px]">
              <li>
                <Link href="/support" className="link-quiet">
                  /support
                </Link>{" "}
                <span className="text-muted-foreground">
                  · fund more open source
                </span>
              </li>
              <li>
                <a
                  href="https://github.com/akramcodez/akram-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-quiet"
                >
                  /source
                </a>{" "}
                <span className="text-muted-foreground">
                  · this site&apos;s code
                </span>
              </li>
            </ul>
          </section>

          <section>
            <p className="mono text-[11px] tracking-[0.14em] text-muted-foreground">
              STACK
            </p>
            <p className="mono text-[12px] mt-3 leading-loose text-foreground/80">
              typescript · next.js · react · node.js · prisma · postgres ·
              supabase
            </p>
            <p className="mono text-[10px] text-muted-foreground mt-2">
              tools are replaceable; shipping isn&apos;t.
            </p>
          </section>

          <p className="mono text-[11px] text-muted-foreground pt-2">
            $ whoami
            <br />
            <span className="text-foreground/80">
              builder, contributor, cs student
            </span>
          </p>
        </aside>

        {/* ── Mobile: reordered extras ───────────────────────── */}
        <div className="lg:hidden mt-12 space-y-9">
          <GithubPanel />

          <section>
            <p className="mono text-[11px] tracking-[0.14em] text-muted-foreground">
              CURRENT STATUS
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-baseline gap-2">
                <span className="mono text-[11px] text-primary">●</span>
                building at Nano Collective
              </li>
              <li className="flex items-baseline gap-2">
                <span className="mono text-[11px] text-primary">●</span>
                open to interesting opportunities
              </li>
            </ul>
          </section>

          <section>
            <p className="mono text-[11px] tracking-[0.14em] text-muted-foreground">
              LINKS
            </p>
            <ul className="mt-3 space-y-1.5">
              {["GitHub", "X (Twitter)", "LinkedIn", "Email"].map((name) => {
                const s = social(name);
                if (!s) return null;
                return (
                  <li key={name} className="mono text-[12px]">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-quiet"
                    >
                      {name === "X (Twitter)" ? "x" : name.toLowerCase()}
                    </a>
                    <span className="text-muted-foreground">
                      {" "}
                      · {name === "Email" ? "skakram00zz" : s.handle}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>

          <section>
            <p className="mono text-[11px] tracking-[0.14em] text-muted-foreground">
              META
            </p>
            <ul className="mt-3 space-y-1.5 mono text-[12px]">
              <li>
                <Link href="/support" className="link-quiet">
                  /support
                </Link>{" "}
                <span className="text-muted-foreground">
                  · fund more open source
                </span>
              </li>
              <li>
                <a
                  href="https://github.com/akramcodez/akram-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-quiet"
                >
                  /source
                </a>{" "}
                <span className="text-muted-foreground">
                  · this site&apos;s code
                </span>
              </li>
            </ul>
          </section>

          <section>
            <p className="mono text-[11px] tracking-[0.14em] text-muted-foreground">
              STACK
            </p>
            <p className="mono text-[12px] mt-3 leading-loose text-foreground/80">
              typescript · next.js · react · node.js · prisma · postgres ·
              supabase
            </p>
            <p className="mono text-[10px] text-muted-foreground mt-2">
              tools are replaceable; shipping isn&apos;t.
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
      {email && <span className="hidden" aria-hidden>{email.handle}</span>}
    </div>
  );
}
