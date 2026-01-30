"use client";
import React from "react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

type Props = {
  onBack: () => void;
};

const MyTube = ({ onBack }: Props) => {
  const { theme } = useTheme();

  const borderClass = theme === "dark" ? "border-white/20" : "border-black/20";
  const bgClass =
    theme === "dark"
      ? "bg-white/5 hover:bg-white/10"
      : "bg-black/5 hover:bg-black/10";

  return (
    <div className="flex flex-col h-full w-full px-4 pt-20 pr-2 pb-4 md:p-12 md:pr-10 animate-in fade-in zoom-in duration-300 overflow-y-auto scrollbar-thin">
      
      <div className="max-w-3xl mx-auto w-full space-y-8">
        {/* Project Hero */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
              MyTube
            </h1>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-2 md:gap-3">
               <button
                onClick={onBack}
                className={`inline-flex items-center justify-center p-1.5 md:p-2 rounded-full border transition-all duration-300 ease-in-out cursor-pointer ${
                  theme === "dark"
                    ? "bg-white/10 hover:bg-white/90 hover:text-black border-white/20 backdrop-blur-xl"
                    : "bg-black/5 hover:bg-black/90 hover:text-white border-black/20 backdrop-blur-xl"
                }`}
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <Link
                href="https://github.com/akramcodez/mytube_home"
                target="_blank"
                className={`p-1.5 md:p-2 rounded-full border ${borderClass} ${bgClass} transition-all`}
              >
                <Github className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <Link
                href="https://my-tube-omega-lime.vercel.app"
                target="_blank"
                className={`p-1.5 md:p-2 rounded-full border ${borderClass} ${bgClass} transition-all`}
              >
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
          
          <p className="text-sm md:text-xl opacity-80 max-w-2xl">
            Modern YouTube-inspired web application. Browse videos, manage subscriptions, and explore categories with a seamless experience.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Context API",
              "Web Speech API",
              "Vercel",
            ].map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 text-[10px] md:text-xs font-medium rounded-full border ${borderClass} bg-white/5`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Feature/Image */}
        <div
          className={`relative w-full aspect-video rounded-2xl border ${borderClass} overflow-hidden group`}
        >
          <Image 
            src="/mytube.png" 
            alt="MyTube Interface" 
            fill 
            className="object-cover"
          /> 
        </div>

        {/* Key Features */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className={`p-4 rounded-2xl border ${borderClass} ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
              <h3 className="font-semibold mb-2 text-sm md:text-base opacity-90">Responsive Design</h3>
              <p className="text-xs md:text-sm opacity-70">
                Optimized for all screen sizes with dynamic sidebar and video grid layouts.
              </p>
            </div>
            <div className={`p-4 rounded-2xl border ${borderClass} ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
              <h3 className="font-semibold mb-2 text-sm md:text-base opacity-90">Voice Search</h3>
              <p className="text-xs md:text-sm opacity-70">
                Search functionality with text or voice input powered by the Web Speech API.
              </p>
            </div>
            <div className={`p-4 rounded-2xl border ${borderClass} ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
              <h3 className="font-semibold mb-2 text-sm md:text-base opacity-90">Video Previews</h3>
              <p className="text-xs md:text-sm opacity-70">
                Thumbnails with GIF previews and metadata for an engaging browsing experience.
              </p>
            </div>
          </div>
        </div>

        {/* More Features */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">Experience</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`p-4 rounded-2xl border ${borderClass} ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
              <h3 className="font-semibold mb-2 text-sm md:text-base opacity-90">Dynamic Sidebar</h3>
              <p className="text-xs md:text-sm opacity-70">
                Expandable sections for categories, playlists, subscriptions, and explore content.
              </p>
            </div>
            <div className={`p-4 rounded-2xl border ${borderClass} ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
              <h3 className="font-semibold mb-2 text-sm md:text-base opacity-90">Explore Section</h3>
              <p className="text-xs md:text-sm opacity-70">
                Discover trending, music, sports, and more with curated category browsing.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className={`p-5 rounded-2xl border ${borderClass} ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
          <h3 className="font-semibold text-sm md:text-base mb-2">Tech Stack</h3>
          <p className="text-xs md:text-sm opacity-70">
            Built with React, TypeScript, and Tailwind CSS. Uses React Context API for state management, clsx and tailwind-merge for utilities, and deployed on Vercel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyTube;
