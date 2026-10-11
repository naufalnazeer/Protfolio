import { motion } from "framer-motion";
import { techGroups } from "../data";
import SectionLabel from "./SectionLabel";

export default function TechStack() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="03" title="Stack" />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-bold text-white sm:text-4xl"
        >
          Bill of <span className="text-sky-400">materials</span>
        </motion.h2>

        <div className="mt-10 border border-white/10">
          {techGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`grid gap-4 p-6 sm:grid-cols-[180px_1fr] sm:items-center ${
                i !== 0 ? "border-t border-white/10" : ""
              }`}
            >
              <h3 className="font-mono text-xs tracking-widest text-sky-400">
                {String(i + 1).padStart(2, "0")} / {group.category.toUpperCase()}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="border border-white/15 px-3 py-1.5 font-mono text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
