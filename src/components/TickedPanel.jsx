function Tick({ className }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-3 w-3 border-sky-400/70 ${className}`}
    />
  );
}

export default function TickedPanel({ as: Tag = "div", className = "", children, ...rest }) {
  return (
    <Tag className={`relative border border-white/10 bg-[#0C1826] ${className}`} {...rest}>
      <Tick className="-top-px -left-px border-t-2 border-l-2" />
      <Tick className="-top-px -right-px border-t-2 border-r-2" />
      <Tick className="-bottom-px -left-px border-b-2 border-l-2" />
      <Tick className="-bottom-px -right-px border-b-2 border-r-2" />
      {children}
    </Tag>
  );
}
