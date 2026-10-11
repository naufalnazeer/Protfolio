import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { profile } from "../data";

export default function GithubStats() {
  const u = profile.githubUsername;

  return (
    <section id="github" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-400">
            GitHub Activity
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Live from <span className="text-gradient">GitHub</span>
          </h2>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
            <FiGithub /> @{u}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 grid gap-6 lg:grid-cols-2"
        >
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=radical&bg_color=00000000&hide_border=true&count_private=true`}
            alt="GitHub stats"
            loading="lazy"
            className="w-full rounded-3xl border border-white/10"
          />
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=radical&bg_color=00000000&hide_border=true`}
            alt="Top languages"
            loading="lazy"
            className="w-full rounded-3xl border border-white/10"
          />
        </motion.div>

        <motion.img
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          src={`https://streak-stats.demolab.com?user=${u}&theme=radical&background=00000000&hide_border=true`}
          alt="GitHub streak stats"
          loading="lazy"
          className="mx-auto mt-6 w-full max-w-3xl rounded-3xl border border-white/10"
        />
      </div>
    </section>
  );
}
