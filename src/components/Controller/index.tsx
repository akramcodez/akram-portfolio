"use client";
import React from "react";
import { useTheme } from "next-themes";

type Props = {};

const Controller = (props: Props) => {
  const { theme } = useTheme();

  const buttonClass =
    theme === "dark"
      ? "border-white/80 text-white/90 hover:bg-white/90 hover:text-black"
      : "border-black text-black/90 hover:bg-black/90 hover:text-white";

  const borderClass = theme === "dark" ? "border-white/80" : "border-black";

  return (
    <div className="flex flex-col items-start md:items-start justify-between w-full h-full p-3 md:p-4 gap-3 md:gap-0">
      <div className="flex md:flex-col items-start text-center sm:pl-2">
        <img
          src="/profilePic.jpg"
          alt="SK Akram"
          className={`w-13 h-13 md:w-18 md:h-18 rounded-2xl object-cover md:mb-3 border-[0.095rem] ${borderClass}`}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src =
              "https://placehold.co/128x128/cccccc/333333?text=Error";
          }}
        />
        <div className="flex flex-col items-start justify-end ml-3 md:ml-0">
          <h2 className="text-lg md:text-xl font-semibold tracking-wider">
            SK AKRAM
          </h2>
          <p className="text-xs font-semibold md:text-sm text-gray-400">
            18 y/o Developer
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-y-2 md:gap-y-3 md:mt-3">
        <div className="w-full flex md:hidden gap-2">
          <button
            className={`w-full py-1 md:py-2.5 text-xs font-semibold border rounded-full transition-all duration-300 ease-in-out ${buttonClass}`}
          >
            MEET ME
          </button>
          <button
            className={`w-full py-1 md:py-2.5 text-xs font-semibold border rounded-full transition-all duration-300 ease-in-out ${buttonClass}`}
          >
            SKILLS
          </button>
        </div>
        <button
          className={`w-full hidden md:block py-1 md:py-2.5 text-xs font-semibold border rounded-full transition-all duration-300 ease-in-out ${buttonClass}`}
        >
          MEET ME
        </button>
        <button
          className={`w-full hidden md:block py-1 md:py-2.5 text-xs font-semibold border rounded-full transition-all duration-300 ease-in-out ${buttonClass}`}
        >
          SKILLS
        </button>
        <div className="w-full flex md:hidden gap-1">
          <button
            className={`w-full py-1 md:py-2.5 text-xs font-semibold border rounded-full transition-all duration-300 ease-in-out ${buttonClass}`}
          >
            PROJECTS
          </button>
          <button
            className={`w-full py-1 md:py-2.5 text-xs font-semibold border rounded-full transition-all duration-300 ease-in-out ${buttonClass}`}
          >
            EXPLORE MORE
          </button>
        </div>
        <button
          className={`w-full hidden md:block py-1 md:py-2.5 text-xs font-semibold border rounded-full transition-all duration-300 ease-in-out ${buttonClass}`}
        >
          PROJECTS
        </button>
        <button
          className={`w-full hidden md:block py-1 md:py-2.5 text-xs font-semibold border rounded-full transition-all duration-300 ease-in-out ${buttonClass}`}
        >
          EXPLORE MORE
        </button>
      </div>
    </div>
  );
};

export default Controller;
