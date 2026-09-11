interface FooterProps {
  backendOnline: boolean;
}

export function Footer({ backendOnline }: FooterProps) {
  return (
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
  );
}
