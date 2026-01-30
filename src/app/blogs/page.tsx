"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import QuickMenu from "@/components/QuickMenu";
import { blogPosts as posts } from "@/data/blogPosts";


export default function BlogsPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [fromSection, setFromSection] = React.useState<string | null>(null);

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

  return (
    <div className="min-h-screen animate-blur-in relative">
      <div className={`max-w-3xl mx-auto relative z-10 border-x-2 ${borderClass} px-4 md:px-8 py-8 md:py-12 min-h-screen`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <button
            onClick={() => {
              if (fromSection) {
                window.location.href = `/#${fromSection}`;
              } else {
                window.location.href = "/";
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
      </div>
    </div>
  );
}
