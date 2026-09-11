import { Button } from "@/components/ui/Button";

export function CallToAction() {
  return (
    <section id="cta" className="px-6 py-20 text-center sm:px-12">
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-maroon-dark sm:text-4xl">
        Ready to start planning?
      </h2>
      <p className="mx-auto mt-3 max-w-md text-foreground/70">
        Join thousands of couples who found their perfect vendors with
        shadiWalaGhar.
      </p>
      <Button variant="dark" className="mt-8">
        Get Started — It&apos;s Free
      </Button>
    </section>
  );
}
