export function MandalaDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2 text-gold">
      <span className="h-px w-16 bg-gold-light/60" />
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="shrink-0">
        <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1" />
        <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="1" />
        <circle cx="14" cy="14" r="1.5" fill="currentColor" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * Math.PI) / 4;
          const x = 14 + 12 * Math.cos(angle);
          const y = 14 + 12 * Math.sin(angle);
          return <circle key={i} cx={x} cy={y} r="1" fill="currentColor" />;
        })}
      </svg>
      <span className="h-px w-16 bg-gold-light/60" />
    </div>
  );
}
