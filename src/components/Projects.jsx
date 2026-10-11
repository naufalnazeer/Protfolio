import { motion } from "framer-motion";
import { projects } from "../data";
import SectionLabel from "./SectionLabel";
import TickedPanel from "./TickedPanel";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="05" title="Projects" />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-bold text-white sm:text-4xl"
        >
          Products I&apos;ve <span className="text-sky-400">helped ship</span>
        </motion.h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <TickedPanel className="flex h-full flex-col p-6 transition-colors hover:border-sky-400/40">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-2xl font-bold text-slate-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-sky-400">
                    PRJ-{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-1 font-mono text-[11px] tracking-wide text-slate-500">
                  {project.org.toUpperCase()}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/10 px-2 py-1 font-mono text-[10px] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </TickedPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
