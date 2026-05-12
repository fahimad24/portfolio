import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmadfahim.vercel.app"),
  title: "Ahmad Fahim - React & Next.js | TypeScript Projects",
  description:
    "Frontend developer building modern React and Next.js projects with TypeScript. Explore my code, portfolio projects, and web development expertise.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "x-default": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Ahmad Fahim - React & Next.js | TypeScript Projects",
    description:
      "Frontend developer building modern React and Next.js projects with TypeScript. Explore my code, portfolio projects, and web development expertise ",
    url: "https://ahmadfahim.vercel.app",
    type: "website",
    siteName: "Ahmad Fahim Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmad Fahim - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Fahim - React & Next.js | TypeScript Projects",
    description:
      "Frontend developer building modern React and Next.js projects with TypeScript. Explore my portfolio projects and web development expertise.",
    images: ["/profile.jpg"],
    site: "@fahimad24",
    creator: "@fahimad24",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetBrainsMono.variable} ${jetBrainsMono.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
