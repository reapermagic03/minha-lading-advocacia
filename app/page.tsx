import Hero from "@/components/hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#f3f0ea] text-[#171717]">
      <Hero />
      <Services />
      <About />
      <Process />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
