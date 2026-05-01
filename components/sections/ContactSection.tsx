"use client";
import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "../SocialIcons";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async () => {
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  const socials = [
    { href: personalInfo.github, icon: <GithubIcon size={18} /> },
    { href: personalInfo.linkedin, icon: <LinkedinIcon size={18} /> },
    { href: personalInfo.twitter, icon: <TwitterXIcon size={18} /> },
  ];

  return (
    <section id="contact" className="py-25 px-6">
      <div className="max-w-250 mx-auto">
        <div className="mb-16 text-center">
          <p className="section-label mb-4 flex justify-center">Contact</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] mb-4">
            Let&apos;s work <span className="gradient-text">together</span>
          </h2>
          <p className="text-muted max-w-125 mx-auto">
            Have a project in mind or just want to say hello? My inbox is always
            open.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10">
          <div className="flex flex-col gap-6">
            {[
              {
                icon: <Mail size={20} />,
                label: "Email",
                value: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
              },
              {
                icon: <MapPin size={20} />,
                label: "Location",
                value: personalInfo.location,
                href: "#",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="glow-card p-6 flex items-center gap-4 no-underline"
              >
                <div className="w-12 h-12 rounded-xl shrink-0 bg-[rgba(108,99,255,0.1)] border border-[rgba(108,99,255,0.2)] flex items-center justify-center text-accent">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[0.75rem] text-muted mb-1">
                    {item.label}
                  </div>
                  <div className="text-text text-[0.9rem]">{item.value}</div>
                </div>
              </a>
            ))}
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center text-muted transition-all duration-200 no-underline hover:text-accent hover:border-[rgba(108,99,255,0.4)]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="glow-card p-8">
            {status === "sent" ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="mb-2">Message Sent!</h3>
                <p className="text-muted">I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {[
                  {
                    name: "name",
                    label: "Your Name",
                    placeholder: "John Doe",
                    type: "text",
                  },
                  {
                    name: "email",
                    label: "Email Address",
                    placeholder: "john@example.com",
                    type: "email",
                  },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-[0.8rem] text-muted mb-2 font-mono">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.name as keyof typeof form]}
                      onChange={(e) =>
                        setForm({ ...form, [field.name]: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-[10px] bg-surface-2 border border-border text-text text-[0.9rem] outline-none transition-colors duration-200 focus:border-accent focus:outline-none"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-[0.8rem] text-muted mb-2 font-mono">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-[10px] bg-surface-2 border border-border text-text text-[0.9rem] outline-none transition-colors duration-200 focus:border-accent focus:outline-none resize-none"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  className="btn-primary w-full flex justify-center"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
