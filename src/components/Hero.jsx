import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { profile, typedRoles, heroStats } from "../data";
import { useTypewriter } from "../hooks/useTypewriter";

const annotations = [
  { label: "REACT NATIVE", className: "-right-2 top-6 translate-x-full" },
  { label: "TYPESCRIPT", className: "-right-2 top-1/2 translate-x-full" },
  { label: "FIREBASE", className: "-left-2 bottom-10 -translate-x-full" },
];

export default function Hero() {
  const typed = useTypewriter(typedRoles);

  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 pt-28 pb-16">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-sky-400">
            <span className="border border-sky-400/40 px-2 py-1">DOC: NN-2026</span>
            <span className="text-slate-500">{profile.role.toUpperCase()}</span>
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <h2 className="mt-5 flex items-center gap-2 font-mono text-lg text-slate-300 sm:text-xl">
            <span className="text-sky-400">&gt;</span> building {typed}
            <span className="inline-block h-5 w-[2px] animate-pulse bg-sky-400" />
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400">
            5+ years shipping cross-platform mobile and web apps for
            enterprise and government-sector clients — React, React Native,
            TypeScript and Firebase, end to end from UI to API integration to
            release.
          </p>

          <div className="mt-8 flex flex-wrap border border-white/10 font-mono text-xs">
            {heroStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-4 py-3 ${i !== 0 ? "border-l border-white/10" : ""}`}
              >
                <p className="tracking-widest text-slate-500">{stat.label.toUpperCase()}</p>
                <p className="mt-1 text-sm text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-sky-400 bg-sky-400 px-7 py-3 font-mono text-xs tracking-widest text-[#0A1420] transition-colors hover:bg-transparent hover:text-sky-400"
            >
              LET&apos;S TALK
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="border border-white/20 px-7 py-3 font-mono text-xs tracking-widest text-white transition-colors hover:border-sky-400 hover:text-sky-400"
            >
              DOWNLOAD RESUME
            </a>

            <div className="flex items-center gap-4 pl-2 text-xl text-slate-500">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-sky-400"
              >
                <FiGithub />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-sky-400"
              >
                <FiLinkedin />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="transition-colors hover:text-sky-400"
              >
                <FiMail />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto hidden w-64 sm:block sm:w-72"
        >
          <div className="relative aspect-square border border-white/15">
            <span className="absolute -top-px -left-px h-3 w-3 border-t-2 border-l-2 border-sky-400" />
            <span className="absolute -top-px -right-px h-3 w-3 border-t-2 border-r-2 border-sky-400" />
            <span className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-sky-400" />
            <span className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-sky-400" />
            <img
              src="/assets/naufal.jpg"
              alt={profile.name}
              className="h-full w-full object-cover grayscale-[20%]"
            />

            {annotations.map((a) => (
              <div
                key={a.label}
                className={`absolute hidden items-center gap-2 lg:flex ${a.className}`}
              >
                <span className="h-px w-6 bg-sky-400/60" />
                <span className="whitespace-nowrap font-mono text-[10px] tracking-widest text-sky-300">
                  {a.label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center font-mono text-[10px] tracking-widest text-slate-600">
            FIG. 00 — PORTRAIT
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-6 hidden font-mono text-[10px] tracking-widest text-slate-600 sm:block">
        DOHA, QA &middot; 25.2854&deg; N, 51.5310&deg; E
      </div>
      <div className="absolute bottom-8 right-6 hidden font-mono text-[10px] tracking-widest text-slate-600 sm:block">
        REV. 2026.10
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-xl text-slate-600 transition-colors hover:text-sky-400 sm:block"
      >
        <FiArrowDown />
      </a>
    </section>
  );
}
