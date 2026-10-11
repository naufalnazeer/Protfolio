import { motion } from "framer-motion";
import { FiBriefcase, FiStar } from "react-icons/fi";
import { experience, experienceHighlights } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-400">
            Experience
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Where I've <span className="text-gradient">built things</span>
          </h2>
        </motion.div>

        <div className="relative mt-16 space-y-8 before:absolute before:left-[27px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-violet-500 before:via-fuchsia-500 before:to-amber-400 sm:before:left-[27px]">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative flex gap-6 pl-0"
            >
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 text-xl text-white shadow-lg shadow-fuchsia-500/20">
                <FiBriefcase />
              </div>
              <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {job.role}
                  </h3>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-400">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-fuchsia-300">
                  {job.company} · {job.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
        >
          <h3 className="font-display text-lg font-semibold text-white">
            Highlights
          </h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {experienceHighlights.map((item) => (
              <li key={item.slice(0, 24)} className="flex gap-3">
                <FiStar className="mt-1 shrink-0 text-amber-300" />
                <span className="text-sm leading-relaxed text-slate-400">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
