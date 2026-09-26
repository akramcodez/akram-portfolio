"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

const nav = [
  { label: "about", href: "/" },
  { label: "work", href: "/work" },
  { label: "projects", href: "/projects" },
  { label: "github", href: "https://github.com/akramcodez", external: true },
];

export default function SiteHeader() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header>
      <div className="max-w-5xl mx-auto px-5 md:px-8 pt-6 pb-5 border-b border-border">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link
              href="/"
              className={`text-4xl leading-none transition-transform hover:scale-[1.02] ${dancingScript.className}`}
            >
              Sk Akram
            </Link>
            <p className="mono text-[10px] md:text-[11px] text-muted-foreground mt-2">
              software engineer / tech creator
            </p>
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="mt-1 p-1.5 text-muted-foreground hover:text-primary transition-colors duration-150 cursor-pointer"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )
            ) : (
              <span className="block w-4 h-4" />
            )}
          </button>
        </div>

        <nav className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1">
          {nav.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-[11px] md:text-[12px] text-muted-foreground hover:text-primary transition-colors duration-150"
              >
                {item.label} ↗
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`mono text-[11px] md:text-[12px] transition-colors duration-150 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
