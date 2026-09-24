import SiteHeader from "@/components/SiteHeader";

import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export const metadata = {
  title: "Writing | SK Akram",
  description: "Notes on software, open source and things i'm figuring out.",
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      <SiteHeader />

      <main className="flex-1 w-full max-w-5xl mx-auto px-5 md:px-8 py-8 md:py-10">
        <div className="w-full">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group flex flex-col border border-border rounded-sm p-5 hover:border-foreground/40 dark:hover:border-foreground/20 transition-colors duration-300 bg-card/20 h-full"
              >
                <article className="flex flex-col h-full">
                  <h2 className="text-[16px] font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[14px] text-muted-foreground mt-2 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <p className="mono text-[10px] text-primary mt-6 font-semibold uppercase tracking-wider">
                    read article →
                  </p>
                </article>
              </Link>
            ))}
          </div>


        </div>
      </main>
    </div>
  );
}
