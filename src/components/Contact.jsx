import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";
import { profile, freelanceServices } from "../data";
import SectionLabel from "./SectionLabel";

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
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="07" title="Contact" />

        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl font-bold text-white sm:text-4xl"
          >
            Open for <span className="text-sky-400">freelance &amp; contract</span> work
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute -right-2 top-0 hidden h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-sky-400/70 text-center font-mono text-[9px] font-semibold uppercase leading-tight tracking-wider text-sky-400 sm:flex"
          >
            Available
            <br />
            for hire
          </motion.div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <ul className="space-y-5">
              {freelanceServices.map((item, i) => (
                <li key={item.slice(0, 24)} className="flex gap-4">
                  <span className="font-mono text-xs text-slate-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-slate-400">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-3 border-t border-white/10 pt-6 font-mono text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-slate-300 transition-colors hover:text-sky-400"
              >
                <FiMail className="text-sky-400" /> {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-slate-300 transition-colors hover:text-sky-400"
              >
                <FiPhone className="text-sky-400" /> {profile.phone}
              </a>
              <div className="flex items-center gap-4 pt-2 text-xl text-slate-500">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-sky-400">
                  <FiGithub />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-sky-400">
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
            className="space-y-4 border border-white/10 p-8"
          >
            <div>
              <label className="font-mono text-[10px] tracking-widest text-slate-500">NAME</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white focus:border-sky-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-widest text-slate-500">EMAIL</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white focus:border-sky-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-widest text-slate-500">MESSAGE</label>
              <textarea
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="mt-1 w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white focus:border-sky-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full border border-sky-400 bg-sky-400 px-6 py-3 font-mono text-xs tracking-widest text-[#0A1420] transition-colors hover:bg-transparent hover:text-sky-400"
            >
              SEND MESSAGE
            </button>
            <p className="text-center font-mono text-[10px] tracking-widest text-slate-600">
              OPENS YOUR EMAIL CLIENT
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
