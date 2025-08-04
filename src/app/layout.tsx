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
  metadataBase: new URL("https://www.akramcodez.tech"),
  title: "SK Akram Portfolio",
  description: "SK Akram - 18-year-old Developer",
  viewport: "width=device-width, initial-scale=1",
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
    title: "SK Akram Portfolio",
    description: "SK Akram - 18-year-old Developer",
    url: "https://www.akramcodez.tech",
    siteName: "SK Akram",
    images: [
      {
        url: "https://www.akramcodez.tech/og-image.jpg",
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
    title: "SK Akram Portfolio",
    description: "SK Akram - 18-year-old Developer",
    images: ["https://www.akramcodez.tech/og-image.jpg"],
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
