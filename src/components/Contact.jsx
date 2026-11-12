import { useState } from "react";
import emailjs from "@emailjs/browser";
import { profile } from "../data";

const EMAILJS = {
  service: "service_9on1k5r",
  template: "template_u6g7kqw",
  publicKey: "WGAYBiKP9h1P3dIsC",
};

const empty = { name: "", email: "", message: "" };
const inputClass =
  "mt-2 w-full rounded-[10px] border border-line bg-white px-4 py-3 text-[16px] text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-mint";

const Contact = () => {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS.service,
        EMAILJS.template,
        {
          from_name: form.name,
          to_name: profile.name,
          from_email: form.email,
          to_email: profile.email,
          message: form.message,
        },
        EMAILJS.publicKey
      );
      setForm(empty);
      setStatus("sent");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    profile.linkedin ? { label: "LinkedIn", value: "View profile", href: profile.linkedin } : null,
    { label: "GitHub", value: "sherifftaha", href: profile.github },
  ].filter(Boolean);

  return (
    <section id="contact" className="section border-t border-line bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Tell me what isn't working.</h2>
          <p className="mt-4 max-w-[460px] text-[16px] leading-[1.75] sm:text-[18px]">
            Hiring for an Odoo role, or need a system that fits your business? Send a short note and I'll reply
            with next steps.
          </p>

          <dl className="mt-8 divide-y divide-line border-y border-line">
            {links.map((link) => (
              <div key={link.label} className="grid grid-cols-[96px_1fr] py-4 text-[16px]">
                <dt className="text-muted">{link.label}</dt>
                <dd>
                  <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="break-all font-medium text-ink underline decoration-mint decoration-2 underline-offset-4 hover:decoration-brand">
                    {link.value}
                  </a>
                </dd>
              </div>
            ))}
            <div className="grid grid-cols-[96px_1fr] py-4 text-[16px]">
              <dt className="text-muted">Location</dt>
              <dd className="font-medium text-ink">{profile.location}</dd>
            </div>
          </dl>

          {profile.cv ? (
            <a href={profile.cv} download className="btn-secondary mt-6">Download CV</a>
          ) : null}
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-paper p-5 sm:p-8">
          <label className="block text-[15px] font-medium text-ink">
            Your name
            <input type="text" name="name" required autoComplete="name" value={form.name} onChange={handleChange} className={inputClass} />
          </label>
          <label className="mt-5 block text-[15px] font-medium text-ink">
            Your email
            <input type="email" name="email" required autoComplete="email" value={form.email} onChange={handleChange} className={inputClass} />
          </label>
          <label className="mt-5 block text-[15px] font-medium text-ink">
            Message
            <textarea name="message" required rows="6" value={form.message} onChange={handleChange} placeholder="What are you trying to fix or build?" className={inputClass} />
          </label>

          <button type="submit" disabled={status === "sending"} className="btn-primary mt-6 w-full disabled:opacity-60 sm:w-auto">
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          <p role="status" aria-live="polite" className="mt-4 min-h-[24px] text-[15px]">
            {status === "sent" ? <span className="text-brand">Thanks, your message is on its way. I'll get back to you soon.</span> : null}
            {status === "error" ? (
              <span className="text-[#a33a2a]">The message didn't send. Please try again, or email me directly.</span>
            ) : null}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
