import Navbar from '@/components/Shared/Navbar';
import Hero from '@/components/Landing/Hero';
import Features from '@/components/Landing/Features';
import Pricing from '@/components/Landing/Pricing';
import Footer from '@/components/Shared/Footer';

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}
