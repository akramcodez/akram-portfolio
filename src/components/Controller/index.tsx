"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

type Props = {
  activeSection?: "meet-me" | "skills" | "projects" | "explore-more";
  onSectionChange?: (
    section: "meet-me" | "skills" | "projects" | "explore-more"
  ) => void;
};

const Controller = ({ activeSection = "meet-me", onSectionChange }: Props) => {
  const { theme } = useTheme();

  const borderClass = theme === "dark" ? "border-white/80" : "border-black";

  const getActiveButtonClass = (
    section: "meet-me" | "skills" | "projects" | "explore-more"
  ) => {
    const isActive = activeSection === section;
    if (theme === "dark") {
      return isActive
        ? "border-white/80 text-white/90 hover:bg-white/90 hover:text-black font-semibold"
        : "border-white/80 text-white/50 hover:bg-white/90 hover:text-black";
    } else {
      return isActive
        ? "border-black text-black/90 hover:bg-black/90 hover:text-white font-semibold"
        : "border-black text-black/50 hover:bg-black/90 hover:text-white";
    }
  };

  const buttons = ["MEET ME", "SKILLS", "PROJECTS", "EXPLORE MORE"];

  return (
    <div className="flex flex-col items-start md:items-start justify-between w-full h-full p-3 md:p-4 gap-2 md:gap-0 3xl:gap-4">
      <div className="flex items-center md:flex-col md:items-start w-full">
        <Image
          width={40}
          height={40}
          src="/profilePic.jpg"
          alt="SK Akram"
          className={`w-14 h-14 md:w-18 md:h-18 rounded-2xl object-cover md:mb-3 border-[0.095rem] ${borderClass}`}
        />
        <div className="flex flex-col items-start ml-3 md:ml-0">
          <h2 className="text-lg md:text-xl font-semibold tracking-widest">
            SK AKRAM
          </h2>
          <p className="text-xs font-semibold md:text-sm text-gray-400">
            18 y/o Developer
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-y-2 md:gap-y-3 3xl:gap-y-5 md:mt-3">
        <div className="w-full flex md:hidden gap-2">
          <button
            onClick={() => onSectionChange?.("meet-me")}
            className={`w-full py-1 text-xs font-semibold border rounded-full transition-all duration-300 ease-in-out cursor-pointer ${getActiveButtonClass(
              "meet-me"
            )}`}
          >
            {buttons[0]}
          </button>
          <button
            onClick={() => onSectionChange?.("skills")}
            className={`w-full py-1 text-xs font-semibold border rounded-full transition-all duration-300 ease-in-out cursor-pointer ${getActiveButtonClass(
              "skills"
            )}`}
          >
            {buttons[1]}
          </button>
        </div>
        <div className="w-full flex md:hidden gap-2">
          <button
            onClick={() => onSectionChange?.("projects")}
            className={`w-full py-1 text-xs font-semibold border rounded-full transition-all duration-300 ease-in-out cursor-pointer ${getActiveButtonClass(
              "projects"
            )}`}
          >
            {buttons[2]}
          </button>
          <button
            onClick={() => onSectionChange?.("explore-more")}
            className={`w-full py-1 text-xs font-semibold border rounded-full transition-all duration-300 ease-in-out cursor-pointer ${getActiveButtonClass(
              "explore-more"
            )}`}
          >
            {buttons[3]}
          </button>
        </div>

        {buttons.slice(0, 2).map((label, index) => (
          <button
            key={label}
            onClick={() =>
              onSectionChange?.(index === 0 ? "meet-me" : "skills")
            }
            className={`w-full py-2.5 text-xs font-semibold border rounded-full transition-all duration-300 ease-in-out hidden md:block cursor-pointer ${getActiveButtonClass(
              index === 0 ? "meet-me" : "skills"
            )}`}
          >
            {label}
          </button>
        ))}
        {buttons.slice(2).map((label, index) => (
          <button
            key={label}
            onClick={() =>
              onSectionChange?.(index === 0 ? "projects" : "explore-more")
            }
            className={`w-full py-2.5 text-xs font-semibold border rounded-full transition-all duration-300 ease-in-out hidden md:block cursor-pointer ${getActiveButtonClass(
              index === 0 ? "projects" : "explore-more"
            )}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Controller;
