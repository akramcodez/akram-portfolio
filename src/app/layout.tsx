import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provder";
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
  title: "SK Akram",
  description: "18-year-old Developer",
  keywords: [
    "SK Akram",
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
      name: "SK Akram",
      url: "https://github.com/akramcodez",
    },
  ],
  creator: "SK Akram",
  publisher: "SK Akram",

  openGraph: {
    title: "SK Akram 18-year-old Developer",
    description: "Explore the portfolio of SK Akram, an 18-year-old Developer",
    url: "https://akramcodez.tech",
    siteName: "SK Akram",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SK Akram Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SK Akram Full Stack Developer",
    description: "18-year-old Developer portfolio.",
    images: ["/og-image.jpg"],
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
        </ThemeProvider>
      </body>
    </html>
  );
}
