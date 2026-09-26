"use client";

import SiteHeader from "@/components/SiteHeader";
import SectionMarker from "@/components/SectionMarker";
import Sidebar from "@/components/Sidebar";
import { socials, aboutContent } from "@/data/data";
import Image from "next/image";

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
            {aboutContent.map((paragraph, index) => (
              <p key={index} className={`text-[14px] md:text-[15px] leading-relaxed max-w-xl text-foreground/85 ${index > 0 ? "mt-4" : ""}`}>
                {paragraph}
              </p>
            ))}

            <div className="mt-8 rounded-sm overflow-hidden relative aspect-[2/1]">
              <Image
                src="/image.png"
                alt="Profile (Light)"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-opacity duration-500 opacity-100 dark:opacity-0"
              />
              <Image
                src="/image%20copy.png"
                alt="Profile (Dark)"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-opacity duration-500 opacity-0 dark:opacity-100"
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
