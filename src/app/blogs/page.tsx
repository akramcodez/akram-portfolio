"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import QuickMenu from "@/components/QuickMenu";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoMedium } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { blogPosts as posts } from "@/data/blogPosts";


export default function BlogsPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [fromSection, setFromSection] = React.useState<string | null>(null);

  const router = useRouter(); 
  React.useEffect(() => {
    setMounted(true);
    const params = new URLSearchParams(window.location.search);
    const from = params.get("from");
    setFromSection(from);
  }, []);

  if (!mounted) return null;

  const borderClass = theme === "dark" ? "border-white/20" : "border-black/20";
  const bgClass =
    theme === "dark"
      ? "bg-white/10 hover:bg-white/90 hover:text-black border-white/20 backdrop-blur-xl"
      : "bg-black/5 hover:bg-black/90 hover:text-white border-black/20 backdrop-blur-xl";
  
  const iconClass = theme === "dark" ? "text-white/70 hover:text-white" : "text-black/60 hover:text-black";

  return (
    <div className="min-h-screen animate-blur-in relative">
      <div className={`max-w-3xl mx-auto relative z-10 border-x-2 ${borderClass} px-4 md:px-8 py-8 md:py-12 min-h-screen flex flex-col`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <button
            onClick={() => {
              if (fromSection) {
                router.push(`/#${fromSection}`);
              } else {
                router.push("/");
              }
            }}
            className={`inline-flex items-center justify-center p-1.5 md:p-2 rounded-full border transition-all duration-300 ease-in-out cursor-pointer ${bgClass}`}
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Blogs
          </h1>
          <QuickMenu />
        </div>

        {/* Blog Listings */}
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}${fromSection ? `?from=${fromSection}` : ""}`}
              className={`block p-6 rounded-2xl border ${borderClass} ${
                theme === "dark" ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"
              } transition-all duration-300 cursor-pointer`}
            >
              <h2 className="text-xl md:text-2xl font-bold mb-3">{post.title}</h2>
              <p className="text-sm md:text-base opacity-70 line-clamp-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>

        {/* Footer Socials */}
        <div className="flex justify-end items-center gap-3 mt-auto">
          <Link
            href="https://www.linkedin.com/in/akramcodez"
            target="_blank"
            rel="noopener noreferrer"
            className={iconClass}
          >
            <FaLinkedin className="w-5 h-5" /> 
          </Link>
          <Link
            href="https://medium.com/@akramcodez"
            target="_blank"
            rel="noopener noreferrer"
            className={iconClass}
          >
            <IoLogoMedium className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com/akramcodez"
            target="_blank"
            rel="noopener noreferrer"
            className={iconClass}
          >
            <FaGithub className="w-5 h-5" />
          </Link>
          <Link
            href="https://x.com/akramcodez"
            target="_blank"
            rel="noopener noreferrer"
            className={iconClass}
          >
            <FaXTwitter className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
