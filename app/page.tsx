import { CTA } from "@/components/cta";
import { Hero } from "@/components/hero";
import { Roadmap } from "@/components/roadmap";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Roadmap />
      <CTA />
    </main>
  );
}
