import { Mail, Terminal } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterXIcon,
} from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  const socials = [
    { href: personalInfo.github, icon: <GithubIcon size={18} /> },
    { href: personalInfo.linkedin, icon: <LinkedinIcon size={18} /> },
    { href: personalInfo.twitter, icon: <TwitterXIcon size={18} /> },
    { href: `mailto:${personalInfo.email}`, icon: <Mail size={18} /> },
  ];

  return (
    <footer className="border-t border-border py-12 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-2))] flex items-center justify-center">
                <Terminal size={16} color="white" />
              </div>
              <span className="font-syne font-bold text-text">
                dev<span className="gradient-text">.portfolio</span>
              </span>
            </div>
            <p className="text-muted text-sm max-w-70">
              Building modern web experiences with passion and precision.
            </p>
          </div>
          <div>
            <nav className="flex flex-wrap gap-6">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-muted hover:text-accent transition-colors duration-200 no-underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10.5 h-10.5 rounded-[10px] bg-surface-2 border border-border flex items-center justify-center text-muted transition-all duration-200 no-underline hover:text-accent hover:border-accent"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border flex flex-wrap justify-center gap-3">
          <p className="text-muted text-[0.8rem]">
            © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js
            16 and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
