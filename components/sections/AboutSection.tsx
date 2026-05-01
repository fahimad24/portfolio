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
    <section id="about" className="py-25 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="section-label mb-4">About Me</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">
            Passionate about crafting{" "}
            <span className="gradient-text">digital experiences</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-15 items-center">
          {/* Photo side */}
          <div className="flex-1 min-w-70 max-w-100">
            <div className="relative">
              <div className="w-full aspect-4/5 rounded-[20px] overflow-hidden border border-border shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
                <Image
                  src="/profile.jpg"
                  alt="About photo"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent corner */}
              <div className="absolute -bottom-5 -right-5 w-30 h-30 rounded-[20px] opacity-[0.15] -z-10 bg-linear-135 from-accent to-accent-2" />
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl border-2 border-[rgba(108,99,255,0.3)] -z-10" />
            </div>
          </div>

          {/* Text side */}
          <div className="flex-[1.5] min-w-75">
            <p className="text-[1.05rem] text-muted leading-[1.9] mb-8">
              {personalInfo.bio}
            </p>
            <p className="text-[1.05rem] text-muted leading-[1.9] mb-10">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open source, or sharing knowledge
              through my blog. I believe in writing clean, maintainable code
              that makes a real difference.
            </p>

            {/* Fun facts */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {funFacts.map((fact, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface border border-border"
                >
                  <span className="text-accent shrink-0">{fact.icon}</span>
                  <span className="text-muted text-[0.85rem]">{fact.text}</span>
                </div>
              ))}
            </div>

            <a href={personalInfo.resumeUrl} download className="btn-primary">
              Download Resume ↓
            </a>
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid gap-6 mt-20"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          }}
        >
          {stats.map((s, i) => (
            <div key={i} className="glow-card text-center py-8 px-6">
              <div className="gradient-text text-[2.5rem] font-syne font-extrabold">
                {s.value}
              </div>
              <div className="text-muted text-[0.85rem] mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
