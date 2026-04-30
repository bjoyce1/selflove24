import { Hero } from "@/components/Hero";
import { GalleryTeaser } from "@/components/GalleryTeaser";
import { FeaturedRead } from "@/components/FeaturedRead";
import { AboutTeaser } from "@/components/AboutTeaser";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO
        title="The Self Love Project — Twelve Women. Twelve Stories. One Reckoning."
        description="A digital art book by Mr. CAP. Twelve portraits, twelve stories of Black women on journeys of self-discovery and healing."
      />
      <main className="pb-tabs md:pb-0">
        <Hero />
        <GalleryTeaser />
        <FeaturedRead />
        <AboutTeaser />
      </main>
    </>
  );
};

export default Index;
