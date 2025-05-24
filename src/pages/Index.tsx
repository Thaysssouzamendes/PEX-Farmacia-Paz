
import Navbar from "@/components/Navbar";
import PromoStrip from "@/components/PromoStrip";
import Hero from "@/components/Hero";
import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import NewsletterSection from "@/components/NewsletterSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PromoStrip />
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <FeaturedCategories />
        <FeaturedProducts />
        <TestimonialSection />
        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
