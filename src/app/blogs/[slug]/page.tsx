"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { blogPosts } from "@/data/blogPosts";

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col animate-fade-in">
        <SiteHeader />
        <main className="flex-1 w-full max-w-5xl mx-auto px-5 md:px-8 py-10">
          <p className="mono text-[12px] text-muted-foreground">
            404 — post not found
          </p>
          <Link href="/blogs" className="mono text-[12px] link-quiet mt-2 inline-block">
            ← back to writing
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      <SiteHeader />

      <main className="flex-1 w-full max-w-5xl mx-auto px-5 md:px-8 py-8 md:py-10">
        <article className="max-w-2xl">
          <p className="mono text-[11px] text-muted-foreground mb-4">
            <Link href="/blogs" className="link-quiet">
              ← writing
            </Link>
          </p>

          <h1 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
            {post.title}
          </h1>
          <p className="mono text-[11px] text-muted-foreground mt-3 pb-4 border-b border-border">
            sk akram · {post.slug}
          </p>

          {post.image && (
            <div className="my-6 border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto m-0"
              />
            </div>
          )}

          <div className="mt-6">
            {post.content.split("\n\n").map((block, index) => {
              const trimmedBlock = block.trim();

              if (trimmedBlock.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="text-lg md:text-xl font-bold mt-8 mb-3"
                  >
                    {trimmedBlock.replace("## ", "")}
                  </h2>
                );
              }

              if (trimmedBlock.startsWith("• ")) {
                return (
                  <div
                    key={index}
                    className="flex items-start mb-2.5 text-[15px] leading-relaxed"
                  >
                    <span className="mr-3 text-primary">•</span>
                    <p className="flex-1">
                      {renderInlineMarkdown(trimmedBlock.replace("• ", ""))}
                    </p>
                  </div>
                );
              }

              if (/^\d+\.\s/.test(trimmedBlock)) {
                const match = trimmedBlock.match(/^(\d+)\.\s(.+)/);
                if (match) {
                  return (
                    <div
                      key={index}
                      className="flex items-start mb-2.5 text-[15px] leading-relaxed"
                    >
                      <span className="mr-3 mono text-[13px] text-primary min-w-[1.4rem]">
                        {match[1]}.
                      </span>
                      <p className="flex-1">{renderInlineMarkdown(match[2])}</p>
                    </div>
                  );
                }
              }

              if (trimmedBlock.startsWith("IMAGE: ")) {
                const imageUrl = trimmedBlock.replace("IMAGE: ", "").trim();
                return (
                  <div key={index} className="my-6 border border-border">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imageUrl}
                      alt="Article visual"
                      className="w-full h-auto m-0"
                    />
                  </div>
                );
              }

              return (
                <p
                  key={index}
                  className="mb-4 text-[15px] leading-relaxed text-foreground/90"
                >
                  {renderInlineMarkdown(trimmedBlock)}
                </p>
              );
            })}
          </div>

          <div className="mt-10 pt-5 border-t border-border flex flex-wrap items-center justify-between gap-3">
            <Link href="/blogs" className="mono text-[11px] link-quiet">
              ← more writing
            </Link>
            <p className="mono text-[11px] text-muted-foreground">
              discuss on{" "}
              <a
                href="https://x.com/akramcodez"
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet"
              >
                x ↗
              </a>
            </p>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}

// Render inline markdown: **bold**, *italic*, URLs, newlines
function renderInlineMarkdown(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let currentIndex = 0;

  const regex =
    /(\*\*[^*]+\*\*|\*[^*]+\*|\bhttps?:\/\/[^\s]+|\bakramcodez\.com\S*|\bmedium\.com\S*|\bx\.com\S*|\n)/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > currentIndex) {
      parts.push(text.substring(currentIndex, match.index));
    }

    const matchedText = match[0];

    if (matchedText.startsWith("**") && matchedText.endsWith("**")) {
      parts.push(
        <strong key={match.index} className="font-bold">
          {renderInlineMarkdown(matchedText.slice(2, -2))}
        </strong>,
      );
    } else if (matchedText.startsWith("*") && matchedText.endsWith("*")) {
      parts.push(
        <em key={match.index} className="italic">
          {renderInlineMarkdown(matchedText.slice(1, -1))}
        </em>,
      );
    } else if (matchedText === "\n") {
      parts.push(<br key={match.index} />);
    } else if (
      matchedText.startsWith("http") ||
      matchedText.startsWith("akramcodez.com") ||
      matchedText.startsWith("medium.com") ||
      matchedText.startsWith("x.com")
    ) {
      const href = matchedText.startsWith("http")
        ? matchedText
        : `https://${matchedText}`;
      parts.push(
        <a
          key={match.index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-quiet"
        >
          {matchedText}
        </a>,
      );
    }

    currentIndex = match.index + matchedText.length;
  }

  if (currentIndex < text.length) {
    parts.push(text.substring(currentIndex));
  }

  return parts.length > 0 ? parts : text;
}
