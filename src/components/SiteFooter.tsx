import { socials } from "@/data/data";

function findSocial(name: string) {
  return socials.find((s) => s.name.toLowerCase() === name.toLowerCase());
}

export default function SiteFooter() {
  const email = findSocial("email");

  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <p className="mono text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} SK Akram · akramcodez
        </p>
        <p className="mono text-[11px] text-muted-foreground">
          next.js · tailwind · no trackers ·{" "}
          {email && (
            <a
              href={email.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet"
            >
              say hi
            </a>
          )}
        </p>
      </div>
    </footer>
  );
}
