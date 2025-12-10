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

const thasadith = localFont({
  src: [
    {
      path: "./fonts/Thasadith/Thasadith-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Thasadith/Thasadith-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Thasadith/Thasadith-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Thasadith/Thasadith-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-thasadith",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.akramcodez.tech"),
  title: "Sk Akram",
  description: "Hey! I'm Sk Akram, Software Developer",
  keywords: [
    "Sk Akram",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Backend Developer",
    "Computer Science Student",
    "Web Developer",
    "Portfolio",
    "Freelancer",
    "Internship",
  ],
  authors: [
    {
      name: "Sk Akram",
      url: "https://github.com/akramcodez",
    },
  ],
  creator: "Sk Akram",
  publisher: "Sk Akram",

  openGraph: {
    title: "Sk Akram Portfolio",
    description: "Sk Akram - Software Developer",
    url: "https://www.akramcodez.tech",
    siteName: "Sk Akram",
    images: [
      {
        url: "https://www.akramcodez.tech/og-image.jpg?v=2",
        width: 1200,
        height: 630,
        alt: "Sk Akram Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sk Akram Portfolio",
    description: "Sk Akram - Software Developer",
    images: ["https://www.akramcodez.tech/og-image.jpg?v=2"],
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
      <body className={`${nunito.variable} ${thasadith.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
