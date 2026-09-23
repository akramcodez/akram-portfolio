"use client";

import SiteHeader from "@/components/SiteHeader";
import SectionMarker from "@/components/SectionMarker";
import Sidebar from "@/components/Sidebar";
import { socials } from "@/data/data";

const INTERESTS = [
  "AI",
  "developer tools",
  "open source",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
];

function social(name: string) {
  return socials.find((s) => s.name.toLowerCase() === name.toLowerCase());
}



export default function Home() {
  const email = social("email");

  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      <SiteHeader />

      <main className="flex-1 w-full max-w-5xl mx-auto px-5 md:px-8 py-8 md:py-10">
        <div className="lg:grid lg:grid-cols-[1fr_1px_310px] lg:gap-6">
        {/* ── Left / main column ─────────────────────────────── */}
        <div className="min-w-0 space-y-12">
          {/* about */}
          <section id="about" className="scroll-mt-20">
            <SectionMarker right="TL;DR">about</SectionMarker>
            <p className="text-[15px] leading-relaxed max-w-xl text-foreground/85">
              I&apos;m <span className="font-medium text-foreground">Sk Akram</span>, a software engineer from <span className="font-medium text-foreground">India</span>. I&apos;m currently a Software Engineer at <a href="https://nanocollective.org/" target="_blank" rel="noopener noreferrer" className="link-quiet font-medium text-foreground">Nano Collective</a> and also work part-time as a Software Engineer at <a href="https://experts.afterquery.com/" target="_blank" rel="noopener noreferrer" className="link-quiet font-medium text-foreground">AfterQuery Experts</a>. I&apos;ve worked across projects involving <span className="font-medium text-foreground">AI</span>, <span className="font-medium text-foreground">developer tooling</span>, and <span className="font-medium text-foreground">full-stack web development</span>.
            </p>
            <p className="text-[15px] leading-relaxed max-w-xl mt-4 text-foreground/85">
              I&apos;m also an active <span className="font-medium text-foreground">open-source contributor</span> with <span className="font-medium text-foreground">60+ merged PRs</span> across projects and organizations including <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="link-quiet font-medium text-foreground">OpenClaw</a>, <a href="https://github.com/activepieces/activepieces" target="_blank" rel="noopener noreferrer" className="link-quiet font-medium text-foreground">Activepieces</a>, <a href="https://github.com/internetarchive/openlibrary" target="_blank" rel="noopener noreferrer" className="link-quiet font-medium text-foreground">Internet Archive</a>, <a href="https://github.com/zed-industries/zed" target="_blank" rel="noopener noreferrer" className="link-quiet font-medium text-foreground">zed</a>, and <a href="https://github.com/dodopayments/billingsdk" target="_blank" rel="noopener noreferrer" className="link-quiet font-medium text-foreground">DodoPayments</a>. I really like working on hard things because I want to keep growing and in the process provide meaningful value to others. Outside of software engineering, I share what I&apos;m building, learning, and some random thoughts with a <span className="font-medium text-foreground">6K+ audience</span> on <a href="https://x.com/akramcodez" target="_blank" rel="noopener noreferrer" className="link-quiet font-medium text-foreground">X (@akramcodez)</a>.
            </p>

            <div className="mt-8 rounded-sm overflow-hidden relative aspect-[2/1]">
              <img 
                src="/image.png" 
                alt="Profile (Light)" 
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 dark:opacity-0" 
              />
              <img 
                src="/image%20copy.png" 
                alt="Profile (Dark)" 
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 dark:opacity-100" 
              />
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
