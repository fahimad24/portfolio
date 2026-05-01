"use client";
import Link from "next/link";
import { Mail, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const socials = [
    { href: personalInfo.github, icon: <GithubIcon size={18} /> },
    { href: personalInfo.linkedin, icon: <LinkedinIcon size={18} /> },
    { href: personalInfo.twitter, icon: <TwitterXIcon size={18} /> },
    { href: `mailto:${personalInfo.email}`, icon: <Mail size={18} /> },
  ];

  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "48px 24px", background: "var(--surface)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "32px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "linear-gradient(135deg, var(--accent), var(--accent-2))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Terminal size={16} color="white" />
              </div>
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "var(--text)" }}>
                dev<span className="gradient-text">.portfolio</span>
              </span>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem", maxWidth: "280px" }}>
              Building modern web experiences with passion and precision.
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ width: "42px", height: "42px", borderRadius: "10px", background: "var(--surface-2)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)", transition: "all 0.2s", textDecoration: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--muted)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
              >{s.icon}</a>
            ))}
          </div>
        </div>
        <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid var(--border)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px" }}>
          <p style={{ color: "var(--muted)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js 15 & ❤️
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="/blog" style={{ color: "var(--muted)", fontSize: "0.8rem", textDecoration: "none" }}>Blog</Link>
            <Link href="/admin" style={{ color: "var(--muted)", fontSize: "0.8rem", textDecoration: "none" }}>Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
