import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-display text-sm text-slate-400">
          <span className="text-white">{profile.name}</span> — Software Engineer, Mobile &amp; Web
        </p>

        <div className="flex items-center gap-5 text-lg text-slate-400">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-white">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-white">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-white">
            <FiMail />
          </a>
        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} {profile.name}. Built with React, Vite &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
