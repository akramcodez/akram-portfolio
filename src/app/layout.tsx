import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provder";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import "./globals.css";

const nunito = localFont({
  src: "./fonts/Nunito/Nunito-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-nunito",
});

const plexMono = localFont({
  src: [
    {
      path: "./fonts/ibm-plex-mono/IBMPlexMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ibm-plex-mono/IBMPlexMono-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.akramcodez.com"),
  title: "SK Akram — full-stack developer & open-source contributor",
  description:
    "SK Akram (@akramcodez) — full-stack developer, CS student, open-source contributor. 50+ merged PRs across Zed, Zulip, CircuitVerse, Ghostfolio, Activepieces and more. Currently building at Nano Collective.",
  keywords: [
    "Sk Akram",
    "akramcodez",
    "Full Stack Developer",
    "Open Source Contributor",
    "Nano Collective",
    "Nanocoder",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript",
    "Computer Science Student",
    "Portfolio",
  ],
  authors: [
    {
      name: "SK Akram",
      url: "https://github.com/akramcodez",
    },
  ],
  creator: "SK Akram",
  publisher: "SK Akram",

  openGraph: {
    title: "SK Akram — full-stack developer & open-source contributor",
    description:
      "Full-stack developer who learns by shipping. 50+ merged open-source PRs. Currently working with Nano Collective / Nanocoder.",
    url: "https://www.akramcodez.com",
    siteName: "SK Akram",
    images: [
      {
        url: "https://www.akramcodez.com/og-image.jpg?v=2",
        width: 1200,
        height: 630,
        alt: "SK Akram",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SK Akram — full-stack developer & open-source contributor",
    description:
      "Full-stack developer who learns by shipping. 50+ merged open-source PRs. Currently working with Nano Collective / Nanocoder.",
    images: ["https://www.akramcodez.com/og-image.jpg?v=2"],
    creator: "@akramcodez",
  },

  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} ${plexMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
