import { Layers } from "lucide-react";

import Image from "next/image";

const categoryColors: Record<string, string> = {
  Frontend: "#6c63ff",
  Backend: "#ff6584",
  Tools: "#43e8b0",
  Other: "#f59e0b",
};

type SkillItem = {
  name: string;
  icon?: string;
};

type SkillGroup = {
  category: string;
  items: SkillItem[];
};

export default function SkillsSection({ skills }: { skills: SkillGroup[] }) {
  return (
    <section
      id="skills"
      className="py-25 px-6 bg-surface border-t border-b border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="section-label mb-4">Skills & Expertise</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">
            Frontend & Web Development <span className="gradient-text">Code Stack</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {skills.map((group) => (
            <div key={group.category} className="glow-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center"
                  style={{
                    background: `${categoryColors[group.category]}20`,
                    border: `1px solid ${categoryColors[group.category]}40`,
                  }}
                >
                  <Layers size={18} color={categoryColors[group.category]} />
                </div>
                <h3 className="text-[1rem] text-text">{group.category}</h3>
              </div>
              <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="px-1 py-1.5 rounded-sm text-[0.8rem] font-['JetBrains Mono'] flex  gap-1 border border-border items-center"
                    style={{
                      background: `${categoryColors[group.category]}10`,
                      border: `1px solid ${categoryColors[group.category]}30`,
                      color: categoryColors[group.category],
                    }}
                  >
                    {skill.icon && (
                      <div className=" flex items-center justify-center relative overflow-hidden">
                        {skill.icon && (
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={40}
                            height={40}
                            className=" object-contain"
                          />
                        )}
                      </div>
                    )}
                    <div className="flex-1">
                      <p>{skill.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech marquee */}
        <div className="mt-16 overflow-hidden relative">
          <div className="flex gap-8 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "MongoDB",
              "PostgreSQL",
              "Docker",
              "AWS",
              "Tailwind CSS",
              "GraphQL",
              "Redis",
              "Prisma",
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "MongoDB",
              "PostgreSQL",
              "Docker",
              "AWS",
              "Tailwind CSS",
              "GraphQL",
              "Redis",
              "Prisma",
            ].map((tech, i) => (
              <span
                key={i}
                className="px-5 py-2 rounded-full bg-surface-2 border border-border text-muted text-[0.85rem] shrink-0 font-['JetBrains Mono']"
              >
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
