import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { profile } from "../data";
import SectionLabel from "./SectionLabel";

const TITLE_COLOR = "38BDF8";
const TEXT_COLOR = "C7D4E0";
const ICON_COLOR = "38BDF8";
const BORDER_COLOR = "1E2D3F";

export default function GithubStats() {
  const u = profile.githubUsername;
  const statParams = `username=${u}&show_icons=true&bg_color=0A1420&title_color=${TITLE_COLOR}&text_color=${TEXT_COLOR}&icon_color=${ICON_COLOR}&border_color=${BORDER_COLOR}&hide_border=false&count_private=true`;

  return (
    <section id="github" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="06" title="Activity Log" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Live from <span className="text-sky-400">GitHub</span>
          </h2>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 font-mono text-xs tracking-widest text-slate-500 transition-colors hover:text-sky-400"
          >
            <FiGithub /> @{u}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 grid gap-5 lg:grid-cols-2"
        >
          <img
            src={`https://github-readme-stats.vercel.app/api?${statParams}`}
            alt="GitHub stats"
            loading="lazy"
            className="w-full border border-white/10"
          />
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&bg_color=0A1420&title_color=${TITLE_COLOR}&text_color=${TEXT_COLOR}&border_color=${BORDER_COLOR}`}
            alt="Top languages"
            loading="lazy"
            className="w-full border border-white/10"
          />
        </motion.div>

        <motion.img
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          src={`https://streak-stats.demolab.com?user=${u}&background=0A1420&stroke=1E2D3F&ring=38BDF8&fire=38BDF8&currStreakLabel=38BDF8&sideLabels=${TEXT_COLOR}&currStreakNum=FFFFFF&sideNums=FFFFFF&dates=7E92A6`}
          alt="GitHub streak stats"
          loading="lazy"
          className="mx-auto mt-5 w-full max-w-3xl border border-white/10"
        />
      </div>
    </section>
  );
}
