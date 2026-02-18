import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provder";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import "./globals.css";

const siteUrl = "https://akramcodez.tech";

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
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sk Akram",
    template: "%s | Sk Akram",
  },
  description:
    "Explore Sk Akram's full stack developer portfolio, projects, blogs, and contact details. Discover work in Next.js, React, TypeScript, Node.js, and modern web development.",
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
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
    description:
      "Portfolio, blogs, and project highlights by Sk Akram. Explore full stack development work with Next.js, React, TypeScript, and Node.js.",
    url: siteUrl,
    siteName: "Sk Akram",
    images: [
      {
        url: `${siteUrl}/og-image.jpg?v=2`,
        width: 1200,
        height: 630,
        alt: "Sk Akram",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sk Akram",
    description:
      "Explore projects, blogs, and contact details by Sk Akram, a full stack developer building with Next.js, React, TypeScript, and Node.js.",
    images: [`${siteUrl}/og-image.jpg?v=2`],
    creator: "@akramcodez",
  },

  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sk Akram",
    url: siteUrl,
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/blogs?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sk Akram",
    url: siteUrl,
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://github.com/akramcodez",
      "https://x.com/akramcodez",
      "https://www.linkedin.com/in/akramcodez",
      "https://medium.com/@akramcodez",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} ${thasadith.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
