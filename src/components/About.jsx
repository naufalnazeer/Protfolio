import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { aboutParagraphs, qatarExperience } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-400">
            About Me
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Enterprise-grade apps,{" "}
            <span className="text-gradient">shipped on-site in Qatar.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
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
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          >
            <h3 className="font-display text-xl font-semibold text-white">
              On-site Client Experience (Qatar)
            </h3>
            <ul className="mt-6 space-y-4">
              {qatarExperience.map((item) => (
                <li key={item.slice(0, 24)} className="flex gap-3">
                  <FiCheckCircle className="mt-1 shrink-0 text-fuchsia-400" />
                  <span className="text-sm leading-relaxed text-slate-400">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
