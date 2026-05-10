import ContactBanner from "@/components/Landing Page/ContactBanner";
import FeaturedCards from "@/components/Landing Page/FeaturedCards";
import Footer from "@/components/Landing Page/Footer";
import HeroSection from "@/components/Landing Page/HeroSection";
import Products from "@/components/Landing Page/Products";

export default function Home() {
  return (
    <div className="w-full relative">
      <HeroSection />
      <FeaturedCards />
      <Products />
      <ContactBanner />
      {/* <Footer /> */}
    </div>
  );
}
