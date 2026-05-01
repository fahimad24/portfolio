"use client";
import Image from "next/image";
import { Download, ArrowRight, MapPin } from "lucide-react";

import { personalInfo } from "@/data/portfolio";
import { useEffect, useState } from "react";
import {
  GithubIcon,
  LinkedinIcon,
  ReactIcon,
  TwitterXIcon,
} from "../SocialIcons";

const roles = ["Frontend Developer", "React Specialist", "Next.js Expert"];

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const current = roles[roleIdx];
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          80,
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        timeout = setTimeout(() => {
          setRoleIdx((i) => (i + 1) % roles.length);
          setTyping(true);
        }, 50);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  const socials = [
    {
      href: personalInfo.github,
      icon: <GithubIcon size={18} />,
      label: "GitHub",
    },
    {
      href: personalInfo.linkedin,
      icon: <LinkedinIcon size={18} />,
      label: "LinkedIn",
    },
    {
      href: personalInfo.twitter,
      icon: <TwitterXIcon size={18} />,
      label: "Twitter",
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden top-16"
    >
      <div className="absolute xl:top-[10%] xl:right-[5%] lg:top-[20%] lg:right-[2%] md:top-[4%] md:right-[29%] xl:w-150 xl:h-150 lg:w-100 lg:h-100 md:w-80 md:h-80 rounded-full pointer-events-none backdrop-blur-2xl hero-accent" />
      <div className="absolute bottom-[10%] left-[5%] xl:w-100 xl:h-100 lg:w-60 lg:h-60 md:w-30 md:h-30 rounded-full hero-accent-2 pointer-events-none sm:hidden " />

      <div className=" max-w-6xl xl:px-0 md:px-10 px-5  mx-auto w-full flex flex-wrap lg:flex-row flex-col-reverse items-center justify-between gap-14  max-lg:top-16 relative">
        {/* Left */}
        <div className="flex-1 lg:min-w-75 lg:max-w-145">
          <div className="flex items-center gap-3 mb-7">
            <div className="flex items-center gap-2 bg-[rgba(108,99,255,0.1)] border border-[rgba(108,99,255,0.2)] rounded-full px-4 py-1.5">
              <div className="w-2 h-2 rounded-full bg-accent-3" />
              <span className="font-['JetBrains Mono'] text-[0.75rem] text-accent-3">
                Available for work
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[0.8rem] text-muted">
              <MapPin size={13} />
              {personalInfo.location}
            </div>
          </div>

          <h1 className="mb-6 leading-[1.05] text-[clamp(2.5rem,6vw,4.5rem)]">
            Hi, I&apos;m{" "}
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div className="text-[clamp(1.1rem,2.5vw,1.5rem)] text-muted mb-6 min-h-[2em] font-syne font-semibold">
            <span className="gradient-text-2">{displayed}</span>
            <span style={{ color: "var(--accent)" }}>|</span>
          </div>

          <p className="text-[1.05rem] text-muted leading-[1.8] mb-10 max-w-120">
            {personalInfo.bio}
          </p>

          <div className="flex gap-4 flex-wrap mb-12">
            <a href="#projects" className="btn-primary">
              <ArrowRight size={16} /> View Projects
            </a>
            <a href={personalInfo.resumeUrl} download className="btn-outline">
              <Download size={16} /> Download CV
            </a>
          </div>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center text-muted transition-all duration-200 no-underline hover:text-accent hover:border-[rgba(108,99,255,0.4)] hover:shadow-[0_0_20px_rgba(108,99,255,0.2)]"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right - Photo */}
        <div className="relative flex justify-center shrink-0">
          <div className="absolute -inset-6 rounded-full border border-glow animate-[float_4s_ease-in-out_infinite]" />
          <div className="absolute -inset-12 rounded-full border-dashed border border-[rgba(108,99,255,0.08)] animate-[float_6s_ease-in-out_infinite_reverse]" />
          <div className="w-70 h-70 rounded-full p-1 bg-[linear-gradient(135deg,var(--color-accent),var(-- color-accent-2),var(--color-accent-3))] shadow-[0_0_60px_rgba(108,99,255,0.3)] animate-[float_4s_ease-in-out_infinite]">
            <div className="w-full h-full rounded-full overflow-hidden bg-surface">
              <Image
                src="/profile.jpg"
                alt={personalInfo.name}
                width={280}
                height={280}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                priority
              />
            </div>
          </div>
          <div className="absolute top-5 -right-5 bg-surface border border-border rounded-xl px-4 py-2.5 backdrop-blur-[10px] animate-[float_3s_ease-in-out_infinite]">
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                color: "var(--color-muted)",
              }}
            >
              ⚡ Next.js 16
            </div>
          </div>
          <div className="absolute bottom-7.5 -left-7.5 bg-surface border border-border rounded-xl px-4 py-2.5 backdrop-blur-[10px] animate-[float_5s_ease-in-out_infinite]">
            <div
              className="flex gap-1 justify-center items-center"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                color: "var(--color-muted)",
              }}
            >
              <ReactIcon size={28} /> React 19
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-['JetBrains Mono'] text-[0.65rem] tracking-widest text-muted">
          SCROLL
        </span>
        <div className="w-px h-10 bg-[linear-gradient(to_bottom,var(--color-muted),transparent)]" />
      </div>
    </section>
  );
}
