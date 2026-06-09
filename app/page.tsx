import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProductsSection } from '@/components/ProductsSection';
import { CBESection } from '@/components/CBESection';
import { StatsSection } from '@/components/StatsSection';
import { CSRSection } from '@/components/CSRSection';
import { PartnersSection } from '@/components/PartnersSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <CBESection />
      <StatsSection />
      <CSRSection />
      <PartnersSection />
      <Footer />
    </main>
  );
}
