import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { profile, typedRoles, heroStats } from "../data";
import { useTypewriter } from "../hooks/useTypewriter";

export default function Hero() {
  const typed = useTypewriter(typedRoles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-6 pt-28 pb-16"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-fuchsia-300">
            {profile.role}
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient animate-gradient-x">{profile.name}</span>
          </h1>

          <h2 className="mt-4 font-display text-2xl font-medium text-slate-300 sm:text-3xl">
            Building <span className="text-white">{typed}</span>
            <span className="animate-pulse text-fuchsia-400">|</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400">
            5+ years shipping cross-platform mobile and web apps for
            enterprise and government-sector clients — React, React Native,
            TypeScript and Firebase, end to end from UI to API integration to
            release.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
              >
                <p className="text-[11px] uppercase tracking-wide text-slate-400">
                  {stat.label}
                </p>
                <p className="text-sm font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition-transform hover:scale-105"
            >
              Let's Talk
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Download Resume
            </a>

            <div className="flex items-center gap-4 pl-2 text-xl text-slate-400">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-white"
              >
                <FiGithub />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-white"
              >
                <FiLinkedin />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="transition-colors hover:text-white"
              >
                <FiMail />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto aspect-square w-64 sm:w-80"
        >
          <div className="absolute inset-0 animate-gradient-x rounded-[2.5rem] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 opacity-80 blur-sm" />
          <div className="absolute inset-[6px] overflow-hidden rounded-[2.2rem] bg-[#07050f]">
            <img
              src="/assets/naufal.jpg"
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-2xl text-slate-500 transition-colors hover:text-white sm:block animate-bounce"
      >
        <FiArrowDown />
      </a>
    </section>
  );
}
