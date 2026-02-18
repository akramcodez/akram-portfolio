"use client";
import Background from "@/components/Background";
import Controller from "@/components/Controller";
import ControllerHeader from "@/components/Controller/ControllerHeader";

import MeetMe from "@/components/Main/MeetMe";
import Skills from "@/components/Main/Skills";
import QuickMenu from "@/components/QuickMenu";
import Projects from "@/components/Main/Projects";
import Socials from "@/components/Main/Socials";
import Loading from "@/components/Loading";
import Link from "next/link";
import Image from "next/image";

import { useTheme } from "next-themes";
import { useCallback, useEffect, useState, useRef } from "react";
import Experience from "@/components/Main/Experience";

import ProjectDetail from "@/components/Main/ProjectDetail";
import {
  PanelLeftClose,
  PanelLeftOpen,
  PanelTopClose,
  PanelTopOpen,
} from "lucide-react";

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
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const { theme } = useTheme();
  const mainRef = useRef<HTMLDivElement | null>(null);
  const normalizeHash = (raw: string) => {
    if (!raw) return "";
    return raw.replace(/^#\/?/, "").toLowerCase();
  };

  // Update URL with collapse state
  const updateUrlWithCollapseState = (collapsed: boolean) => {
    const url = new URL(window.location.href);
    if (collapsed) {
      url.searchParams.set("collapsed", "true");
    } else {
      url.searchParams.delete("collapsed");
    }
    window.history.replaceState(null, "", url.toString());
  };

  // Toggle collapse and update URL
  const handleCollapseToggle = () => {
    const newCollapseState = !isCollapsed;
    setIsCollapsed(newCollapseState);
    updateUrlWithCollapseState(newCollapseState);
  };

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setShowLoading(false);
    }, 1100);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    setMounted(true);

    // Check URL params for collapse state on mount
    const urlParams = new URLSearchParams(window.location.search);
    const collapsedParam = urlParams.get("collapsed");
    if (collapsedParam === "true") {
      setIsCollapsed(true);
    }
  }, []);

  useEffect(() => {
    const initial = normalizeHash(window.location.hash || "");
    if (
      !initial ||
      (!VALID_SECTIONS.has(initial) && !initial.startsWith("project-"))
    ) {
      window.history.replaceState(null, "", "#meet-me");
      setActiveSection("meet-me");
    } else if (VALID_SECTIONS.has(initial)) {
      setActiveSection(initial as typeof activeSection);
    } else if (initial.startsWith("project-")) {
      setActiveSection("my-work");
    }

    const applyHash = () => {
      const h = normalizeHash(window.location.hash || "");
      if (h && VALID_SECTIONS.has(h)) {
        setActiveSection(h as typeof activeSection);
      } else if (h && h.startsWith("project-")) {
        setActiveSection("my-work");
      }
    };

    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  // Handle Hash change for projects
  useEffect(() => {
    const handleHashCheck = () => {
      const hash = window.location.hash.slice(1); // remove #
      if (hash.startsWith("project-")) {
        const projectName = hash.replace("project-", "");
        setSelectedProject(projectName);
        setActiveSection("my-work");
      } else {
        setSelectedProject(null);
      }
    };

    // Initial check
    handleHashCheck();

    window.addEventListener("hashchange", handleHashCheck);
    return () => window.removeEventListener("hashchange", handleHashCheck);
  }, []);

  const scrollToSection = useCallback((section: typeof activeSection) => {
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
  }, []);

  const handleSectionChange = (section: typeof activeSection) => {
    if (selectedProject) {
      setSelectedProject(null);
      window.location.hash = `#${section}`;
      setTimeout(() => {
        scrollToSection(section);
      }, 100);
      return;
    }

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
  }, [activeSection, mounted, showLoading, scrollToSection]);

  useEffect(() => {
    const currentHash = normalizeHash(window.location.hash || "");
    // Don't override project URLs - they have their own hash format
    if (currentHash.startsWith("project-")) {
      return;
    }
    if (activeSection !== currentHash) {
      const newUrl = `#${activeSection}`;
      window.history.replaceState(null, "", newUrl);
    }
  }, [activeSection]);

  const borderClass = theme === "dark" ? "border-white/80" : "border-black";

  return (
    <div
      className={`h-screen animate-blur-in pt-2 pr-2 pl-2 pb-2 md:pt-5 md:pr-5 md:pl-5 md:pb-5 xl:pt-8 xl:pr-7 xl:pl-7 xl:pb-7 2xl:pt-10 2xl:pr-10 2xl:pl-10 2xl:pb-10 relative`}
    >
      <div className="sr-only">
        <h1>Sk Akram Full Stack Developer Portfolio</h1>
        <p>
          Explore Sk Akram&apos;s software developer portfolio, projects, blogs,
          skills, and social profiles.
        </p>
        <Image
          src="/profilePic.jpg"
          alt="Sk Akram full stack developer profile image"
          width={1200}
          height={630}
          priority
        />
        <nav>
          <Link href="/#meet-me">About</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#my-work">Projects</Link>
          <Link href="/#socials">Socials</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/support">Support</Link>
        </nav>
        <p>
          Follow on <a href="https://github.com/akramcodez">GitHub</a>,{" "}
          <a href="https://x.com/akramcodez">X</a>, and{" "}
          <a href="https://www.linkedin.com/in/akramcodez">LinkedIn</a>.
        </p>
      </div>

      <div className="flex flex-col items-end w-full h-full">
        <div className="flex w-full flex-1 min-h-0 items-end">
          {/* <div
            className={`w-5 h-30 hidden md:block border-[0.095rem] border-r-0 ${borderClass}`}
          >
            <ThemeSelector />
          </div> */}

          <div
            className={`w-full h-full flex flex-col md:flex-row items-end md:items-stretch transition-all duration-500 ease-in-out gap-3 ${isCollapsed ? "md:gap-0" : ""}`}
          >
            <div
              className={` 
                 flex flex-col gap-2 items-end justify-end transition-all duration-500 ease-in-out overflow-hidden
                 ${isCollapsed ? "w-full md:w-0 max-h-0 md:max-h-full md:h-full opacity-0 pointer-events-none mb-0" : "w-full h-auto md:w-[18%] md:min-w-56 max-h-[600px] md:max-h-full md:h-full opacity-100 mb-0"}
              `}
            >
              <div className={`w-full hidden md:flex items-end`}>
                <ControllerHeader activeSection={activeSection} />
              </div>
              <div
                className={`w-full h-auto md:h-fit md:w-full 2xl:min-h-auto border-[0.095rem] rounded-t-2xl ${borderClass} flex md:flex-col`}
              >
                <Controller
                  activeSection={activeSection}
                  onSectionChange={handleSectionChange}
                />
              </div>
            </div>

            <div
              className={`w-full flex-1 sm:h-full border-[0.095rem] flex relative ${isCollapsed ? "rounded-t-2xl" : ""} rounded-b-2xl md:rounded-b-none md:rounded-t-none overflow-hidden ${borderClass} transition-all duration-500 min-h-0`}
            >
              <button
                onClick={handleCollapseToggle}
                className={`absolute z-40 p-2 rounded-full border transition-all duration-300 ease-in-out
                  ${
                    theme === "dark"
                      ? "bg-white/10 hover:bg-white/90 hover:text-black border-white/20 backdrop-blur-xl"
                      : "bg-black/5 hover:bg-black/90 hover:text-white border-black/20 backdrop-blur-xl"
                  }
                  top-3 left-3
                  hidden md:block
                `}
                aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
              >
                {isCollapsed ? (
                  <PanelLeftOpen className="w-4 h-4 md:w-5 md:h-5 pointer-events-none" />
                ) : (
                  <PanelLeftClose className="w-4 h-4 md:w-5 md:h-5 pointer-events-none" />
                )}
              </button>

              <button
                onClick={handleCollapseToggle}
                className={`absolute z-40 p-1.5 rounded-full border transition-all duration-300 ease-in-out flex items-center justify-center
                  ${
                    theme === "dark"
                      ? "bg-white/10 hover:bg-white/90 hover:text-black border-white/20 backdrop-blur-xl"
                      : "bg-black/5 hover:bg-black/90 hover:text-white border-black/20 backdrop-blur-xl"
                  }
                  top-2 left-2
                  md:hidden
                `}
                aria-label={isCollapsed ? "Expand Menu" : "Collapse Menu"}
              >
                {isCollapsed ? (
                  <PanelTopOpen className="w-4 h-4 pointer-events-none" />
                ) : (
                  <PanelTopClose className="w-4 h-4 pointer-events-none" />
                )}
              </button>

              <Background />

              <div className="absolute top-2 right-2 md:top-3 md:right-3 z-30">
                <QuickMenu fromSection={activeSection} />
              </div>

              <main
                ref={mainRef}
                className="h-full w-full absolute z-10 overflow-auto scrollbar-thin"
              >
                <div className="h-full w-full flex items-center justify-center">
                  <div className="h-full w-full">
                    {selectedProject ? (
                      <ProjectDetail
                        projectId={selectedProject}
                        onBack={() => {
                          setSelectedProject(null);
                          window.location.hash = "#my-work";
                          setTimeout(() => {
                            scrollToSection("my-work");
                          }, 100);
                        }}
                      />
                    ) : (
                      <>
                        <MeetMe />
                        <Skills />
                        <Experience />
                        <Projects />
                        <Socials />
                      </>
                    )}
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

      {showLoading && <Loading />}
    </div>
  );
}
