import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import HowItWorks from './components/HowItWorks';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-navy text-light-gray">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <HowItWorks />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
