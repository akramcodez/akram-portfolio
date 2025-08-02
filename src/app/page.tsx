"use client";
import Background from "@/components/Background";
import Controller from "@/components/Controller";
import ControllerHeader from "@/components/Controller/ControllerHeader";
import MeetMe from "@/components/Main/MeetMe";
import Skills from "@/components/Main/Skills";
import Projects from "@/components/Main/Projects";
import ExploreMore from "@/components/Main/ExploreMore";
import Loading from "@/components/Loading";
import { ThemeSelector } from "@/components/Theme/theme-selector";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";

export default function Page() {
  const [showLoading, setShowLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<
    "meet-me" | "skills" | "projects" | "explore-more"
  >("meet-me");
  const { theme } = useTheme();
  const [animationClass, setAnimationClass] = useState("animate-blur-in");
  const isInitialMount = useRef(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setShowLoading(false);
    }, 1100);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    setAnimationClass("");
    setTimeout(() => {
      setAnimationClass("animate-blur-in");
    }, 10);
  }, [theme]);

  if (showLoading) {
    return <Loading />;
  }

  if (!mounted) {
    return null;
  }

  const borderClass = theme === "dark" ? "border-white/80" : "border-black";

  return (
    <div
      className={`h-screen pt-5 pr-3 pl-3 pb-3 md:pt-10 md:pr-10 md:pl-5 md:pb-5 xl:pt-12 xl:pr-12 xl:pl-7 xl:pb-7 2xl:pt-15 2xl:pr-15 2xl:pl-10 2xl:pb-10 ${animationClass}`}
    >
      <div className="flex flex-col items-end w-full h-full">
        <div className="flex w-full h-full items-end">
          <div
            className={`w-5 h-30 hidden md:block border-[0.095rem] border-r-0 ${borderClass}`}
          >
            <ThemeSelector />
          </div>

          <div className="w-full h-full flex flex-col md:flex-row items-end gap-3">
            <div className="w-full md:w-62 xl:w-75 flex flex-col gap-2 items-end">
              <div className="w-full hidden md:flex items-end ">
                <ControllerHeader />
              </div>
              <div
                className={`w-full md:w-62 3xl:w-75 md:h-[54%] border-[0.095rem] rounded-t-2xl ${borderClass} flex md:flex-col`}
              >
                <Controller
                  activeSection={activeSection}
                  onSectionChange={setActiveSection}
                />
              </div>
            </div>

            <div
              className={`w-full h-full border-[0.095rem] flex relative rounded-b-2xl  md:rounded-b-none overflow-hidden ${borderClass}`}
            >
              <Background />

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
