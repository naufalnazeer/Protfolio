import { motion } from "framer-motion";
import { projects } from "../data";

const gradients = [
  "from-violet-500 via-fuchsia-500 to-amber-400",
  "from-cyan-400 via-violet-500 to-fuchsia-500",
  "from-amber-400 via-rose-500 to-violet-500",
  "from-fuchsia-500 via-violet-500 to-cyan-400",
  "from-rose-500 via-amber-400 to-fuchsia-500",
  "from-violet-500 via-cyan-400 to-amber-400",
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-400">
            Featured Projects
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Products I've <span className="text-gradient">helped ship</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-transform hover:-translate-y-1"
            >
              <div
                className={`relative flex h-32 items-center justify-center bg-gradient-to-br ${gradients[i % gradients.length]}`}
              >
                <span className="font-display text-3xl font-bold text-white/90">
                  {project.title
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-fuchsia-300">
                  {project.org}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
