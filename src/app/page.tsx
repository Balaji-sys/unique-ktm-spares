import HeroSection from '@/components/home/HeroSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import CategoryGrid from '@/components/home/CategoryGrid';
import ServiceCTA from '@/components/home/ServiceCTA';
import TrustBadges from '@/components/home/TrustBadges';
import CategorySection from '@/components/home/CategorySection';
import BrandsSection from '@/components/home/BrandsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <HeroSection />
            <TrustBadges />
            <CategorySection />
            <FeaturedProducts />
            <BrandsSection />
            <ServiceCTA />
            <TestimonialsSection />

            <Footer />
        </main>
    );
}
