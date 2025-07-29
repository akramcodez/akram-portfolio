"use client";
import Background from "@/components/Background";
import { ThemeSelector } from "@/components/Theme/theme-selector";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function page() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="h-screen pt-9 pr-9 pl-4 pb-4">
      <div className="flex flex-col items-end w-full h-full">
        <div className="flex w-full h-full items-end">
          <div
            className={`w-5 h-30 border-1 border-r-0 ${
              theme === "dark" ? "border-white/70" : "border-black"
            }`}
          >
            <ThemeSelector />
          </div>
          <div className={`w-full h-full flex items-end gap-3`}>
            <div
              className={`min-w-65 w-[20vw] h-[65%] border-1 rounded-t-2xl ${
                theme === "dark" ? "border-white/70" : "border-black"
              }`}
            ></div>
            <div
              className={`flex-1 h-full border-1 rounded-b-2xl flex relative overflow-hidden ${
                theme === "dark" ? "border-white/70" : "border-black"
              }`}
            >
              <Background />
            </div>
          </div>
        </div>
        <div className={`w-50 h-5 flex justify-end`}>
          <p className="text-xs opacity-80 pr-2 pt-0.5">© SK Akram</p>
        </div>
      </div>
    </div>
  );
}
