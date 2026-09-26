import Link from "next/link";
import GithubPanel from "@/components/GithubPanel";
import { socials } from "@/data/data";

function social(name: string) {
  return socials.find((s) => s.name.toLowerCase() === name.toLowerCase());
}

export default function Sidebar() {
  return (
    <>
      {/* ── Vertical Separator ─────────────────────────────── */}
      <div className="hidden lg:block w-[1px] bg-border" />

      {/* ── Right / sidebar column (desktop) ───────────────── */}
      <aside className="hidden lg:block space-y-9">
        <GithubPanel />

        <section>
          <p className="mono text-[10px] md:text-[11px] tracking-[0.14em] text-muted-foreground">
            CURRENT STATUS
          </p>
          <ul className="mt-3 space-y-2 mono text-[11px] md:text-[12px]">
            <li className="flex items-baseline gap-2">
              <span className="text-primary">*</span>
              software engineer at nano collective
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-primary">*</span>
              part-time software engineer at afterquery experts
            </li>
          </ul>
        </section>

        <section>
          <p className="mono text-[10px] md:text-[11px] tracking-[0.14em] text-muted-foreground">
            LINKS
          </p>
          <ul className="mt-3 space-y-1.5">
            {["GitHub", "X (Twitter)", "LinkedIn", "Email"].map((name) => {
              const s = social(name);
              if (!s) return null;
              return (
                <li key={name} className="mono text-[11px] md:text-[12px]">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-quiet"
                  >
                    {name === "X (Twitter)" ? "x" : name.toLowerCase()}
                  </a>
                  <span className="text-muted-foreground">
                    {" "}
                    · {name === "Email" ? "skakram00zz" : s.handle}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <p className="mono text-[10px] md:text-[11px] tracking-[0.14em] text-muted-foreground">
            PAGES
          </p>
          <ul className="mt-3 space-y-1.5 mono text-[11px] md:text-[12px]">
            <li>
              <Link href="/blogs" className="link-quiet">
                /blogs
              </Link>{" "}
              <span className="text-muted-foreground">
                · articles and notes
              </span>
            </li>
            <li>
              <Link href="/support" className="link-quiet">
                /support
              </Link>{" "}
              <span className="text-muted-foreground">
                · support me
              </span>
            </li>
          </ul>
        </section>
      </aside>

      {/* ── Mobile: reordered extras ───────────────────────── */}
      <div className="lg:hidden mt-12 space-y-9">
        <GithubPanel />

        <section>
          <p className="mono text-[10px] md:text-[11px] tracking-[0.14em] text-muted-foreground">
            CURRENT STATUS
          </p>
          <ul className="mt-3 space-y-2 mono text-[11px] md:text-[12px]">
            <li className="flex items-baseline gap-2">
              <span className="text-primary">*</span>
              software engineer at nano collective
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-primary">*</span>
              part-time software engineer at afterquery experts
            </li>
          </ul>
        </section>

        <section>
          <p className="mono text-[10px] md:text-[11px] tracking-[0.14em] text-muted-foreground">
            LINKS
          </p>
          <ul className="mt-3 space-y-1.5">
            {["GitHub", "X (Twitter)", "LinkedIn", "Email"].map((name) => {
              const s = social(name);
              if (!s) return null;
              return (
                <li key={name} className="mono text-[11px] md:text-[12px]">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-quiet"
                  >
                    {name === "X (Twitter)" ? "x" : name.toLowerCase()}
                  </a>
                  <span className="text-muted-foreground">
                    {" "}
                    · {name === "Email" ? "skakram00zz" : s.handle}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <p className="mono text-[10px] md:text-[11px] tracking-[0.14em] text-muted-foreground">
            PAGES
          </p>
          <ul className="mt-3 space-y-1.5 mono text-[11px] md:text-[12px]">
            <li>
              <Link href="/blogs" className="link-quiet">
                /blogs
              </Link>{" "}
              <span className="text-muted-foreground">
                · articles and notes
              </span>
            </li>
            <li>
              <Link href="/support" className="link-quiet">
                /support
              </Link>{" "}
              <span className="text-muted-foreground">
                · support me
              </span>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
