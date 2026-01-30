"use client";
import React from "react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

type Props = {
  onBack: () => void;
};

const VeoMate = ({ onBack }: Props) => {
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
              VeoMate
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
                href="https://github.com/veomateorg/veomate-waitlist"
                target="_blank"
                className={`p-1.5 md:p-2 rounded-full border ${borderClass} ${bgClass} transition-all`}
              >
                <Github className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <Link
                href="https://waitlist.veomate.com"
                target="_blank"
                className={`p-1.5 md:p-2 rounded-full border ${borderClass} ${bgClass} transition-all`}
              >
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
          
          <p className="text-sm md:text-xl opacity-80 max-w-2xl">
            The Context-Aware Canvas Platform. Unifying visual clarity, project management, and real-time communication.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Currently in Building",
              "Open Source",
              "Canvas Platform",
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
            src="/waitlist-veomate.png" 
            alt="VeoMate Interface" 
            fill 
            className="object-cover"
          /> 
        </div>

        {/* Core Philosophy */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">Core Philosophy</h2>
          <p className="text-xs md:text-sm opacity-70">
            Work communication should be effortless and maintainable. Current tools force you to jump between tabs—diagrams in one place, tasks in another, and chats in a third. VeoMate unifies these into a single, cohesive interface.
          </p>
        </div>

        {/* Key Features */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className={`p-4 rounded-2xl border ${borderClass} ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
              <h3 className="font-semibold mb-2 text-sm md:text-base opacity-90">Visual Project Mapping</h3>
              <p className="text-xs md:text-sm opacity-70">
                Map your entire project structure using nodes and branches on an infinite canvas.
              </p>
            </div>
            <div className={`p-4 rounded-2xl border ${borderClass} ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
              <h3 className="font-semibold mb-2 text-sm md:text-base opacity-90">Contextual Communication</h3>
              <p className="text-xs md:text-sm opacity-70">
                The chat sidebar automatically adapts to your focus. Click a node, and the conversation snaps to that specific context.
              </p>
            </div>
            <div className={`p-4 rounded-2xl border ${borderClass} ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
              <h3 className="font-semibold mb-2 text-sm md:text-base opacity-90">Structured Flexibility</h3>
              <p className="text-xs md:text-sm opacity-70">
                Combine the freedom of a whiteboard with the organization of structured task management.
              </p>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className={`p-5 rounded-2xl border ${borderClass} ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
          <h3 className="font-semibold text-sm md:text-base mb-2">🚧 Currently in Development</h3>
          <p className="text-xs md:text-sm opacity-70">
            We are currently in active development. Stay tuned for updates as we build the future of work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VeoMate;
