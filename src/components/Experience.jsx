import { motion } from "framer-motion";
import { experience, experienceHighlights } from "../data";
import SectionLabel from "./SectionLabel";
import TickedPanel from "./TickedPanel";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="04" title="Experience" />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-bold text-white sm:text-4xl"
        >
          Revision <span className="text-sky-400">history</span>
        </motion.h2>

        <div className="mt-10 border border-white/10">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`grid gap-2 p-6 sm:grid-cols-[160px_1fr] sm:gap-6 ${
                i !== 0 ? "border-t border-white/10" : ""
              }`}
            >
              <span className="font-mono text-xs tracking-widest text-sky-400">
                {job.period.toUpperCase()}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">{job.role}</h3>
                <p className="mt-1 font-mono text-xs tracking-wide text-slate-500">
                  {job.company.toUpperCase()} &middot; {job.location.toUpperCase()}
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
          className="mt-10"
        >
          <TickedPanel className="p-8">
            <h3 className="font-mono text-xs tracking-widest text-sky-400">HIGHLIGHTS</h3>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2">
              {experienceHighlights.map((item, i) => (
                <li key={item.slice(0, 24)} className="flex gap-4">
                  <span className="font-mono text-xs text-slate-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-slate-400">{item}</span>
                </li>
              ))}
            </ul>
          </TickedPanel>
        </motion.div>
      </div>
    </section>
  );
}
