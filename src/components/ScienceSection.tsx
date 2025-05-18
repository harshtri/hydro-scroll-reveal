
import { useEffect, useRef } from "react";

export default function ScienceSection() {
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
    <section className="scroll-section" id="science">
      <div className="content-block mr-auto ml-16 fade-in" ref={leftContentRef}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-hydrogen glowing-text">Clinically</span> backed.
          <br />Compact. <span className="text-hydrogen glowing-text">Portable</span>.
        </h2>
      </div>
      
      <div className="content-block ml-auto mr-16 fade-in" ref={rightContentRef}>
        <p className="text-xl text-gray-300 leading-relaxed">
          Molecular hydrogen (H₂) is one of the most researched therapeutic antioxidants with over 1,200 peer-reviewed studies.
        </p>
        <div className="flex items-center mt-8">
          <div className="h-16 w-16 bg-dark-light rounded-full flex items-center justify-center mr-4">
            <span className="text-hydrogen text-2xl font-bold">1200+</span>
          </div>
          <p className="text-sm text-gray-400">Peer-reviewed<br />studies</p>
          
          <div className="h-16 w-16 bg-dark-light rounded-full flex items-center justify-center mx-4">
            <span className="text-hydrogen text-2xl font-bold">H₂</span>
          </div>
          <p className="text-sm text-gray-400">Selective<br />antioxidant</p>
        </div>
      </div>
    </section>
  );
}
