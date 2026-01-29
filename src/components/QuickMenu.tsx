"use client";
import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { MoreVertical, Star, Sun, Moon } from "lucide-react";
import { TbMenu3 } from "react-icons/tb";
import { LuHeartHandshake } from "react-icons/lu";

export default function QuickMenu({ fromSection }: { fromSection?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const buttonBaseClass = `rounded-full border transition-all duration-300 ease-in-out flex items-center justify-center relative overflow-hidden group`;
  const themeClass =
    theme === "dark"
      ? "bg-white/10 hover:bg-white/90 hover:text-black border-white/20 backdrop-blur-xl"
      : "bg-black/5 hover:bg-black/90 hover:text-white border-black/20 backdrop-blur-xl";

  // Trigger button: smaller on mobile (p-1.5), larger on desktop (p-2)
  const triggerClass = `${buttonBaseClass} ${themeClass} p-1.5 md:p-2`;

  // Menu item button: centers content by default, expands on hover
  const menuItemClass = `${buttonBaseClass} ${themeClass} p-1.5 md:p-2 w-full justify-center`;

  const menuClass = `absolute top-full right-0 mt-1 flex flex-col gap-2 p-1.5 md:p-2 rounded-2xl border transition-all duration-300 ease-in-out z-50 min-w-max ${
    theme === "dark"
      ? "bg-black/80 border-white/20 backdrop-blur-xl"
      : "bg-white/80 border-black/20 backdrop-blur-xl"
  }`;

  const textClass =
    "whitespace-nowrap overflow-hidden transition-all duration-300 max-w-0 opacity-0 group-hover:max-w-[150px] group-hover:opacity-100 group-hover:ml-2 text-xs font-medium";

  return (
    <div className="relative" ref={menuRef}>
      <button
        className={`${triggerClass}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Quick Menu"
      >
        <TbMenu3 className="w-4 h-4 md:w-5 md:h-5" />
      </button>

      <div
        className={`${menuClass} ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        {/* Star Repo */}
        <Link
          href="https://github.com/akramcodez/Akram-Portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className={menuItemClass}
        >
          <Star className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
          <span className={textClass}>Star Repo</span>
        </Link>

        {/* Support Me */}
        <Link
          href={fromSection ? `/support?from=${fromSection}` : "/support"}
          className={menuItemClass}
        >
          <LuHeartHandshake className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
          <span className={textClass}>Support Me</span>
        </Link>

        {/* Theme Toggle */}
        <button onClick={toggleTheme} className={menuItemClass}>
          {theme === "dark" ? (
            <Sun className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
          ) : (
            <Moon className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
          )}
          <span className={textClass}>
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
      </div>
    </div>
  );
}
