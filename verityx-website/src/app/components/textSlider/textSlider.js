"use client";
import styles from "./style.module.scss";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export default function TextSlider({ children, className, height }) {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const animationRef = useRef(null);

  useGSAP(() => {
    // Only register plugin once
    gsap.registerPlugin(ScrollTrigger);

    // Check if refs exist before animating
    if (slider.current && firstText.current && secondText.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 0.25,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (e) => {
            direction.current = e.direction * -1;
          }
        }
      });

      tl.to(slider.current, { x: "-500px" });

      // Start animation frame
      animationRef.current = requestAnimationFrame(animate);

      // Return cleanup function
      return () => {
        // Kill the ScrollTrigger
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        
        // Cancel animation frame
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, []);

  // Use ref for direction to prevent stale closure
  const direction = useRef(-1);
  const xPercent = useRef(0);

  const animate = () => {
    // Safely update xPercent
    if (xPercent.current < -100) {
      xPercent.current = 0;
    } else if (xPercent.current > 0) {
      xPercent.current = -100;
    }

    // Only animate if refs still exist
    if (firstText.current && secondText.current) {
      gsap.set(firstText.current, { xPercent: xPercent.current });
      gsap.set(secondText.current, { xPercent: xPercent.current });

      xPercent.current += 0.1 * direction.current;
      
      // Continue animation if component is still mounted
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  return (
    <main className={`${styles.main} ${height}`}>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>{children}</p>
          <p ref={secondText}>{children}</p>
        </div>
      </div>
    </main>
  );
}