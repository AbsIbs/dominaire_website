"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

// Types
type Props = {
  children: React.ReactNode;
  className: string;
};

const TextSlider = ({ children, className }: Props) => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const animationRef = useRef<number | null>(null);

  const direction = useRef(-1);
  const xPercent = useRef(0);

  const animate = () => {
    if (xPercent.current < -100) xPercent.current = 0;
    else if (xPercent.current > 0) xPercent.current = -100;

    if (firstText.current && secondText.current) {
      gsap.set(firstText.current, { xPercent: xPercent.current });
      gsap.set(secondText.current, { xPercent: xPercent.current });

      xPercent.current += 0.1 * direction.current;
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (slider.current && firstText.current && secondText.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 0.25,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (e) => (direction.current = e.direction * -1),
        },
      });

      tl.to(slider.current, { x: "-500px" });

      animationRef.current = requestAnimationFrame(animate);

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      };
    }
  }, []);

  return (
    <main className={`relative flex overflow-hidden ${className}`}>
      <div className="absolute">
        <div ref={slider} className="relative whitespace-nowrap">
          <p ref={firstText} className="m-0 inline-block">
            {children}
          </p>
          <p
            ref={secondText}
            className="m-0 inline-block absolute left-full top-0"
          >
            {children}
          </p>
        </div>
      </div>
    </main>
  );
};

export default TextSlider;
