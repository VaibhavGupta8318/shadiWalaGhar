import type { VendorCategory } from "@/types";

export function CategoryCard({ icon, label }: VendorCategory) {
  return (
    <div className="group flex flex-col items-center gap-3 rounded-2xl border border-gold-light/50 bg-white px-4 py-8 shadow-sm transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lg">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-light/30 text-2xl transition-colors group-hover:bg-gold-light/60">
        {icon}
      </span>
      <span className="font-medium text-maroon-dark">{label}</span>
    </div>
  );
}
