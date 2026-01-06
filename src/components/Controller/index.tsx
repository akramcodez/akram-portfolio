"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

type Props = {
  activeSection?: "meet-me" | "skills" | "my-work" | "socials";
  onSectionChange?: (
    section: "meet-me" | "skills" | "my-work" | "socials"
  ) => void;
};

const Controller = ({ activeSection = "meet-me", onSectionChange }: Props) => {
  const { theme } = useTheme();
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateScreenWidth();

    window.addEventListener("resize", updateScreenWidth);

    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  const borderClass = theme === "dark" ? "border-white/80" : "border-black";

  const getActiveButtonClass = (
    section: "meet-me" | "skills" | "my-work" | "socials"
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

  const buttons = ["MEET ME", "SKILLS", "MY WORK", "SOCIALS"];

  return (
    <div className="flex flex-col items-center md:items-start justify-center w-full h-full p-3 md:p-4 gap-2 md:gap-0 3xl:gap-4">
      <div className="flex items-center md:flex-col md:items-start w-full">
        {(screenWidth < 823 || screenWidth > 825) && (
          <Image
            width={40}
            height={40}
            src="/profilePic.jpg"
            alt="Sk Akram"
            className={`w-17 h-17 2xl:w-20 2xl:h-20 rounded-2xl object-cover md:mb-3 border-[0.095rem] ${borderClass}`}
          />
        )}
        <div className="flex flex-col items-start ml-4 md:ml-0">
          <h2 className="text-lg md:text-xl 2xl:text-2xl font-semibold tracking-widest">
            Sk Akram
          </h2>
          <p className="text-sm xl:text-xs 2xl:text-base font-semibold text-gray-400">
            19 y/o Software Developer
          </p>
        </div>
      </div>
      <div className="w-full md:h-full flex flex-col items-center justify-start gap-2 gap-y-3 mt-3">
        <div className="w-full flex md:hidden gap-3">
          <button
            onClick={() => onSectionChange?.("meet-me")}
            className={`w-full py-1 text-sm font-semibold border rounded-full transition-all duration-300 ease-in-out cursor-pointer ${getActiveButtonClass(
              "meet-me"
            )}`}
          >
            {buttons[0]}
          </button>
          <button
            onClick={() => onSectionChange?.("skills")}
            className={`w-full py-1 text-sm font-semibold border rounded-full transition-all duration-300 ease-in-out cursor-pointer ${getActiveButtonClass(
              "skills"
            )}`}
          >
            {buttons[1]}
          </button>
        </div>
        <div className="w-full flex md:hidden gap-3">
          <button
            onClick={() => onSectionChange?.("my-work")}
            className={`w-full py-1 text-sm font-semibold border rounded-full transition-all duration-300 ease-in-out cursor-pointer ${getActiveButtonClass(
              "my-work"
            )}`}
          >
            {buttons[2]}
          </button>
          <button
            onClick={() => onSectionChange?.("socials")}
            className={`w-full py-1 text-sm font-semibold border rounded-full transition-all duration-300 ease-in-out cursor-pointer ${getActiveButtonClass(
              "socials"
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
            className={`w-full py-2 text-xs 2xl:text-md font-semibold border xl:border-[0.093rem] rounded-full transition-all duration-300 ease-in-out hidden md:block cursor-pointer ${getActiveButtonClass(
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
              onSectionChange?.(index === 0 ? "my-work" : "socials")
            }
            className={`w-full py-2 text-xs 2xl:text-md font-semibold border xl:border-[0.093rem] rounded-full transition-all duration-300 ease-in-out hidden md:block cursor-pointer ${getActiveButtonClass(
              index === 0 ? "my-work" : "socials"
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
