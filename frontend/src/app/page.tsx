import { getHealth } from "@/lib/api";

const CATEGORIES = [
  { icon: "🏰", label: "Venues" },
  { icon: "📸", label: "Photographers" },
  { icon: "🎊", label: "Decorators" },
  { icon: "🍽️", label: "Catering" },
  { icon: "💄", label: "Makeup Artists" },
  { icon: "💌", label: "Invitations" },
];

const STATS = [
  { value: "10,000+", label: "Trusted Vendors" },
  { value: "50,000+", label: "Happy Couples" },
  { value: "500+", label: "Cities Covered" },
];

function MandalaDivider() {
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

export default async function Home() {
  let backendOnline = true;
  try {
    await getHealth();
  } catch {
    backendOnline = false;
  }

  return (
    <div className="flex min-h-screen flex-col bg-cream font-[family-name:var(--font-body)]">
      {/* Nav */}
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-gold-light/40 bg-maroon px-6 py-4 text-cream sm:px-12">
        <span className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-wide text-gold-light">
          shadiWalaGhar
        </span>
        <nav className="hidden gap-8 text-sm font-medium sm:flex">
          <a href="#categories" className="transition-colors hover:text-gold-light">Vendors</a>
          <a href="#stats" className="transition-colors hover:text-gold-light">Real Weddings</a>
          <a href="#cta" className="transition-colors hover:text-gold-light">Plan a Wedding</a>
        </nav>
        <button className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-maroon-dark transition-transform hover:scale-105">
          Get Started
        </button>
      </header>

      {/* Hero */}
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
          <button className="w-full rounded-full bg-gold px-8 py-3 font-semibold text-maroon-dark shadow-lg shadow-black/20 transition-transform hover:scale-105 sm:w-auto">
            Explore Vendors
          </button>
          <button className="w-full rounded-full border border-gold-light/70 px-8 py-3 font-semibold text-cream transition-colors hover:bg-gold-light/10 sm:w-auto">
            Plan My Wedding
          </button>
        </div>
        <MandalaDivider />
      </section>

      {/* Categories */}
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
          {CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-gold-light/50 bg-white px-4 py-8 shadow-sm transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-light/30 text-2xl transition-colors group-hover:bg-gold-light/60">
                {cat.icon}
              </span>
              <span className="font-medium text-maroon-dark">{cat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
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

      {/* CTA */}
      <section id="cta" className="px-6 py-20 text-center sm:px-12">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-maroon-dark sm:text-4xl">
          Ready to start planning?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-foreground/70">
          Join thousands of couples who found their perfect vendors with
          shadiWalaGhar.
        </p>
        <button className="mt-8 rounded-full bg-maroon px-10 py-3 font-semibold text-cream shadow-lg shadow-maroon/20 transition-transform hover:scale-105">
          Get Started — It&apos;s Free
        </button>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-gold-light/40 bg-maroon-dark px-6 py-10 text-center text-cream/70 sm:px-12">
        <p className="font-[family-name:var(--font-heading)] text-xl font-semibold text-gold-light">
          shadiWalaGhar
        </p>
        <p className="mt-2 text-sm">
          &copy; {new Date().getFullYear()} shadiWalaGhar. All rights reserved.
        </p>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1 font-mono text-xs">
          <span
            className={`h-2 w-2 rounded-full ${
              backendOnline ? "bg-green-400" : "bg-red-400"
            }`}
          />
          Backend: {backendOnline ? "Connected" : "Offline"}
        </p>
      </footer>
    </div>
  );
}
