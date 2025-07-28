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
    return <div className="w-32 h-10" />;
  }

  return (
    <div className="flex gap-2 p-1 border rounded-md bg-background">
      <button
        onClick={() => setTheme("light")}
        className={`px-3 py-1 rounded transition-colors ${
          theme === "light"
            ? "bg-accent text-accent-foreground"
            : "hover:bg-accent/50"
        }`}
      >
        Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`px-3 py-1 rounded transition-colors ${
          theme === "dark"
            ? "bg-accent text-accent-foreground"
            : "hover:bg-accent/50"
        }`}
      >
        Dark
      </button>
    </div>
  );
}
