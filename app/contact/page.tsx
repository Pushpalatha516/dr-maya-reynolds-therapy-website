import FadeInSection from "@/components/FadeInSection";
import ContactHero from "@/components/ContactHero";
import ConsultationCTA from "@/components/ConsultationCTA";
import OfficeLocation from "@/components/OfficeLocation";
import OfficeGallery from "@/components/OfficeGallery";

export default function ContactPage() {
  return (
    <main>
      <FadeInSection delay={0}>
        <ContactHero/>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <ConsultationCTA />
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <OfficeLocation />
      </FadeInSection>
      

      <FadeInSection delay={0.5}>
        <OfficeGallery />
      </FadeInSection>
      
    </main>
  );
}
