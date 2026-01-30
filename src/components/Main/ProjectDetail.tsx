import React from "react";
import { projects } from "@/data/data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import OsFit from "./ProjectDetails/OsFit";
import VeoMate from "./ProjectDetails/VeoMate";
import PIVA from "./ProjectDetails/PIVA";
import MyTube from "./ProjectDetails/MyTube";

type Props = {
  projectId: string;
  onBack: () => void;
};

const ProjectDetail = ({ projectId, onBack }: Props) => {
  const { theme } = useTheme();

  // Route to specific project components
  if (projectId.toLowerCase() === "osfit") {
    return <OsFit onBack={onBack} />;
  }
  
  if (projectId.toLowerCase() === "veomate") {
    return <VeoMate onBack={onBack} />;
  }
  
  if (projectId.toLowerCase() === "piva") {
    return <PIVA onBack={onBack} />;
  }
  
  if (projectId.toLowerCase() === "mytube") {
    return <MyTube onBack={onBack} />;
  }

  // Generic fallback for other projects
  const project = projects.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === projectId.toLowerCase()
  );

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-xl">Project not found</p>
        <button onClick={onBack} className="mt-4 underline">
          Go Back
        </button>
      </div>
    );
  }

  const borderClass = theme === "dark" ? "border-white/20" : "border-black/20";
  const bgClass = theme === "dark" ? "bg-white/5" : "bg-black/5";

  return (
    <div className="flex flex-col h-full w-full p-4 md:p-8 animate-in fade-in zoom-in duration-300">
      {/* Back Button */}
      <div className="mb-6">
       <button
          onClick={onBack}
          className={`inline-flex items-center justify-center p-2 rounded-full border transition-all duration-300 ease-in-out cursor-pointer ${
            theme === "dark"
              ? "bg-white/10 hover:bg-white/90 hover:text-black border-white/20 backdrop-blur-xl"
              : "bg-black/5 hover:bg-black/90 hover:text-white border-black/20 backdrop-blur-xl"
          }`}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="max-w-3xl w-full mx-auto space-y-6">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
            {project.name}
          </h1>
          <p className="text-lg opacity-80">{project.tech}</p>
        </div>

        <div className={`p-6 rounded-2xl border ${borderClass} ${bgClass}`}>
          <h2 className="text-xl font-semibold mb-3">About</h2>
          <p className="opacity-90 leading-relaxed mb-6">{project.desc}</p>

          <div className="flex gap-4">
             {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${borderClass} hover:bg-white/10 transition-colors`}
              >
                <FaGithub />
                <span>GitHub</span>
              </Link>
             )}
             {project.liveLink && (
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors`}
              >
                <GoLinkExternal />
                <span>Live Demo</span>
              </Link>
             )}
          </div>
        </div>

        <div className="opacity-50 text-sm text-center pt-10">
          <p>More details coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
