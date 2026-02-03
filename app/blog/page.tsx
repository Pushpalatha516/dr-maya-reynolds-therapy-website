import FadeInSection from "@/components/FadeInSection";
import BlogHero from "@/components/BlogHero";
import BlogGrid from "@/components/BlogGrid";
import BlogSubscribe from "@/components/BlogSubscribe";

export default function BlogPage() {
  return (
    <main>
      <FadeInSection delay={0}>
  <BlogHero />
</FadeInSection>

<FadeInSection delay={0.2}>
  <BlogGrid />
</FadeInSection>

<FadeInSection delay={0.4}>
  <BlogSubscribe />
</FadeInSection>

    </main>
  );
}
