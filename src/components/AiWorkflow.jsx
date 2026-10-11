import { motion } from "framer-motion";
import { FiCpu, FiTool, FiGitMerge, FiRefreshCw } from "react-icons/fi";
import { aiWorkflow } from "../data";
import SectionLabel from "./SectionLabel";
import TickedPanel from "./TickedPanel";

const icons = [FiCpu, FiTool, FiGitMerge, FiRefreshCw];

export default function AiWorkflow() {
  return (
    <section id="ai-workflow" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="02" title="AI-Augmented Engineering" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            AI agents as a <span className="text-sky-400">force multiplier</span>, not a
            shortcut.
          </h2>
          <p className="mt-5 leading-relaxed text-slate-400">{aiWorkflow.intro}</p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {aiWorkflow.points.map((point, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <TickedPanel className="h-full p-7 transition-colors hover:border-sky-400/40">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-sky-400/40 text-base text-sky-400">
                      <Icon />
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-slate-600">
                      MODULE {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {point.description}
                  </p>
                </TickedPanel>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-12 max-w-3xl border-l-2 border-sky-400 pl-5"
        >
          <p className="font-mono text-sm italic leading-relaxed text-slate-300">
            &ldquo;{aiWorkflow.closing}&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
