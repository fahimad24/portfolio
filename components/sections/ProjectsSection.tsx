"use client";
import { projects } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../SocialIcons";

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-25 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="section-label mb-4">Projects</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">
            Things I&apos;ve <span className="gradient-text">built</span>
          </h2>
        </div>

        <div
          className="grid gap-6 mb-10"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          }}
        >
          {featured.map((project, idx) => (
            <div
              key={project.id}
              className="glow-card p-8 relative overflow-hidden"
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: `linear-gradient(90deg, ${project.color}, transparent)`,
                }}
              />
              <div
                className="text-[0.65rem] mb-4 opacity-70"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: project.color,
                }}
              >
                0{idx + 1}
              </div>
              <h3 className="text-[1.2rem] mb-3 text-text">{project.title}</h3>
              <p className="text-[0.9rem] text-muted leading-[1.7] mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-7">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-md text-[0.75rem] bg-surface-2 text-muted border border-border font-['JetBrains Mono']"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-muted no-underline text-[0.85rem] transition-colors duration-200 hover:text-text"
                >
                  <GithubIcon size={15} /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-muted no-underline text-[0.85rem] transition-colors duration-200 hover:text-accent"
                >
                  <ExternalLink size={15} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {others.length > 0 && (
          <>
            <h3 className="text-[1rem] text-muted mb-5 font-['JetBrains Mono']">
              {"// other noteworthy projects"}
            </h3>
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              }}
            >
              {others.map((project) => (
                <div key={project.id} className="glow-card p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-[1rem]">{project.title}</h4>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-text"
                      >
                        <GithubIcon size={16} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-text"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                  <p className="text-[0.85rem] text-muted leading-[1.6] mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[0.7rem] text-accent font-['JetBrains Mono']"
                      >
                        {t}
                      </span>
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
