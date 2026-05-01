import { experiences } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: "100px 24px", background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ marginBottom: "64px" }}>
          <p className="section-label" style={{ marginBottom: "16px" }}>Experience</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Where I&apos;ve{" "}
            <span className="gradient-text">worked</span>
          </h2>
        </div>

        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div style={{
            position: "absolute", left: "19px", top: "12px", bottom: "12px",
            width: "2px", background: "linear-gradient(to bottom, var(--accent), transparent)"
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {experiences.map((exp, i) => (
              <div key={i} style={{ display: "flex", gap: "32px", paddingLeft: "0" }}>
                {/* Dot */}
                <div style={{
                  width: "40px", height: "40px", borderRadius: "50%", flexShrink: 0,
                  background: i === 0 ? "var(--accent)" : "var(--surface-2)",
                  border: `2px solid ${i === 0 ? "var(--accent)" : "var(--border)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: i === 0 ? "0 0 20px rgba(108,99,255,0.5)" : "none"
                }}>
                  <Briefcase size={16} color={i === 0 ? "white" : "var(--muted)"} />
                </div>

                {/* Content */}
                <div className="glow-card" style={{ flex: 1, padding: "28px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px", marginBottom: "8px" }}>
                    <h3 style={{ fontSize: "1.1rem" }}>{exp.role}</h3>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem",
                      color: "var(--accent)", padding: "4px 12px", borderRadius: "100px",
                      background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.2)"
                    }}>{exp.period}</span>
                  </div>
                  <p style={{ color: "var(--accent-3)", fontSize: "0.9rem", marginBottom: "12px", fontWeight: 500 }}>{exp.company}</p>
                  <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
