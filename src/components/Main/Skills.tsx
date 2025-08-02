"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";

const skills = [
  "MERN",
  "NextJS",
  "TypeScript",
  "Tailwind",
  "MySQL",
  "MongoDB",
  "Prisma",
  "Postman",
  "Git",
  "GitHub",
  "Python",
  "Java",
  "Cpp",
  "C",
  "CI/CD",
];

const Skills = () => {
  const { theme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getSkillClass = (index: number) => {
    const isHovered = hoveredIndex === index;
    const baseClass =
      "relative group cursor-pointer transition-all duration-300 ease-out";

    if (theme === "dark") {
      return `${baseClass} ${
        isHovered ? "text-white" : "text-white/80 hover:text-white/90"
      }`;
    } else {
      return `${baseClass} ${
        isHovered ? "text-black" : "text-black/80 hover:text-black/90"
      }`;
    }
  };

  const getUnderlineClass = () => {
    return theme === "dark" ? "bg-white" : "bg-black";
  };

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center h-full w-full p-6 md:p-8"
    >
      <div className="w-full mx-auto max-w-3xl text-center space-y-4 md:space-y-6 animate-blur-in">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-widest mb-4">
            SKILLS
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-2 md:gap-y-8">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className={getSkillClass(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="text-sm md:text-base font-semibold tracking-wide">
                {skill}
              </span>

              <div
                className={`
                  absolute bottom-0 left-0 h-0.5 transition-all duration-300 ease-out
                  ${getUnderlineClass()}
                  ${hoveredIndex === index ? "w-full" : "w-0"}
                `}
              />
            </div>
          ))}
        </div>

        <div className="pt-4 md:pt-8 mt-4 md:mt-8 border-t border-current border-opacity-20">
          <p className="text-xs md:text-sm font-medium">
            Learning with passion & love
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
