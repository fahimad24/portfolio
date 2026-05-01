"use client";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { Code2, Coffee, Rocket, Heart } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "50+", label: "Projects Done" },
  { value: "20+", label: "Happy Clients" },
  { value: "100%", label: "Dedication" },
];

const funFacts = [
  { icon: <Code2 size={18} />, text: "10,000+ lines of code written" },
  { icon: <Coffee size={18} />, text: "Fueled by coffee & curiosity" },
  { icon: <Rocket size={18} />, text: "Always learning new tech" },
  { icon: <Heart size={18} />, text: "Passionate about clean code" },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "100px 24px", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "64px" }}>
          <p className="section-label" style={{ marginBottom: "16px" }}>About Me</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Passionate about crafting{" "}
            <span className="gradient-text">digital experiences</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center" }}>
          {/* Photo side */}
          <div style={{ flex: "1", minWidth: "280px", maxWidth: "400px" }}>
            <div style={{ position: "relative" }}>
              <div style={{
                width: "100%", aspectRatio: "4/5", borderRadius: "20px", overflow: "hidden",
                border: "1px solid var(--border)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.4)"
              }}>
                <Image
                  src="/profile.jpg"
                  alt="About photo"
                  width={400}
                  height={500}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              {/* Accent corner */}
              <div style={{
                position: "absolute", bottom: "-20px", right: "-20px",
                width: "120px", height: "120px", borderRadius: "20px",
                background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                opacity: 0.15, zIndex: -1
              }} />
              <div style={{
                position: "absolute", top: "-16px", left: "-16px",
                width: "80px", height: "80px", borderRadius: "16px",
                border: "2px solid rgba(108,99,255,0.3)", zIndex: -1
              }} />
            </div>
          </div>

          {/* Text side */}
          <div style={{ flex: "1.5", minWidth: "300px" }}>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.9, marginBottom: "32px" }}>
              {personalInfo.bio}
            </p>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.9, marginBottom: "40px" }}>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source, or sharing knowledge through my blog. I believe in writing clean, maintainable code that makes a real difference.
            </p>

            {/* Fun facts */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px", marginBottom: "40px" }}>
              {funFacts.map((fact, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  padding: "14px 16px", borderRadius: "12px",
                  background: "var(--surface)", border: "1px solid var(--border)"
                }}>
                  <span style={{ color: "var(--accent)", flexShrink: 0 }}>{fact.icon}</span>
                  <span style={{ color: "var(--muted)", fontSize: "0.85rem" }}>{fact.text}</span>
                </div>
              ))}
            </div>

            <a href={personalInfo.resumeUrl} download className="btn-primary">
              Download Resume ↓
            </a>
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "24px", marginTop: "80px"
        }}>
          {stats.map((s, i) => (
            <div key={i} className="glow-card" style={{ padding: "32px 24px", textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", fontFamily: "'Syne', sans-serif", fontWeight: 800 }} className="gradient-text">
                {s.value}
              </div>
              <div style={{ color: "var(--muted)", fontSize: "0.85rem", marginTop: "8px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
