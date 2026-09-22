"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
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
        <div className="max-w-2xl">
          <SectionMarker right="voluntary, always">support</SectionMarker>

          <p className="text-[15px] leading-relaxed text-foreground/85">
            most of my work is open source and free. if something i built saved
            you time, or you just want to fund more late-night commits —
            here&apos;s how. no pressure either way; a star on github works
            too.
          </p>

          <div className="mt-8 divide-y divide-border border-y border-border">
            {/* UPI */}
            <div className="py-4 flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <div className="min-w-40">
                <p className="mono text-[13px] font-medium tracking-[0.08em]">
                  UPI
                </p>
                <p className="mono text-[10px] text-muted-foreground mt-0.5">
                  india · instant · no fees
                </p>
              </div>
              <div className="flex items-center gap-3 min-w-0">
                <span className="mono text-[13px] break-all">
                  skakram00zz@oksbi
                </span>
                <button
                  onClick={() => copyToClipboard("skakram00zz@oksbi")}
                  aria-label="Copy UPI ID"
                  className="mono text-[11px] text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 cursor-pointer shrink-0"
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
            <div className="py-4 flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <div className="min-w-40">
                <p className="mono text-[13px] font-medium tracking-[0.08em]">
                  WISE
                </p>
                <p className="mono text-[10px] text-muted-foreground mt-0.5">
                  international · low fees
                </p>
              </div>
              <a
                href="https://wise.com/pay/business/skakram"
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-[13px] link-quiet break-all"
              >
                wise.com/pay/business/skakram ↗
              </a>
            </div>

            {/* Buy me a coffee */}
            <div className="py-4 flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <div className="min-w-40">
                <p className="mono text-[13px] font-medium tracking-[0.08em]">
                  COFFEE
                </p>
                <p className="mono text-[10px] text-muted-foreground mt-0.5">
                  one-time or monthly
                </p>
              </div>
              <a
                href="https://buymeacoffee.com/akramcodez"
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-[13px] link-quiet break-all"
              >
                buymeacoffee.com/akramcodez ↗
              </a>
            </div>

            {/* GitHub */}
            <div className="py-4 flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <div className="min-w-40">
                <p className="mono text-[13px] font-medium tracking-[0.08em]">
                  FREE OPTION
                </p>
                <p className="mono text-[10px] text-muted-foreground mt-0.5">
                  costs nothing, means a lot
                </p>
              </div>
              <a
                href="https://github.com/akramcodez"
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-[13px] link-quiet break-all"
              >
                star a repo on github ↗
              </a>
            </div>
          </div>

          <p className="mono text-[11px] text-muted-foreground mt-6">
            thanks — it keeps the servers on and the prs flowing.
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
