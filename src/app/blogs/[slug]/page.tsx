"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useParams } from "next/navigation";
import QuickMenu from "@/components/QuickMenu";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoMedium } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { blogPosts } from "@/data/blogPosts";



export default function ArticlePage() {
  const { theme } = useTheme();
  const params = useParams();
  const [mounted, setMounted] = React.useState(false);
  const [fromSection, setFromSection] = React.useState<string | null>(null);

  React.useEffect(() => {
    setMounted(true);
    const urlParams = new URLSearchParams(window.location.search);
    const from = urlParams.get("from");
    setFromSection(from);
  }, []);

  if (!mounted) return null;

  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  const bgClass =
    theme === "dark"
      ? "bg-white/10 hover:bg-white/90 hover:text-black border-white/20 backdrop-blur-xl"
      : "bg-black/5 hover:bg-black/90 hover:text-white border-black/20 backdrop-blur-xl";

  const borderClass = theme === "dark" ? "border-white/20" : "border-black/20";
  
  const iconClass = theme === "dark" ? "text-white/70 hover:text-white" : "text-black/60 hover:text-black";

  const backHref = fromSection ? `/blogs?from=${fromSection}` : "/blogs";

  if (!post) {
    return (
      <div className="min-h-screen p-4 md:p-8 lg:p-12 animate-blur-in relative">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex items-center justify-between mb-12">
            <Link
              href={backHref}
              className={`inline-flex items-center justify-center p-2 rounded-full border transition-all duration-300 ease-in-out cursor-pointer ${bgClass}`}
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Not Found
            </h1>
            <QuickMenu />
          </div>
          <p className="text-center opacity-70">This article doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen animate-blur-in relative">
      <div className={`max-w-3xl mx-auto relative z-10 border-x-2 ${borderClass} px-4 md:px-8 py-8 md:py-12 min-h-screen`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <Link
            href={backHref}
            className={`inline-flex items-center justify-center p-1.5 md:p-2 rounded-full border transition-all duration-300 ease-in-out cursor-pointer ${bgClass}`}
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Blogs
          </h1>
          <QuickMenu />
        </div>

        {/* Article Content */}
        <article className="prose prose-base md:prose-lg dark:prose-invert max-w-none">
          {post.image && (
            <div className={`mb-6 md:mb-8 rounded-2xl overflow-hidden border ${borderClass} shadow-2xl`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto object-cover m-0" 
              />
            </div>
          )}
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 md:mb-8 text-center md:text-left">
            {post.title}
          </h1>
          {post.content.split("\n\n").map((block, index) => {
            const trimmedBlock = block.trim();
            
            // Handle H2 headings
            if (trimmedBlock.startsWith("## ")) {
              return (
                <h2 key={index} className="text-xl md:text-3xl font-bold mt-6 md:mt-8 mb-3 md:mb-4">
                  {trimmedBlock.replace("## ", "")}
                </h2>
              );
            }
            
            // Handle bullet points
            if (trimmedBlock.startsWith("• ")) {
              return (
                <div key={index} className="flex items-start mb-3 opacity-80 leading-relaxed pl-2 text-[13px] md:text-base">
                  <span className="mr-2 md:mr-3 text-base md:text-lg leading-[1.4rem] md:leading-[1.6rem]">•</span>
                  <p className="flex-1">
                    {renderInlineMarkdown(trimmedBlock.replace("• ", ""))}
                  </p>
                </div>
              );
            }
            
            // Handle numbered lists
            if (/^\d+\.\s/.test(trimmedBlock)) {
              const match = trimmedBlock.match(/^(\d+)\.\s(.+)/);
              if (match) {
                return (
                  <div key={index} className="flex items-start mb-3 opacity-80 leading-relaxed pl-2 text-[13px] md:text-base">
                    <span className="mr-2 md:mr-3 font-semibold min-w-[1.1rem] md:min-w-[1.5rem] text-[13px] md:text-base">{match[1]}.</span>
                    <p className="flex-1">
                      {renderInlineMarkdown(match[2])}
                    </p>
                  </div>
                );
              }
            }
            
            // Handle Images
            if (trimmedBlock.startsWith("IMAGE: ")) {
              const imageUrl = trimmedBlock.replace("IMAGE: ", "").trim();
              return (
                <div key={index} className={`mb-8 rounded-2xl overflow-hidden border ${borderClass} shadow-xl active:scale-[0.99] transition-transform duration-300`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={imageUrl} 
                    alt="Article visual" 
                    className="w-full h-auto object-cover m-0" 
                  />
                </div>
              );
            }

            // Regular paragraphs
            return (
              <p key={index} className="mb-4 opacity-80 leading-relaxed text-sm md:text-lg">
                {renderInlineMarkdown(trimmedBlock)}
              </p>
            );
          })}
        </article>

        {/* Footer Socials */}
        <div className="flex justify-end items-center gap-3 mt-12">
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

// Helper function to render inline markdown (bold, italic, and links)
function renderInlineMarkdown(text: string) {
  const parts: React.ReactNode[] = [];
  let currentIndex = 0;
  
  // Regex to match **bold**, *italic*, and URLs (including specific akramcodez.tech case)
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|\bhttps?:\/\/[^\s]+|\bakramcodez\.tech\S*)/g;
  let match;
  
  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > currentIndex) {
      parts.push(text.substring(currentIndex, match.index));
    }
    
    const matchedText = match[0];
    
    if (matchedText.startsWith("**") && matchedText.endsWith("**")) {
      // Bold text
      parts.push(
        <strong key={match.index} className="font-bold">
          {matchedText.slice(2, -2)}
        </strong>
      );
    } else if (matchedText.startsWith("*") && matchedText.endsWith("*")) {
      // Italic text
      parts.push(
        <em key={match.index} className="italic">
          {matchedText.slice(1, -1)}
        </em>
      );
    } else if (matchedText.startsWith("http") || matchedText.startsWith("akramcodez.tech")) {
      // Links
      const href = matchedText.startsWith("http") ? matchedText : `https://${matchedText}`;
      parts.push(
        <a 
          key={match.index} 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-80 transition-opacity"
        >
          {matchedText}
        </a>
      );
    }
    
    currentIndex = match.index + matchedText.length;
  }
  
  // Add remaining text
  if (currentIndex < text.length) {
    parts.push(text.substring(currentIndex));
  }
  
  return parts.length > 0 ? parts : text;
}
