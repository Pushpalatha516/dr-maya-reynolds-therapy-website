import Hero from "@/components/Hero";
import About from "@/components/About";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import ApproachSection from "@/components/ApproachSection";
import Services from "@/components/Services";
import FadeInSection from "@/components/FadeInSection";

export default function HomePage() {
  return (
    <main>
      
      <FadeInSection delay={0}>
  <Hero />
</FadeInSection>

<FadeInSection delay={0.15}>
  <About />
</FadeInSection>

<FadeInSection delay={0.3}>
  <SpecialtiesSection />
</FadeInSection>

<FadeInSection delay={0.45}>
  <ApproachSection />
</FadeInSection>

<FadeInSection delay={0.6}>
  <Services />
</FadeInSection>

    </main>
  );
}
