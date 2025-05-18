
import { useEffect, useRef } from "react";
import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ScienceSection from "@/components/ScienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const bottleImageRef = useRef<HTMLImageElement>(null);
  
  // Parallax effect for the bottle image
  useEffect(() => {
    const handleScroll = () => {
      if (!bottleImageRef.current) return;
      
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = scrollY / maxScroll;
      
      // Add a subtle float effect as the user scrolls
      if (window.innerWidth > 768) {
        const floatEffect = Math.sin(scrollProgress * Math.PI * 2) * 15;
        bottleImageRef.current.style.transform = `translate(-50%, calc(-50% + ${floatEffect}px))`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-dark to-dark-light min-h-screen">
      <Nav />
      
      {/* Fixed center product image (for desktop) */}
      <img 
        ref={bottleImageRef}
        src="/lovable-uploads/56d8a88a-79b9-4a29-a7dc-5701298cc025.png" 
        alt="DR.WATER Hydrogen Water Bottle" 
        className="center-product animate-glow-pulse md:block hidden"
      />
      
      {/* Mobile version of the product image (shown in each section) */}
      <img 
        src="/lovable-uploads/56d8a88a-79b9-4a29-a7dc-5701298cc025.png" 
        alt="DR.WATER Hydrogen Water Bottle" 
        className="md:hidden max-h-80 mx-auto mt-20 mb-6 animate-glow-pulse"
      />
      
      {/* Sections */}
      <HeroSection />
      <BenefitsSection />
      <ScienceSection />
      <TestimonialsSection />
      
      {/* Call to action */}
      <section className="py-20 bg-gradient-to-r from-dark-light to-dark relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Experience the <span className="text-hydrogen glowing-text">Future</span> of Hydration
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of biohackers optimizing their performance with molecular hydrogen.
            </p>
            <button className="bg-hydrogen hover:bg-hydrogen-light text-white px-8 py-4 rounded-md text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-hydrogen/30">
              Get Your DR.WATER Bottle
            </button>
            <p className="text-gray-400 mt-4">Free shipping + 30-day money back guarantee</p>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-hydrogen/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-hydrogen/5 blur-3xl"></div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
