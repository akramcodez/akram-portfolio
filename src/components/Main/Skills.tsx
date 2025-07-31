"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";

type Props = {};

// Simple skills array
const skills = [
  "ReactJS",
  "NextJS",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "Shadcn",
  "NodeJS",
  "ExpressJS",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Postman",
  "Python",
  "Java",
  "C",
  "SQL",
  "Git",
  "GitHub",
  "Docker",
  "Vercel",
];

const Skills = (props: Props) => {
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
      <div className="w-full max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
        {/* Simple Title */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-widest mb-4">
            SKILLS
          </h2>
        </div>

        {/* Minimalist Skills Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-2 md:gap-y-8">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className={getSkillClass(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="text-sm md:text-base font-medium tracking-wide">
                {skill}
              </span>

              {/* Simple underline animation */}
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

        {/* Simple footer */}
        <div className="pt-4 md:pt-8 mt-4 md:mt-8 border-t border-current border-opacity-20">
          <p className="text-xs md:text-sm opacity-70 font-medium">
            Learning with passion & love
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
