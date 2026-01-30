"use client";
import React from "react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

type Props = {
  onBack: () => void;
};

const PIVA = ({ onBack }: Props) => {
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
              PIVA
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
                href="https://github.com/akramcodez/Piva"
                target="_blank"
                className={`p-1.5 md:p-2 rounded-full border ${borderClass} ${bgClass} transition-all`}
              >
                <Github className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <Link
                href="https://piva.akramcodez.tech"
                target="_blank"
                className={`p-1.5 md:p-2 rounded-full border ${borderClass} ${bgClass} transition-all`}
              >
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
          
          <p className="text-sm md:text-xl opacity-80 max-w-2xl">
            AI-Powered Webinar Platform. Host live webinars with AI agent assistance, automated sales, and real-time chat.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js 14",
              "TypeScript",
              "Prisma",
              "Clerk",
              "Stripe",
              "Stream",
              "Vapi.ai",
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
            src="/piva.png" 
            alt="PIVA Interface" 
            fill 
            className="object-cover"
          /> 
        </div>

        {/* Core Features */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className={`p-4 rounded-2xl border ${borderClass} ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
              <h3 className="font-semibold mb-2 text-sm md:text-base opacity-90">AI-Powered Webinars</h3>
              <p className="text-xs md:text-sm opacity-70">
                Host live webinars with AI agent assistance for intelligent customer interaction and automated responses.
              </p>
            </div>
            <div className={`p-4 rounded-2xl border ${borderClass} ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
              <h3 className="font-semibold mb-2 text-sm md:text-base opacity-90">Real-time Chat</h3>
              <p className="text-xs md:text-sm opacity-70">
                Stream-powered chat with automated moderation for seamless attendee engagement during live sessions.
              </p>
            </div>
            <div className={`p-4 rounded-2xl border ${borderClass} ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
              <h3 className="font-semibold mb-2 text-sm md:text-base opacity-90">Product Integration</h3>
              <p className="text-xs md:text-sm opacity-70">
                Seamless product sales during webinars with Stripe integration for secure payment processing.
              </p>
            </div>
          </div>
        </div>

        {/* Architecture */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">Architecture</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`p-4 rounded-2xl border ${borderClass} ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
              <h3 className="font-semibold mb-2 text-sm md:text-base opacity-90">Frontend</h3>
              <p className="text-xs md:text-sm opacity-70">
                Next.js 14 App Router, React 18 with TypeScript, Tailwind CSS + Shadcn/ui, Zustand state management, Clerk authentication.
              </p>
            </div>
            <div className={`p-4 rounded-2xl border ${borderClass} ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
              <h3 className="font-semibold mb-2 text-sm md:text-base opacity-90">Backend</h3>
              <p className="text-xs md:text-sm opacity-70">
                Node.js runtime, PostgreSQL + Prisma ORM, Stream Chat for real-time, Vapi.ai for AI voice integration.
              </p>
            </div>
          </div>
        </div>

        {/* Dashboard Features */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">Dashboard</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`p-4 rounded-2xl border ${borderClass} ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
              <h3 className="font-semibold mb-2 text-sm md:text-base opacity-90">Webinar Management</h3>
              <p className="text-xs md:text-sm opacity-70">
                Create/edit webinars, schedule management, attendee tracking, and AI agent configuration.
              </p>
            </div>
            <div className={`p-4 rounded-2xl border ${borderClass} ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
              <h3 className="font-semibold mb-2 text-sm md:text-base opacity-90">Analytics Dashboard</h3>
              <p className="text-xs md:text-sm opacity-70">
                Comprehensive webinar analytics, revenue tracking, quick actions, and recent activity monitoring.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PIVA;
