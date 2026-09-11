import { Button } from "@/components/ui/Button";
import { MandalaDivider } from "@/components/ui/MandalaDivider";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden px-6 py-24 text-center text-cream sm:py-32"
      style={{
        backgroundImage:
          "radial-gradient(circle at 15% 20%, rgba(201,154,58,0.18) 0, transparent 35%), radial-gradient(circle at 85% 75%, rgba(201,154,58,0.15) 0, transparent 40%), linear-gradient(to bottom, var(--maroon), var(--maroon), var(--maroon-dark))",
      }}
    >
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold-light">
        Har Shaadi, Khaas Shaadi
      </p>
      <h1 className="mx-auto max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight sm:text-6xl">
        Where Forever <span className="text-gold-light">Begins</span>
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-base text-cream/85 sm:text-lg">
        Find and book venues, photographers, decorators and more — everything
        you need to plan the wedding of your dreams, in one place.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button variant="solid" className="w-full sm:w-auto">
          Explore Vendors
        </Button>
        <Button variant="outline" className="w-full sm:w-auto">
          Plan My Wedding
        </Button>
      </div>
      <MandalaDivider />
    </section>
  );
}
