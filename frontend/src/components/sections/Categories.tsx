import { CATEGORIES } from "@/constants/categories";
import { CategoryCard } from "@/components/ui/CategoryCard";

export function Categories() {
  return (
    <section id="categories" className="px-6 py-20 sm:px-12">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-maroon-dark sm:text-4xl">
          Everything For Your Big Day
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-foreground/70">
          Handpicked vendors across every category, ready to bring your
          vision to life.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-5 sm:grid-cols-3">
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.label} {...category} />
        ))}
      </div>
    </section>
  );
}
