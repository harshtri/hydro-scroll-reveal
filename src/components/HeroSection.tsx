
import { useEffect, useRef } from "react";

export default function HeroSection() {
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

  return (
    <section className="scroll-section" id="hero">
      <div className="content-block mr-auto ml-16 fade-in" ref={leftContentRef}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Upgrade Your <span className="text-hydrogen glowing-text">Cells</span>. 
          <br />Optimize <span className="text-hydrogen glowing-text">Recovery</span>.
        </h1>
      </div>
      
      <div className="content-block ml-auto mr-16 fade-in" ref={rightContentRef}>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
          Hydrogen-rich water for peak performance & longevity.
        </p>
      </div>
    </section>
  );
}
