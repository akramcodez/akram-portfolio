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
