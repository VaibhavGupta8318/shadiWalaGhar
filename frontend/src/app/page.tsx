import { getHealth } from "@/lib/api";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { Stats } from "@/components/sections/Stats";
import { CallToAction } from "@/components/sections/CallToAction";

export default async function Home() {
  let backendOnline = true;
  try {
    await getHealth();
  } catch {
    backendOnline = false;
  }

  return (
    <div className="flex min-h-screen flex-col bg-cream font-[family-name:var(--font-body)]">
      <Navbar />
      <Hero />
      <Categories />
      <Stats />
      <CallToAction />
      <Footer backendOnline={backendOnline} />
    </div>
  );
}
