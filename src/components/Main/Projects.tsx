"use client";
import React from "react";
import { useTheme } from "next-themes";

type Props = {};

const Projects = (props: Props) => {
  const { theme } = useTheme();

  return (
    <section
      id="projects"
      className="flex items-center justify-center h-full w-full"
    >
      <div className="w-full h-full mx-auto p-6 md:p-10 flex items-center md:justify-center overflow-auto">
        <div className="space-y-12 md:space-y-16">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-wider mb-3 md:mb-4">
              PROJECTS
            </h2>
            <p className="text-sm lg:text-base xl:text-md font-medium leading-relaxed max-w-3xl mx-auto">
              Coming soon! This section will showcase my latest projects and
              work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
