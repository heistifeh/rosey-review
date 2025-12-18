export function HomeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className="absolute -top-40 left-1/2 h-[520px] w-[880px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.22), transparent 55%), radial-gradient(circle at 70% 40%, rgba(168,85,247,0.14), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundPosition: "0 0, 40px 60px",
          backgroundSize: "120px 120px, 180px 180px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
