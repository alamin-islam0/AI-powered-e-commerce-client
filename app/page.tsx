import { Hero } from '@/components/hero';
import { Collections } from '@/components/sections/collections';
import { Featured } from '@/components/sections/featured';
import { Story } from '@/components/sections/story';
import { Testimonials } from '@/components/sections/testimonials';
import { AIConcierge } from '@/components/sections/ai';
import { FeaturedCategories } from '@/components/sections/categories';
import { BestSellers } from '@/components/sections/best-sellers';
import { PlatformStats } from '@/components/sections/stats';
import { BrandWall } from '@/components/sections/brands';
import { BlogPreview } from '@/components/sections/blog';
import { FAQSection } from '@/components/sections/faq';
import { NewsletterCTA } from '@/components/sections/newsletter';

export default function HomePage() {
  return (
    <main className="space-y-12 pb-20">
      <Hero />
      <FeaturedCategories />
      <BestSellers />
      <Collections />
      <Featured />
      <PlatformStats />
      <Story />
      <Testimonials />
      <AIConcierge />
      <BrandWall />
      <BlogPreview />
      <FAQSection />
      <NewsletterCTA />
    </main>
  );
}
