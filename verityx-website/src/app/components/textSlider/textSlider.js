"use client";
import styles from "./style.module.scss";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const TextSlider = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

 useGSAP(() => {
   gsap.registerPlugin(ScrollTrigger);
   gsap.to(slider.current, {
     scrollTrigger: {
      markers: true,
       start: "top bottom", // When the top of the slider hits the bottom of the viewport
       end: "bottom top", // When the bottom of the slider hits the top of the viewport
       scrub: 0.25,
       onUpdate: (e) => (direction = e.direction * -1),
     },
     x: "-500px",
   });
   requestAnimationFrame(animate);
 });

  return (
    <div className={styles.mainContainer}>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Why should you choose us?</p>
          <p ref={secondText}>Why should you choose us?</p>
        </div>
      </div>
    </div>
  );
};

export default TextSlider;
