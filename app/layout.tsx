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
  title: "dev.portfolio - A modern portfolio template for developers",
  description:
    "Showcase your skills, projects, and experience with dev.portfolio - the modern portfolio template designed for developers. Built with Next.js 16 and Tailwind CSS, dev.portfolio offers a sleek and responsive design to help you stand out. Customize your portfolio with ease and share your work with the world.",
  icons: {
    icon: "/favicon.png",
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
      className={`${jetBrainsMono.variable} ${jetBrainsMono.className}h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
