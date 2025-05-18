
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote: "I've tracked my HRV and inflammation post-workout — and there's a difference.",
    author: "@mike.biohack",
    role: "Performance Coach"
  },
  {
    id: 2,
    quote: "Hydrogen water is now part of my pre-meditation and nootropic stack.",
    author: "Lena",
    role: "Founder of LongevityStacked.com"
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="scroll-section" id="testimonials">
      <div className="content-block mr-auto ml-16 fade-in" ref={leftContentRef}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Formulated for <span className="text-hydrogen glowing-text">biohackers</span>, athletes, and high-performance minds.
        </h2>
      </div>
      
      <div className="content-block ml-auto mr-16 fade-in" ref={rightContentRef}>
        <div className="relative h-48">
          {testimonials.map((testimonial, i) => (
            <div 
              key={testimonial.id}
              className={cn(
                "absolute top-0 left-0 w-full transition-all duration-700",
                i === activeIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <div className="bg-dark-light p-6 rounded-lg border border-hydrogen/20">
                <p className="text-lg text-gray-200 mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="bg-hydrogen w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-hydrogen font-medium">{testimonial.author}</p>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex mt-4 gap-2">
          {testimonials.map((testimonial, i) => (
            <button 
              key={`dot-${testimonial.id}`}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                i === activeIndex ? "bg-hydrogen w-6" : "bg-gray-600"
              )}
              onClick={() => setActiveIndex(i)}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
