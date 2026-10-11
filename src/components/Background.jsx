export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#07050f]"
    >
      <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-violet-600/30 blur-[120px] animate-blob" />
      <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-fuchsia-600/25 blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/4 h-[30rem] w-[30rem] rounded-full bg-amber-500/20 blur-[130px] animate-blob animation-delay-4000" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[size:28px_28px]" />
    </div>
  );
}
