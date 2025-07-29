"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSelector() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col h-full">
      <div
        onClick={() => setTheme("light")}
        className={`flex-1 flex items-center justify-center border-b-1 cursor-pointer ${
          theme === "dark" ? "border-white/70" : "border-black"
        }`}
      >
        <h3
          className={`font-semibold rotate-270 transform origin-center whitespace-nowrap text-xs ${
            theme === "light" ? "text-black" : "text-white/40"
          }`}
        >
          LIGHT
        </h3>
      </div>
      <div
        onClick={() => setTheme("dark")}
        className={`flex-1 flex items-center justify-center cursor-pointer`}
      >
        <h3
          className={`font-semibold rotate-270 transform origin-center whitespace-nowrap text-xs ${
            theme === "dark" ? "text-white" : "text-black/35"
          }`}
        >
          DARK
        </h3>
      </div>
    </div>
  );
}
