"use client";
import { projects } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "64px" }}>
          <p className="section-label" style={{ marginBottom: "16px" }}>Projects</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Things I&apos;ve <span className="gradient-text">built</span></h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "24px", marginBottom: "40px" }}>
          {featured.map((project, idx) => (
            <div key={project.id} className="glow-card" style={{ padding: "32px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, ${project.color}, transparent)` }} />
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: project.color, marginBottom: "16px", opacity: 0.7 }}>
                0{idx + 1}
              </div>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "12px", color: "var(--text)" }}>{project.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "24px" }}>{project.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
                {project.tech.map((t) => (
                  <span key={t} style={{ padding: "4px 12px", borderRadius: "6px", fontSize: "0.75rem", background: "var(--surface-2)", color: "var(--muted)", border: "1px solid var(--border)", fontFamily: "'JetBrains Mono', monospace" }}>{t}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "16px" }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--muted)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--text)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--muted)"}
                >
                  <GithubIcon size={15} /> Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--muted)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--accent)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--muted)"}
                >
                  <ExternalLink size={15} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {others.length > 0 && (
          <>
            <h3 style={{ fontSize: "1rem", color: "var(--muted)", marginBottom: "20px", fontFamily: "'JetBrains Mono', monospace" }}>// other noteworthy projects</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
              {others.map((project) => (
                <div key={project.id} className="glow-card" style={{ padding: "24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                    <h4 style={{ fontSize: "1rem" }}>{project.title}</h4>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }}><GithubIcon size={16} /></a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }}><ExternalLink size={16} /></a>
                    </div>
                  </div>
                  <p style={{ color: "var(--muted)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "16px" }}>{project.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {project.tech.map((t) => (
                      <span key={t} style={{ fontSize: "0.7rem", color: "var(--accent)", fontFamily: "'JetBrains Mono', monospace" }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
