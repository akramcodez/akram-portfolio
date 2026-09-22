import SiteHeader from "@/components/SiteHeader";
import SectionMarker from "@/components/SectionMarker";
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
        <div className="max-w-2xl">
          <SectionMarker
            right={
              <a
                href="https://x.com/akramcodez/articles"
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet"
              >
                more on x ↗
              </a>
            }
          >
            writing
          </SectionMarker>
          <p className="text-[15px] text-foreground/85 leading-relaxed mb-8">
            notes on software, open source and things i&apos;m still figuring
            out. published here first, cross-posted to x and medium.
          </p>

          <div className="divide-y divide-border border-y border-border">
            {blogPosts.map((post) => (
              <article key={post.slug} className="py-5">
                <Link
                  href={`/blogs/${post.slug}`}
                  className="text-base font-bold link-quiet"
                >
                  {post.title}
                </Link>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  {post.excerpt}
                </p>
                <p className="mono text-[11px] text-muted-foreground mt-2">
                  <Link href={`/blogs/${post.slug}`} className="hover:text-primary transition-colors">
                    read →
                  </Link>
                </p>
              </article>
            ))}
          </div>

          <p className="mono text-[11px] text-muted-foreground mt-6">
            also on{" "}
            <a
              href="https://medium.com/@akramcodez"
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet"
            >
              medium.com/@akramcodez ↗
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
