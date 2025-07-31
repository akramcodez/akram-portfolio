"use client";
import Background from "@/components/Background";
import Controller from "@/components/Controller";
import ControllerHeader from "@/components/Controller/ControllerHeader";
import MeetMe from "@/components/Main/MeetMe";
import Skills from "@/components/Main/Skills";
import Projects from "@/components/Main/Projects";
import ExploreMore from "@/components/Main/ExploreMore";
import { ThemeSelector } from "@/components/Theme/theme-selector";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<
    "meet-me" | "skills" | "projects" | "explore-more"
  >("meet-me");
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
                <Controller
                  activeSection={activeSection}
                  onSectionChange={setActiveSection}
                />
              </div>
            </div>

            {/* Main content area with corrected structure */}
            <div
              className={`w-full h-full border-[0.095rem] flex relative overflow-hidden ${borderClass}`}
            >
              {/* Background is now a direct child */}
              <Background />

              {/* Main content now has a z-index to stay on top */}
              <main className="h-full w-full absolute z-10 overflow-auto">
                {activeSection === "meet-me" && <MeetMe />}
                {activeSection === "skills" && <Skills />}
                {activeSection === "projects" && <Projects />}
                {activeSection === "explore-more" && <ExploreMore />}
              </main>
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
