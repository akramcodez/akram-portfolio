"use client";
import React from "react";
import { ArrowLeft, ExternalLink, Github, Database, Terminal, Code2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

type Props = {
  onBack: () => void;
};

const OsFit = ({ onBack }: Props) => {
  const { theme } = useTheme();

  const borderClass = theme === "dark" ? "border-white/20" : "border-black/20";
  const bgClass =
    theme === "dark"
      ? "bg-white/5 hover:bg-white/10"
      : "bg-black/5 hover:bg-black/10";
  const iconClass = theme === "dark" ? "text-white/70" : "text-black/70";

  return (
    <div className="flex flex-col h-full w-full px-4 pt-20 pr-2 pb-4 md:p-12 md:pr-10 animate-in fade-in zoom-in duration-300 overflow-y-auto scrollbar-thin">
      
      <div className="max-w-3xl mx-auto w-full space-y-8">
        {/* Project Hero */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
              OsFit
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
                href="https://github.com/akramcodez/osfit"
                target="_blank"
                className={`p-1.5 md:p-2 rounded-full border ${borderClass} ${bgClass} transition-all`}
              >
                <Github className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <Link
                href="https://osfit.akramcodez.tech"
                target="_blank"
                className={`p-1.5 md:p-2 rounded-full border ${borderClass} ${bgClass} transition-all`}
              >
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
          
          <p className="text-sm md:text-xl opacity-80 max-w-2xl">
            AI-powered tool for analyzing GitHub files and solving issues.
            Supports 20+ languages.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js 16",
              "TypeScript",
              "Supabase",
              "Gemini/Groq AI",
              "Tailwind",
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

        {/* Feature/Image Placeholder */}
        <div
          className={`relative w-full aspect-video rounded-2xl border ${borderClass} overflow-hidden group`}
        >
          {/* Replace with your actual image path */}
          <Image 
            src="/osfit.png" 
            alt="OsFit Interface" 
            fill 
            className="object-cover"
          /> 
         
        </div>

        {/* How It Works */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">How it Works</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className={`p-4 rounded-2xl border ${borderClass} ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
              <h3 className="font-semibold mb-2 text-sm md:text-base opacity-90">Solve Issues</h3>
              <p className="text-xs md:text-sm opacity-70">
                Paste any GitHub issue URL. OsFit analyzes the entire codebase, locates the bug, and generates a complete solution plan with code fixes ready for a PR.
              </p>
            </div>
            <div className={`p-4 rounded-2xl border ${borderClass} ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
              <h3 className="font-semibold mb-2 text-sm md:text-base opacity-90">Explain Code</h3>
              <p className="text-xs md:text-sm opacity-70">
                Don't understand a complex file? OsFit breaks down the logic, explaining functions and flowcharts to help you grasp the codebase quickly.
              </p>
            </div>
            <div className={`p-4 rounded-2xl border ${borderClass} ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
              <h3 className="font-semibold mb-2 text-sm md:text-base opacity-90">AI Mentor</h3>
              <p className="text-xs md:text-sm opacity-70">
                Your personal guide for open source. Get advice on contributing, understanding guidelines, and navigating large repositories effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OsFit;
