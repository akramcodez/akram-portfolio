"use client";
import Background from "@/components/Background";
import Controller from "@/components/Controller";
import ControllerHeader from "@/components/Controller/ControllerHeader";
import { CiCoffeeCup } from "react-icons/ci";
import MeetMe from "@/components/Main/MeetMe";
import Skills from "@/components/Main/Skills";
import QuickMenu from "@/components/QuickMenu";
import Projects from "@/components/Main/Projects";
import Socials from "@/components/Main/Socials";
import Loading from "@/components/Loading";
import { ThemeSelector } from "@/components/Theme/theme-selector";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import Experience from "@/components/Main/Experience";
import Link from "next/link";
import { PanelLeftClose, PanelLeftOpen, PanelTopClose, PanelTopOpen } from "lucide-react";

const VALID_SECTIONS = new Set(["meet-me", "skills", "my-work", "socials"]);

const SECTION_ID_MAP: Record<string, string> = {
  "meet-me": "meet-me",
  skills: "skills",
  "my-work": "experience",
  socials: "socials",
};

export default function Page() {
  const [showLoading, setShowLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<
    "meet-me" | "skills" | "my-work" | "socials"
  >("meet-me");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { theme } = useTheme();
  const mainRef = useRef<HTMLDivElement | null>(null);
  const normalizeHash = (raw: string) => {
    if (!raw) return "";
    return raw.replace(/^#\/?/, "").toLowerCase();
  };

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
    const initial = normalizeHash(window.location.hash || "");
    if (!initial || !VALID_SECTIONS.has(initial)) {
      window.history.replaceState(null, "", "#meet-me");
      setActiveSection("meet-me");
    } else if (VALID_SECTIONS.has(initial)) {
      setActiveSection(initial as typeof activeSection);
    }

    const applyHash = () => {
      const h = normalizeHash(window.location.hash || "");
      if (h && VALID_SECTIONS.has(h)) {
        setActiveSection(h as typeof activeSection);
      }
    };

    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const scrollToSection = (section: typeof activeSection) => {
    const container = mainRef.current;
    if (!container) return;

    const id = SECTION_ID_MAP[section];
    if (!id) return;

    const target = container.querySelector(`#${id}`) as HTMLElement | null;
    if (!target) return;

    const containerRect = container.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const offset = targetRect.top - containerRect.top + container.scrollTop;

    container.scrollTo({ top: offset, behavior: "smooth" });
  };

  const handleSectionChange = (section: typeof activeSection) => {
    if (activeSection === section) {
      scrollToSection(section);
    } else {
      setActiveSection(section);
    }
  };

  useEffect(() => {
    if (!mounted || showLoading) return;

    const scrollTimer = setTimeout(() => {
      scrollToSection(activeSection);
    }, 200);

    return () => clearTimeout(scrollTimer);
  }, [activeSection, mounted, showLoading]);

  useEffect(() => {
    const currentHash = normalizeHash(window.location.hash || "");
    if (activeSection !== currentHash) {
      const newUrl = `#${activeSection}`;
      window.history.replaceState(null, "", newUrl);
    }
  }, [activeSection]);

  if (showLoading) {
    return <Loading />;
  }

  if (!mounted) {
    return null;
  }

  const borderClass = theme === "dark" ? "border-white/80" : "border-black";

  return (
    <div
      className={`h-screen animate-blur-in pt-2 pr-2 pl-2 pb-2 md:pt-5 md:pr-5 md:pl-5 md:pb-5 xl:pt-8 xl:pr-7 xl:pl-7 xl:pb-7 2xl:pt-10 2xl:pr-10 2xl:pl-10 2xl:pb-10`}
    >
      <div className="flex flex-col items-end w-full h-full">
        <div className="flex w-full flex-1 min-h-0 items-end">
          {/* <div
            className={`w-5 h-30 hidden md:block border-[0.095rem] border-r-0 ${borderClass}`}
          >
            <ThemeSelector />
          </div> */}

          <div className={`w-full h-full flex flex-col md:flex-row items-end transition-[gap] duration-300 gap-3 ${isCollapsed ? 'md:gap-0' : ''}`}>
            <div 
              className={` 
                 flex flex-col gap-2 items-end transition-all duration-500 ease-in-out overflow-hidden
                 ${isCollapsed ? "display-none w-full md:w-0 max-h-0 md:max-h-full md:h-full opacity-0" : "w-full h-auto md:w-[18%] md:min-w-56 max-h-[500px] md:max-h-full opacity-100"}
              `}
            >
              <div className={`w-full hidden md:flex items-end`}>
                <ControllerHeader />
              </div>
              <div
                className={`w-full h-full md:w-full 2xl:min-h-auto border-[0.095rem] rounded-t-2xl ${borderClass} flex md:flex-col`}
              >
                <Controller
                  activeSection={activeSection}
                  onSectionChange={handleSectionChange}
                />
              </div>
            </div>

            <div
              className={`w-full flex-1 sm:h-full border-[0.095rem] flex relative ${isCollapsed ? 'rounded-t-2xl' : ''} rounded-b-2xl md:rounded-b-none md:rounded-t-none overflow-hidden ${borderClass} transition-all duration-300 min-h-0`}
            >
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className={`absolute z-40 p-2 rounded-full border transition-all duration-300 ease-in-out
                  ${theme === "dark" 
                    ? "bg-white/10 hover:bg-white/90 hover:text-black border-white/20 backdrop-blur-xl" 
                    : "bg-black/5 hover:bg-black/90 hover:text-white border-black/20 backdrop-blur-xl"
                  }
                  top-3 left-3
                  hidden md:block
                `}
                aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
              >
                 {isCollapsed ? <PanelLeftOpen className="w-4 h-4 md:w-5 md:h-5 pointer-events-none" /> : <PanelLeftClose className="w-4 h-4 md:w-5 md:h-5 pointer-events-none" />}
              </button>

               <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className={`absolute z-40 p-1.5 rounded-full border transition-all duration-300 ease-in-out flex items-center justify-center
                  ${theme === "dark" 
                    ? "bg-white/10 hover:bg-white/90 hover:text-black border-white/20 backdrop-blur-xl" 
                    : "bg-black/5 hover:bg-black/90 hover:text-white border-black/20 backdrop-blur-xl"
                  }
                  top-2 left-2
                  md:hidden
                `}
                aria-label={isCollapsed ? "Expand Menu" : "Collapse Menu"}
              >
                 {isCollapsed ? <PanelTopOpen className="w-4 h-4 pointer-events-none" /> : <PanelTopClose className="w-4 h-4 pointer-events-none" />}
              </button>

              <Background />

              <div className="absolute top-2 right-2 md:top-3 md:right-3 z-30">
                <QuickMenu />
              </div>

              <main
                ref={mainRef}
                className="h-full w-full absolute z-10 overflow-auto scrollbar-thin"
              >
                <div className="h-full w-full flex items-center justify-center">
                  <div className="h-full w-full">
                    <MeetMe />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Socials />
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>

        <div className="w-50 h-5 flex justify-end">
          <p className="text-xs opacity-80 pr-2 pt-0.5">© Sk Akram</p>
        </div>
      </div>
    </div>
  );
}
