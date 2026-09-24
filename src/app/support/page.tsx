"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SectionMarker from "@/components/SectionMarker";

export default function SupportPage() {
  const [copiedUPI, setCopiedUPI] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedUPI(true);
      setTimeout(() => setCopiedUPI(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      <SiteHeader />

      <main className="flex-1 w-full max-w-5xl mx-auto px-5 md:px-8 py-8 md:py-10">
        <div className="w-full">
          <SectionMarker right="voluntary, always">support</SectionMarker>

          <p className="text-[15px] leading-relaxed text-foreground/85">
            if my open source work saved you time, you can fund my late-night commits below, or simply support me with a follow or a star.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* UPI */}
            <div className="flex flex-col border border-border rounded-sm p-5 bg-card/20 hover:border-foreground/40 dark:hover:border-foreground/20 transition-colors duration-300">
              <div className="mb-6">
                <h3 className="font-semibold text-[16px] text-foreground">UPI</h3>
                <p className="text-[13px] text-muted-foreground mt-1">India · Instant · No fees</p>
              </div>
              <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between gap-2">
                <span className="mono text-[12px] truncate">skakram00zz@oksbi</span>
                <button
                  onClick={() => copyToClipboard("skakram00zz@oksbi")}
                  aria-label="Copy UPI ID"
                  className="mono text-[11px] text-primary hover:text-foreground transition-colors inline-flex items-center gap-1 cursor-pointer shrink-0 uppercase font-medium"
                >
                  {copiedUPI ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> copy
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Wise */}
            <a href="https://wise.com/pay/business/skakram" target="_blank" rel="noopener noreferrer" className="group flex flex-col border border-border rounded-sm p-5 bg-card/20 hover:border-foreground/40 dark:hover:border-foreground/20 transition-colors duration-300">
              <div className="mb-6">
                <h3 className="font-semibold text-[16px] text-foreground group-hover:text-primary transition-colors">Wise</h3>
                <p className="text-[13px] text-muted-foreground mt-1">International · Low fees</p>
              </div>
              <div className="mt-auto pt-4 border-t border-border/50">
                <span className="mono text-[11px] text-primary font-medium uppercase">send via wise ↗</span>
              </div>
            </a>

            {/* Coffee */}
            <a href="https://buymeacoffee.com/akramcodez" target="_blank" rel="noopener noreferrer" className="group flex flex-col border border-border rounded-sm p-5 bg-card/20 hover:border-foreground/40 dark:hover:border-foreground/20 transition-colors duration-300">
              <div className="mb-6">
                <h3 className="font-semibold text-[16px] text-foreground group-hover:text-primary transition-colors">Buy Me a Coffee</h3>
                <p className="text-[13px] text-muted-foreground mt-1">One-time or monthly</p>
              </div>
              <div className="mt-auto pt-4 border-t border-border/50">
                <span className="mono text-[11px] text-primary font-medium uppercase">buy coffee ↗</span>
              </div>
            </a>

            {/* GitHub */}
            <a href="https://github.com/akramcodez" target="_blank" rel="noopener noreferrer" className="group flex flex-col border border-border rounded-sm p-5 bg-card/20 hover:border-foreground/40 dark:hover:border-foreground/20 transition-colors duration-300">
              <div className="mb-6">
                <h3 className="font-semibold text-[16px] text-foreground group-hover:text-primary transition-colors">GitHub</h3>
                <p className="text-[13px] text-muted-foreground mt-1">Star my repos or follow me</p>
              </div>
              <div className="mt-auto pt-4 border-t border-border/50">
                <span className="mono text-[11px] text-primary font-medium uppercase">github.com/akramcodez ↗</span>
              </div>
            </a>

            {/* X (Twitter) */}
            <a href="https://x.com/akramcodez" target="_blank" rel="noopener noreferrer" className="group flex flex-col border border-border rounded-sm p-5 bg-card/20 hover:border-foreground/40 dark:hover:border-foreground/20 transition-colors duration-300">
              <div className="mb-6">
                <h3 className="font-semibold text-[16px] text-foreground group-hover:text-primary transition-colors">X (Twitter)</h3>
                <p className="text-[13px] text-muted-foreground mt-1">Follow me for updates</p>
              </div>
              <div className="mt-auto pt-4 border-t border-border/50">
                <span className="mono text-[11px] text-primary font-medium uppercase">x.com/akramcodez ↗</span>
              </div>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/akramcodez" target="_blank" rel="noopener noreferrer" className="group flex flex-col border border-border rounded-sm p-5 bg-card/20 hover:border-foreground/40 dark:hover:border-foreground/20 transition-colors duration-300">
              <div className="mb-6">
                <h3 className="font-semibold text-[16px] text-foreground group-hover:text-primary transition-colors">LinkedIn</h3>
                <p className="text-[13px] text-muted-foreground mt-1">Connect with me</p>
              </div>
              <div className="mt-auto pt-4 border-t border-border/50">
                <span className="mono text-[11px] text-primary font-medium uppercase">in/akramcodez ↗</span>
              </div>
            </a>
          </div>

          <p className="mono text-[11px] text-muted-foreground mt-8">
            thanks. it keeps the servers on and the prs flowing.
          </p>
        </div>
      </main>
    </div>
  );
}
