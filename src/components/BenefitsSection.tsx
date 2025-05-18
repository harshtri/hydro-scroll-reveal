
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const benefits = [
  {
    id: "mitochondria",
    title: "Fuel Your Mitochondria",
    description: "Hydrogen supports mitochondrial efficiency – the core of your body's cellular energy system. More ATP, less fatigue."
  },
  {
    id: "oxidative",
    title: "Reduce Oxidative Stress",
    description: "Neutralize free radicals with the world's most selective antioxidant. Proven in 1,200+ peer-reviewed studies."
  },
  {
    id: "recovery",
    title: "Fast Recovery, Less Inflammation",
    description: "Hydrogen-rich water helps reduce muscle soreness and promotes anti-inflammatory responses post workout, sauna, or ice bath."
  }
];

export default function BenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });

    if (leftContentRef.current) observer.observe(leftContentRef.current);
    if (rightContentRef.current) observer.observe(rightContentRef.current);

    return () => {
      if (leftContentRef.current) observer.unobserve(leftContentRef.current);
      if (rightContentRef.current) observer.unobserve(rightContentRef.current);
    };
  }, []);

  const nextBenefit = () => {
    setActiveIndex((prev) => (prev + 1) % benefits.length);
  };

  const prevBenefit = () => {
    setActiveIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  return (
    <section className="scroll-section" id="benefits" ref={sectionRef}>
      <div className="content-block mr-auto ml-10 fade-in" ref={leftContentRef}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          The Most Powerful Molecule You're <span className="text-hydrogen glowing-text">Not Using Yet</span>
        </h2>
      </div>

      <div className="content-block ml-auto mr-10 fade-in relative" ref={rightContentRef}>
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={prevBenefit}
            className="p-2 rounded-full bg-dark-light hover:bg-hydrogen/20 transition-colors"
            aria-label="Previous benefit"
          >
            <ChevronLeft className="h-5 w-5 text-hydrogen" />
          </button>
          <span className="text-gray-400 text-sm">{activeIndex + 1} / {benefits.length}</span>
          <button 
            onClick={nextBenefit}
            className="p-2 rounded-full bg-dark-light hover:bg-hydrogen/20 transition-colors"
            aria-label="Next benefit"
          >
            <ChevronRight className="h-5 w-5 text-hydrogen" />
          </button>
        </div>
        
        <div className="min-h-[180px]">
          {benefits.map((benefit, i) => (
            <div 
              key={benefit.id}
              className={cn(
                "transition-all duration-500",
                i === activeIndex ? "opacity-100 translate-y-0" : "opacity-0 absolute pointer-events-none"
              )}
              style={{ display: i === activeIndex ? "block" : "none" }}
            >
              <h3 className="text-2xl text-hydrogen font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
