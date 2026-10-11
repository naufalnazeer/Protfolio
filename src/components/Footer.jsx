import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 font-mono text-[11px] tracking-widest text-slate-600 sm:flex-row">
        <p>
          SHEET 07/07 &middot; {profile.name.toUpperCase()}
        </p>

        <div className="flex items-center gap-5 text-base text-slate-500">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-sky-400">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-sky-400">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-sky-400">
            <FiMail />
          </a>
        </div>

        <p>BUILT WITH REACT + VITE</p>
      </div>
    </footer>
  );
}
