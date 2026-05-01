"use client";
import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/SocialIcons";

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
    <section id="contact" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ marginBottom: "64px", textAlign: "center" }}>
          <p className="section-label" style={{ marginBottom: "16px", justifyContent: "center" }}>Contact</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "16px" }}>Let&apos;s work <span className="gradient-text">together</span></h2>
          <p style={{ color: "var(--muted)", maxWidth: "500px", margin: "0 auto" }}>Have a project in mind or just want to say hello? My inbox is always open.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              { icon: <Mail size={20} />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: <MapPin size={20} />, label: "Location", value: personalInfo.location, href: "#" },
            ].map((item, i) => (
              <a key={i} href={item.href} className="glow-card" style={{ padding: "24px", display: "flex", alignItems: "center", gap: "16px", textDecoration: "none" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", flexShrink: 0, background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--muted)", marginBottom: "4px" }}>{item.label}</div>
                  <div style={{ color: "var(--text)", fontSize: "0.9rem" }}>{item.value}</div>
                </div>
              </a>
            ))}
            <div style={{ display: "flex", gap: "12px" }}>
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ width: "44px", height: "44px", borderRadius: "12px", background: "var(--surface)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)", transition: "all 0.2s", textDecoration: "none" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(108,99,255,0.4)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--muted)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          <div className="glow-card" style={{ padding: "32px" }}>
            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🎉</div>
                <h3 style={{ marginBottom: "8px" }}>Message Sent!</h3>
                <p style={{ color: "var(--muted)" }}>I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { name: "name", label: "Your Name", placeholder: "John Doe", type: "text" },
                  { name: "email", label: "Email Address", placeholder: "john@example.com", type: "email" },
                ].map((field) => (
                  <div key={field.name}>
                    <label style={{ display: "block", fontSize: "0.8rem", color: "var(--muted)", marginBottom: "8px", fontFamily: "'JetBrains Mono', monospace" }}>{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.name as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--text)", fontSize: "0.9rem", outline: "none", transition: "border-color 0.2s", fontFamily: "'DM Sans', sans-serif" }}
                      onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = "var(--accent)"}
                      onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = "var(--border)"}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "var(--muted)", marginBottom: "8px", fontFamily: "'JetBrains Mono', monospace" }}>Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--text)", fontSize: "0.9rem", outline: "none", resize: "vertical", fontFamily: "'DM Sans', sans-serif", transition: "border-color 0.2s" }}
                    onFocus={(e) => (e.target as HTMLTextAreaElement).style.borderColor = "var(--accent)"}
                    onBlur={(e) => (e.target as HTMLTextAreaElement).style.borderColor = "var(--border)"}
                  />
                </div>
                <button onClick={handleSubmit} disabled={status === "sending"} className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  {status === "sending" ? "Sending..." : <><Send size={16} /> Send Message</>}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
