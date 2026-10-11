import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { profile } from "../data";

const links = [
  { href: "#home", label: "Home", num: "00" },
  { href: "#about", label: "About", num: "01" },
  { href: "#ai-workflow", label: "AI Workflow", num: "02" },
  { href: "#skills", label: "Stack", num: "03" },
  { href: "#experience", label: "Experience", num: "04" },
  { href: "#projects", label: "Projects", num: "05" },
  { href: "#contact", label: "Contact", num: "07" },
];

const HEADER_OFFSET = 88;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled ? "border-white/10 bg-[#0A1420]/90 backdrop-blur-sm" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-mono text-sm font-semibold tracking-widest text-white"
        >
          NAUFAL<span className="text-sky-400">.PORTFOLIO</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center gap-1.5 px-3 py-2 font-mono text-xs tracking-wider text-slate-400 transition-colors hover:text-sky-400"
              >
                <span className="text-slate-600">{link.num}</span>
                {link.label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          download
          className="hidden border border-sky-400/50 px-4 py-2 font-mono text-xs tracking-widest text-sky-400 transition-colors hover:bg-sky-400/10 md:inline-block"
        >
          RESUME ↓
        </a>

        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-x-0 top-full border-t border-white/10 bg-[#0A1420]/98 backdrop-blur-sm md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center gap-3 border-b border-white/5 py-3 font-mono text-sm tracking-wider text-slate-200"
                  >
                    <span className="text-sky-400">{link.num}</span>
                    {link.label.toUpperCase()}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumeUrl}
                  download
                  className="mt-3 block border border-sky-400/50 px-4 py-2.5 text-center font-mono text-xs tracking-widest text-sky-400"
                >
                  DOWNLOAD RESUME ↓
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
