
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full px-5 py-4 flex items-center justify-between z-50 transition-all duration-300",
        scrolled ? "bg-dark/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-hydrogen">DR.WATER</h1>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a href="#benefits" className="text-gray-300 hover:text-hydrogen transition-colors">Benefits</a>
        <a href="#science" className="text-gray-300 hover:text-hydrogen transition-colors">Science</a>
        <a href="#testimonials" className="text-gray-300 hover:text-hydrogen transition-colors">Testimonials</a>
      </div>

      <div>
        <button className="bg-hydrogen hover:bg-hydrogen-light text-white px-4 py-2 rounded transition-colors">
          Shop Now
        </button>
      </div>
    </nav>
  );
}
