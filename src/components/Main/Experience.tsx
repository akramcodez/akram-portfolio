import React, { useState, useRef, useEffect } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { repos } from "@/data/data";
import Link from "next/link";

const Experience = () => {
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

        <div className="w-full pt-2 md:pt-4 mt-2 md:mt-4 border-t border-current border-opacity-20 mb-0">
          <Link
            href="https://www.linkedin.com/company/kebulan-technologies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-left">
              <h3 className="text-lg md:text-2xl font-semibold">
                Kebulan Grid
              </h3>
              <p className="text-[11px] sm:text-sm font-medium flex items-center justify-between">
                <span className="cursor-pointer">SDE | Fulltime</span>{" "}
                <span>Sep 2025 to present</span>
              </p>
            </div>
          </Link>
        </div>

        <div className="pt-2 md:pt-4 mt-2 md:mt-4 border-t border-current border-opacity-20 text-left">
          <h3 className="text-lg md:text-xl font-semibold">Open Source</h3>
          <OpenSourceSummary />
          <Link
            href="https://github.com/akramcodez"
            target="_blank"
            rel="noopener noreferrer"
            className="underline flex items-center gap-1 text-xs md:text-sm font-medium pt-2 md:pt-4 mt-2 md:mt-4 border-t border-current border-opacity-20 pb-2 md:pb-4 mb-2 md:mb-4 border-b"
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

  useEffect(() => {
    const newHeights: Record<number, string> = {};
    repos.forEach((_, idx) => {
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
  }, [openRepo]);

  const toggleRepo = (idx: number) => {
    setOpenRepo((cur) => (cur === idx ? null : idx));
  };

  return (
    <div className="mt-1">
      <div>
        {repos.map((repo, idx) => (
          <div key={repo.name}>
            <button
              onClick={() => toggleRepo(idx)}
              aria-expanded={openRepo === idx}
              className="w-full flex items-center justify-between cursor-pointer"
            >
              <div className="">
                <p className="font-medium text-md hover:underline [text-decoration-thickness:1px] cursor-pointer">
                  {repo.name}
                  <span className="text-xs opacity-70 ml-2">
                    {repo.prs.length} PRs
                  </span>
                </p>
              </div>
              <span className="p-1">
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
              <div className="ml-2 space-y-3 text-sm md:text-base">
                {repo.prs.map((pr, pIdx) => (
                  <div
                    key={pr.url}
                    className={`transform transition-all duration-300 ${
                      openRepo === idx
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2"
                    }`}
                    style={{ transitionDelay: `${pIdx * 40}ms` }}
                  >
                    <Link
                      href={pr.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-sm"
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
