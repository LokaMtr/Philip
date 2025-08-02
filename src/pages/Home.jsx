import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import CTASection from '../components/CTASection';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { features } from '../data';

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="bg-light-gray py-16">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3">
          {features.map((f, idx) => (
            <FeatureCard key={idx} {...f} />
          ))}
        </div>
      </section>
      <CTASection />
      <TestimonialCarousel />
    </>
  );
}

