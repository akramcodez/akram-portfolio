"use client";
import Background from "@/components/Background";
import Controller from "@/components/Controller";
import ControllerHeader from "@/components/Controller/ControllerHeader";
import { CiCoffeeCup } from "react-icons/ci";
import MeetMe from "@/components/Main/MeetMe";
import Skills from "@/components/Main/Skills";
import Projects from "@/components/Main/Projects";
import Socials from "@/components/Main/Socials";
import Loading from "@/components/Loading";
import { ThemeSelector } from "@/components/Theme/theme-selector";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import Experience from "@/components/Main/Experience";
import Link from "next/link";

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

  useEffect(() => {
    const container = mainRef.current;
    if (!container) return;

    const id = SECTION_ID_MAP[activeSection];
    if (!id) return;

    const target = container.querySelector(`#${id}`) as HTMLElement | null;
    if (!target) return;

    const containerRect = container.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const offset = targetRect.top - containerRect.top + container.scrollTop;

    container.scrollTo({ top: offset, behavior: "smooth" });
  }, [activeSection]);

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
      className={`h-screen animate-blur-in pt-5 pr-3 pl-3 pb-3 md:pt-10 md:pr-10 md:pl-5 md:pb-5 xl:pt-12 xl:pr-12 xl:pl-7 xl:pb-7 2xl:pt-15 2xl:pr-15 2xl:pl-10 2xl:pb-10`}
    >
      <div className="flex flex-col items-end w-full h-full">
        <div className="flex w-full h-full items-end">
          <div
            className={`w-5 h-30 hidden md:block border-[0.095rem] border-r-0 ${borderClass}`}
          >
            <ThemeSelector />
          </div>

          <div className="w-full h-full flex flex-col md:flex-row items-end gap-3">
            <div className="w-full h-auto md:w-[23%] 2xl:w-[20%] md:min-w-60 flex flex-col gap-2 items-end">
              <div className="w-full hidden md:flex items-end ">
                <ControllerHeader />
              </div>
              <div
                className={`w-full h-full md:w-full  2xl:min-h-auto border-[0.095rem] rounded-t-2xl ${borderClass} flex md:flex-col`}
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

              <Link
                href="https://buymeacoffee.com/akramcodez"
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute top-3 right-3 z-30 p-2 rounded-full border transition-all duration-300 ease-in-out ${
                  theme === "dark"
                    ? "bg-white/10 hover:bg-white/90 hover:text-black border-white/20 backdrop-blur-xl"
                    : "bg-black/5 hover:bg-black/90 hover:text-white border-black/20 backdrop-blur-xl"
                }`}
              >
                <CiCoffeeCup className="h-5 w-5" />
              </Link>

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
