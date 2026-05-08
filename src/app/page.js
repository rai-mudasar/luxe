import ContactBanner from "@/components/ContactBanner";
import FeaturedCards from "@/components/FeaturedCards";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className="w-full relative">
      <HeroSection />
      <FeaturedCards />
      <Products />
      <ContactBanner />
      <Footer />
    </div>
  );
}
