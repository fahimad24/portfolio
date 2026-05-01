"use client";
import { skills } from "@/data/portfolio";
import { Layers } from "lucide-react";

const categoryColors: Record<string, string> = {
  Frontend: "#6c63ff",
  Backend: "#ff6584",
  Tools: "#43e8b0",
  Other: "#f59e0b",
};

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: "100px 24px", background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "64px" }}>
          <p className="section-label" style={{ marginBottom: "16px" }}>Skills & Expertise</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Technologies I{" "}
            <span className="gradient-text">work with</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
          {skills.map((group) => (
            <div key={group.category} className="glow-card" style={{ padding: "32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "10px",
                  background: `${categoryColors[group.category]}20`,
                  border: `1px solid ${categoryColors[group.category]}40`,
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <Layers size={18} color={categoryColors[group.category]} />
                </div>
                <h3 style={{ fontSize: "1rem", color: "var(--text)" }}>{group.category}</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {group.items.map((skill) => (
                  <span key={skill} style={{
                    padding: "6px 14px", borderRadius: "100px", fontSize: "0.8rem",
                    background: `${categoryColors[group.category]}10`,
                    border: `1px solid ${categoryColors[group.category]}30`,
                    color: categoryColors[group.category],
                    fontFamily: "'JetBrains Mono', monospace"
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech marquee */}
        <div style={{ marginTop: "64px", overflow: "hidden", position: "relative" }}>
          <div style={{
            display: "flex", gap: "32px", animation: "marquee 20s linear infinite",
            whiteSpace: "nowrap"
          }}>
            {["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "PostgreSQL", "Docker", "AWS", "Tailwind CSS", "GraphQL", "Redis", "Prisma",
              "React", "Next.js", "TypeScript", "Node.js", "MongoDB", "PostgreSQL", "Docker", "AWS", "Tailwind CSS", "GraphQL", "Redis", "Prisma"
            ].map((tech, i) => (
              <span key={i} style={{
                padding: "8px 20px", borderRadius: "100px",
                background: "var(--surface-2)", border: "1px solid var(--border)",
                color: "var(--muted)", fontSize: "0.85rem", flexShrink: 0,
                fontFamily: "'JetBrains Mono', monospace"
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
      `}</style>
    </section>
  );
}
