export default function SectionLabel({ index, total = "07", title }) {
  return (
    <div className="mb-12 flex items-center justify-between border-y border-white/10 py-3 font-mono text-xs tracking-[0.25em] text-slate-500">
      <span className="text-sky-400">
        FIG. {index} &mdash; {title.toUpperCase()}
      </span>
      <span>
        {index} / {total}
      </span>
    </div>
  );
}
