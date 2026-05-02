import { experiences, education } from "@/data/portfolio";
import { BookOpen, Briefcase } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-25 px-6 bg-surface border-t border-b border-border"
    >
      <div className="max-w-300 mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:justify-between gap-12">
          <div>
            <p className="section-label mb-4">Experience</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)]">
              Where I&apos;ve <span className="gradient-text">worked</span>
            </h2>
          </div>
          <div>
            <p className="section-label mb-4">Education</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)]">
              Educaltional <span className="gradient-text">Qualification</span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="relative flex-1">
            {/* Timeline line */}
            <div
              className="absolute left-4.75 top-3 bottom-3 w-0.5"
              style={{
                background:
                  "linear-gradient(to bottom, var(--color-accent), transparent)",
              }}
            />

            <div className="flex flex-col" style={{ gap: "40px" }}>
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="flex"
                  style={{ gap: "32px", paddingLeft: "0" }}
                >
                  {/* Dot */}
                  <div
                    className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center"
                    style={{
                      background:
                        i === 0
                          ? "var(--color-accent)"
                          : "var(--color-surface-2)",
                      border: `2px solid ${i === 0 ? "var(--color-accent)" : "var(--color-border)"}`,
                      boxShadow:
                        i === 0 ? "0 0 20px rgba(108,99,255,0.5)" : "none",
                    }}
                  >
                    <Briefcase
                      size={16}
                      className="relative z-10"
                      color={i === 0 ? "white" : "var(--color-muted)"}
                    />
                  </div>

                  {/* Content */}
                  <div className="glow-card flex-1 p-7">
                    <div className="flex flex-wrap justify-between gap-2 mb-2">
                      <h3 className="text-[1.1rem]">{exp.role}</h3>
                      <span
                        className="text-[0.75rem] font-['JetBrains Mono'] text-accent px-3 py-1 rounded-full"
                        style={{
                          background: "rgba(108,99,255,0.1)",
                          border: "1px solid rgba(108,99,255,0.2)",
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[0.9rem] text-accent-3 mb-3 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-[0.9rem] text-muted leading-[1.7]">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex-1">
            {/* Timeline line */}
            <div
              className="absolute left-4.75 top-3 bottom-3 w-0.5"
              style={{
                background:
                  "linear-gradient(to bottom, var(--color-accent), transparent)",
              }}
            />

            <div className="flex flex-col" style={{ gap: "40px" }}>
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="flex"
                  style={{ gap: "32px", paddingLeft: "0" }}
                >
                  {/* Dot */}
                  <div
                    className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center"
                    style={{
                      background:
                        i === 0
                          ? "var(--color-accent)"
                          : "var(--color-surface-2)",
                      border: `2px solid ${i === 0 ? "var(--color-accent)" : "var(--color-border)"}`,
                      boxShadow:
                        i === 0 ? "0 0 20px rgba(108,99,255,0.5)" : "none",
                    }}
                  >
                    <BookOpen
                      size={16}
                      className="relative z-10"
                      color={i === 0 ? "white" : "var(--color-muted)"}
                    />
                  </div>

                  {/* Content */}
                  <div className="glow-card flex-1 p-7">
                    <div className="flex flex-wrap justify-between gap-2 mb-2">
                      <h3 className="text-[1.1rem]">{edu.degree}</h3>
                      <span
                        className="text-[0.75rem] font-['JetBrains Mono'] text-accent px-3 py-1 rounded-full"
                        style={{
                          background: "rgba(108,99,255,0.1)",
                          border: "1px solid rgba(108,99,255,0.2)",
                        }}
                      >
                        {edu.period}
                      </span>
                    </div>
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                      <p className="text-[0.9rem] text-accent-3 mb-3 font-medium">
                        {edu.institution}
                      </p>
                      <span
                        className="text-[0.8rem] font-['JetBrains Mono'] text-accent px-3 py-0.5 rounded-full block"
                        style={{
                          background: "rgba(108,99,255,0.1)",
                          border: "1px solid rgba(108,99,255,0.2)",
                        }}
                      >
                        {edu.graide}
                      </span>
                    </div>

                    <p className="text-[0.9rem] text-muted leading-[1.7]">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
