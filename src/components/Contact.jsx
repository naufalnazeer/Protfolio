import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiCheckCircle } from "react-icons/fi";
import { profile, freelanceServices } from "../data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-400">
            Let's Work Together
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Open for <span className="text-gradient">freelance & contract</span> work
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <ul className="space-y-4">
              {freelanceServices.map((item) => (
                <li key={item.slice(0, 24)} className="flex gap-3">
                  <FiCheckCircle className="mt-1 shrink-0 text-fuchsia-400" />
                  <span className="text-sm leading-relaxed text-slate-400">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white"
              >
                <FiMail className="text-fuchsia-400" /> {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white"
              >
                <FiPhone className="text-fuchsia-400" /> {profile.phone}
              </a>
              <div className="flex items-center gap-4 pt-2 text-xl text-slate-400">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-white">
                  <FiGithub />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-white">
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-fuchsia-400 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-fuchsia-400 focus:outline-none"
            />
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell me about your project"
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-fuchsia-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition-transform hover:scale-[1.02]"
            >
              Send Message
            </button>
            <p className="text-center text-xs text-slate-500">
              Opens your email client addressed to {profile.email}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
