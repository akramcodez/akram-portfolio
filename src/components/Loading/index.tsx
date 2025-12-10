"use client";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";

const Loading = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black animate-blur-out overflow-hidden`}
    >
      <div className="text-center space-y-2 md:space-y-4 relative z-10">
        <div className="relative">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[0.2em] text-white relative">
            Sk Akram
            <div className="absolute inset-0 text-3xl md:text-5xl lg:text-6xl font-bold tracking-[0.2em] text-white opacity-50 blur-sm">
              Sk Akram
            </div>
          </h1>

          <div className="mt-2 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-pulse"></div>
        </div>

        <div className="text-md md:text-xl lg:text-2xl font-light tracking-[0.3em] text-white opacity-80">
          PORTFOLIO
        </div>
      </div>
    </div>
  );
};

export default Loading;
