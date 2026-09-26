"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ThemeFavicon() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (typeof document === "undefined" || !resolvedTheme) return;
    const href =
      resolvedTheme === "dark" ? "/favicon-dark.ico" : "/favicon-light.ico";
    document.querySelectorAll<HTMLLinkElement>('link[rel="icon"]').forEach((l) => {
      l.href = href;
    });
  }, [resolvedTheme]);

  return null;
}
