import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <Stats />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <CTA />
    </main>
  );
}
