"use client";
import Background from "@/components/Background";
import Controller from "@/components/Controller";
import ControllerHeader from "@/components/Controller/ControllerHeader";
import { ThemeSelector } from "@/components/Theme/theme-selector";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const borderClass = theme === "dark" ? "border-white/80" : "border-black";

  return (
    <div className="h-screen pt-9 pr-9 pl-4 pb-4">
      <div className="flex flex-col items-end w-full h-full">
        <div className="flex w-full h-full items-end">
          <div
            className={`w-5 h-30 border-[0.095rem] border-r-0 ${borderClass}`}
          >
            <ThemeSelector />
          </div>

          <div className="w-full h-full flex flex-col md:flex-row items-end gap-3">
            <div className="w-full md:w-62 flex flex-col gap-2 items-end">
              <div className="w-full hidden md:flex items-end ">
                <ControllerHeader />
              </div>
              <div
                className={`w-full md:w-62 md:h-[54%] border-[0.095rem] rounded-t-2xl ${borderClass} flex md:flex-col`}
              >
                <Controller />
              </div>
            </div>

            <div
              className={`w-full h-full border-[0.095rem] flex relative overflow-hidden ${borderClass}`}
            >
              <Background />
            </div>
          </div>
        </div>

        <div className="w-50 h-5 flex justify-end">
          <p className="text-xs opacity-80 pr-2 pt-0.5">© SK Akram</p>
        </div>
      </div>
    </div>
  );
}
