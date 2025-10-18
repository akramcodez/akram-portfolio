"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { socials } from "@/data/data";

const Socials = () => {
  const { theme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getSocialClass = (index: number) => {
    const isHovered = hoveredIndex === index;
    const baseClass =
      "group px-3 py-1 md:px-4 md:py-2 border transition-all duration-300 cursor-pointer text-left";

    if (theme === "dark") {
      return `${baseClass} ${
        isHovered
          ? "border-white/40 bg-white/5"
          : "border-white/10 hover:border-white/20"
      }`;
    } else {
      return `${baseClass} ${
        isHovered
          ? "border-black/40 bg-black/5"
          : "border-black/10 hover:border-black/20"
      }`;
    }
  };

  const getHandleClass = () => {
    return theme === "dark" ? "text-white/60" : "text-black/60";
  };

  return (
    <section
      id="socials"
      className="flex flex-col items-center justify-center h-full w-full p-2.5 pl-4 md:p-8"
    >
      <div className="w-full max-w-3xl mx-auto space-y-4 md:space-y-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-widest md:mb-2">
            SOCIALS
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
          {socials.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target={social.url.startsWith("http") ? "_blank" : "_self"}
              rel={
                social.url.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className={getSocialClass(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div>
                <h3 className="text-sm dm:text-base font-semibold mb-1 tracking-wide">
                  {social.name}
                </h3>
                <p
                  className={`text-xs md:text-sm font-medium ${getHandleClass()}`}
                >
                  {social.handle}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center pt-4 md:pt-6 border-t border-current border-opacity-20">
          <p className="text-xs md:text-sm font-medium">
            Always open to collaborate
          </p>
        </div>
      </div>
    </section>
  );
};

export default Socials;
