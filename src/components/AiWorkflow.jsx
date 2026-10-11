import { motion } from "framer-motion";
import { FiCpu, FiTool, FiGitMerge, FiRefreshCw } from "react-icons/fi";
import { aiWorkflow } from "../data";

const icons = [FiCpu, FiTool, FiGitMerge, FiRefreshCw];

export default function AiWorkflow() {
  return (
    <section
      id="ai-workflow"
      className="relative px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-400">
            AI-Augmented Engineering
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            AI agents as a <span className="text-gradient">force multiplier</span>,
            not a shortcut.
          </h2>
          <p className="mt-5 leading-relaxed text-slate-400">{aiWorkflow.intro}</p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {aiWorkflow.points.map((point, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors hover:border-fuchsia-400/40"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-violet-500/30 to-amber-400/20 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="inline-flex rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 p-3 text-xl text-white">
                    <Icon />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-14 max-w-3xl text-center text-lg font-medium italic text-slate-300"
        >
          "{aiWorkflow.closing}"
        </motion.p>
      </div>
    </section>
  );
}
