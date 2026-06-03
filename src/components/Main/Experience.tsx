import React, { useState, useRef, useEffect, useMemo } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { repos } from "@/data/data";
import Link from "next/link";
import { PiGitMergeDuotone } from "react-icons/pi";

const Experience = () => {
  const totalPRs = useMemo(() => {
    return repos.reduce((acc, r) => acc + (r.prs?.length ?? 0), 0);
  }, []);

  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center h-full w-full p-2.5 pl-4 md:p-8"
    >
      <div className="w-full mx-auto max-w-3xl text-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-widest mb-4">
            EXPERIENCE
          </h2>
        </div>

        <div className="w-full pt-1 mb-0 flex flex-col text-left border-t border-current border-opacity-20">
          <Link
            href="https://www.linkedin.com/company/nano-collective/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="hover:bg-accent-foreground/5 p-2 md:p-2.5 -mx-2 md:-mx-2.5 rounded-lg transition-colors">
              <h3 className="text-sm md:text-lg font-semibold mb-1">
                Nano Collective
              </h3>
              <p className="text-[10px] sm:text-[11px] md:text-xs font-medium flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                <span className="cursor-pointer opacity-90">
                  Software Development Intern
                </span>
                <span className="opacity-70 whitespace-nowrap">
                  Jun 2026 to present
                </span>
              </p>
            </div>
          </Link>

          <Link
            href="https://www.linkedin.com/company/kebulan-technologies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="hover:bg-accent-foreground/5 p-2 md:p-2.5 -mx-2 md:-mx-2.5 rounded-lg transition-colors">
              <h3 className="text-sm md:text-lg font-semibold mb-2">
                Kebulan Grid
              </h3>
              <div className="flex flex-col ml-1.5 md:ml-2">
                <div className="relative pl-4 md:pl-5 pb-4">
                  {/* Vertical Line spanning from center of dot 1 to bottom of container + distance to dot 2 center */}
                  <div className="absolute left-[3px] top-[8px] md:top-[10px] bottom-[-8px] md:bottom-[-10px] w-[2px] bg-current/80" />
                  <div className="absolute z-10 w-2 h-2 rounded-full bg-current left-0 top-1 md:top-1.5" />
                  <p className="text-[10px] sm:text-[11px] md:text-xs font-medium flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                    <span className="cursor-pointer opacity-90">
                      Software Engineer (Part-time)
                    </span>
                    <span className="opacity-70 whitespace-nowrap">
                      May 2026 to present
                    </span>
                  </p>
                </div>
                <div className="relative pl-4 md:pl-5">
                  <div className="absolute z-10 w-2 h-2 rounded-full bg-current left-0 top-1 md:top-1.5" />
                  <p className="text-[10px] sm:text-[11px] md:text-xs font-medium flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                    <span className="cursor-pointer opacity-90">
                      Software Engineer (Full-time)
                    </span>
                    <span className="opacity-70 whitespace-nowrap">
                      Nov 2025 to May 2026
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="pt-2 md:pt-4 mt-2 md:mt-4 border-t border-current border-opacity-20 text-left">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-2xl md:text-[28px] font-semibold tracking-wide leading-tight mb-1">
              Open Source
            </h3>
            <span className="inline-flex items-center border border-current/20 rounded-full px-3 py-1 text-[11px] md:text-xs opacity-75 font-medium whitespace-nowrap">
              {totalPRs} PRs merged
            </span>
          </div>
          <OpenSourceSummary />
          <Link
            href="https://github.com/akramcodez"
            target="_blank"
            rel="noopener noreferrer"
            className="underline flex items-center justify-center gap-1 text-xs md:text-sm font-medium pt-2 md:pt-4 mt-2 md:mt-4 border-t border-current border-opacity-20 pb-2 md:pb-4 mb-2 md:mb-4"
          >
            GitHub
            <CiLocationArrow1 className="inline-block ml-0.5 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;

function OpenSourceSummary() {
  const [openRepo, setOpenRepo] = useState<number | null>(null);
  const contentRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [maxHeights, setMaxHeights] = useState<Record<number, string>>({});
  const sortedRepos = useMemo(() => {
    return [...repos].sort(
      (a, b) => (b.prs?.length ?? 0) - (a.prs?.length ?? 0),
    );
  }, []);

  useEffect(() => {
    const newHeights: Record<number, string> = {};
    sortedRepos.forEach((_, idx) => {
      const el = contentRefs.current[idx];
      if (!el) {
        newHeights[idx] = "0px";
        return;
      }
      if (openRepo === idx) {
        newHeights[idx] = `${el.scrollHeight}px`;
      } else {
        newHeights[idx] = "0px";
      }
    });
    setMaxHeights(newHeights);
  }, [openRepo, sortedRepos]);

  // Read ?repo= param on mount and auto-open matching repo
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const repoParam = params.get("repo");
    if (repoParam) {
      const idx = sortedRepos.findIndex(
        (r) => r.name.toLowerCase() === repoParam.toLowerCase(),
      );
      if (idx !== -1) {
        setOpenRepo(idx);
      }
    }
  }, [sortedRepos]);

  const toggleRepo = (idx: number) => {
    const newOpen = openRepo === idx ? null : idx;
    setOpenRepo(newOpen);

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (newOpen !== null) {
        url.searchParams.set("repo", sortedRepos[newOpen].name);
        url.hash = "my-work";
      } else {
        url.searchParams.delete("repo");
      }
      window.history.replaceState(null, "", url.toString());
    }
  };

  return (
    <div className="mt-1">
      <div>
        {sortedRepos.map((repo, idx) => (
          <div key={repo.name}>
            <button
              onClick={() => toggleRepo(idx)}
              aria-expanded={openRepo === idx}
              className="w-full flex items-center justify-between px-1 rounded-sm cursor-pointer hover:bg-accent-foreground/10"
            >
              <div className="flex items-center justify-start gap-2">
                <p className="font-medium text-md cursor-pointer">
                  {repo.name}
                </p>
                <span className="text-[10px] opacity-70 mt-0.5">
                  {repo.prs.length} PRs
                </span>
              </div>
              <span>
                {openRepo === idx ? (
                  <IoIosArrowDropup className="h-5 w-5" />
                ) : (
                  <IoIosArrowDropdown className="h-5 w-5" />
                )}
              </span>
            </button>

            <div
              ref={(el) => {
                contentRefs.current[idx] = el;
              }}
              style={{
                maxHeight: maxHeights[idx] ?? "0px",
                transition: "max-height 300ms ease",
              }}
              className="overflow-hidden"
            >
              <div className="p-2 flex flex-col items-start gap-1.5 text-sm md:text-base">
                {repo.prs.map((pr, pIdx) => (
                  <div
                    key={pr.url}
                    className={`flex items-center gap-2 transform transition-all duration-300 ${
                      openRepo === idx
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2"
                    }`}
                    style={{ transitionDelay: `${pIdx * 40}ms` }}
                  >
                    <PiGitMergeDuotone className="h-4 w-4" />
                    <Link
                      href={pr.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-xs"
                    >
                      {pr.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
