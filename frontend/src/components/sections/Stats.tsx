import { STATS } from "@/constants/stats";

export function Stats() {
  return (
    <section id="stats" className="bg-gold-light/25 px-6 py-16 sm:px-12">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 text-center sm:grid-cols-3">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="font-[family-name:var(--font-heading)] text-4xl font-bold text-maroon">
              {stat.value}
            </div>
            <div className="mt-2 text-sm uppercase tracking-wide text-maroon-dark/70">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
