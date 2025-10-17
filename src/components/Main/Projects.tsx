"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { CiLocationArrow1 } from "react-icons/ci";
import { projects } from "@/data/data";
import Link from "next/link";

const Projects = () => {
  const { theme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getProjectClass = () => {
    const baseClass =
      "group relative p-2 md:p-3 cursor-pointer transition-all duration-300";

    if (theme === "dark") {
      return `${baseClass}  border-b border-white/10 last:border-b-0`;
    } else {
      return `${baseClass}  border-b border-black/10 last:border-b-0`;
    }
  };

  const getTechClass = () => {
    return theme === "dark" ? "text-white/60" : "text-black/60";
  };

  const getDescClass = () => {
    return theme === "dark" ? "text-white/80" : "text-black/80";
  };

  const getArrowClass = (index: number) => {
    const isHovered = hoveredIndex === index;
    const baseClass = "transition-transform duration-300";
    return `${baseClass} ${isHovered ? "translate-x-1" : ""}`;
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center h-full w-full p-6 md:p-8"
    >
      <div className="w-full max-w-2xl mx-auto space-y-2 md:space-y-5 animate-blur-in">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-widest">
            PROJECTS
          </h2>
        </div>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={getProjectClass()}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center md:justify-between">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 group"
                >
                  <div className="flex items-center gap-2 md:gap-4 md:mb-1">
                    <h3 className="text-base md:text-lg font-semibold tracking-wide">
                      {project.name}
                    </h3>
                    <span
                      className={`text-[9px] md:text-xs font-medium ${getTechClass()}`}
                    >
                      {project.tech}
                    </span>
                  </div>
                  <p className={`text-sm font-semibold ${getDescClass()}`}>
                    {project.desc}
                  </p>
                </Link>
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4"
                >
                  <div className={getArrowClass(index)}>
                    <span className="text-lg md:text-xl">→</span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="https://github.com/akramcodez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-center flex items-center justify-center w-full pt-4 md:pt-8 border-t border-current">
            <p className="text-xs md:text-sm font-medium hover:underline">
              More projects on GitHub
            </p>
            <CiLocationArrow1 className="inline-block ml-1" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
