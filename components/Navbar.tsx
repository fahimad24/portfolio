"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-6 transition-all duration-300 backdrop-blur-xl`}
    >
      <div className=" flex h-18 w-full max-w-7xl mx-auto items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-linear-to-r from-accent to-accent-2">
            <Terminal size={18} color="white" />
          </div>
          <span className="font-bold text-3xl text-text">
            dev<span className="gradient-text ">.portfolio</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-2 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 px-4 rounded-lg text-muted text-sm font-medium transition-colors duration-200 "
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "var(--color-text)";
                (e.target as HTMLElement).style.background =
                  "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "var(--color-muted)";
                (e.target as HTMLElement).style.background = "transparent";
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download
            className="btn-primary py-2 px-4 text-sm font-medium"
          >
            Resume ↓
          </a>
        </nav>

        {/* Mobile menu btn */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden bg-none border-none text-text cursor-pointer"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="bg-[rgba(10,10,15,0.98)] backdrop-blur-lg rounded-lg mt-4 mx-6 border-b border-b-border px-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-4 text-muted border-b border-b-border"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download
            className="btn-primary mt-4 w-full justify-center"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
