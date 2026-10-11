const CORNER_SIZE = 18;

function Crosshair({ className }) {
  return (
    <svg
      aria-hidden="true"
      width={CORNER_SIZE}
      height={CORNER_SIZE}
      viewBox="0 0 18 18"
      className={`fixed z-40 text-sky-400/50 ${className}`}
    >
      <line x1="9" y1="0" x2="9" y2="18" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="9" x2="18" y2="9" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export default function Background() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[#0A1420]"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(56,189,248,0.05) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(56,189,248,0.05) 1px, transparent 1px)",
            "linear-gradient(rgba(56,189,248,0.1) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(56,189,248,0.1) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "20px 20px, 20px 20px, 100px 100px, 100px 100px",
        }}
      />
      <Crosshair className="left-4 top-4" />
      <Crosshair className="right-4 top-4" />
      <Crosshair className="bottom-4 left-4" />
      <Crosshair className="bottom-4 right-4" />
    </>
  );
}
