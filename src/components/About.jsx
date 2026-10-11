import { motion } from "framer-motion";
import { aboutParagraphs, qatarExperience } from "../data";
import SectionLabel from "./SectionLabel";
import TickedPanel from "./TickedPanel";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="01" title="About" />

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-bold text-white sm:text-4xl"
        >
          Enterprise-grade apps, <span className="text-sky-400">shipped on-site in Qatar.</span>
        </motion.h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {aboutParagraphs.map((p) => (
              <p key={p.slice(0, 24)} className="leading-relaxed text-slate-400">
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TickedPanel className="p-8">
              <h3 className="font-mono text-xs tracking-widest text-sky-400">
                ON-SITE CLIENT EXPERIENCE — QATAR
              </h3>
              <ul className="mt-6 space-y-5">
                {qatarExperience.map((item, i) => (
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
      </div>
    </section>
  );
}
