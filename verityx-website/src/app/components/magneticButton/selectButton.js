"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";

const Magnetic = ({ children }) => {
  const magnetic = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    const magneticElement = magnetic.current;
    magneticElement.addEventListener("mousemove", handleMouseMove);
    magneticElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      magneticElement.removeEventListener("mousemove", handleMouseMove);
      magneticElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return React.cloneElement(children, { ref: magnetic });
};

export default function SelectButton({
  children,
  backgroundColor = "#E9204F",
  ...attributes
}) {
  const [active, setActive] = useState(false)
  const circle = useRef(null);
  const timeline = useRef(gsap.timeline({ paused: true }));
  let timeoutId = useRef(null);

  useEffect(() => {
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeline.current.tweenFromTo("enter", "exit");
    setActive(true);
  };

  const manageMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      timeline.current.play();
      setActive(false)
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={styles.selectButton}
        style={{ overflow: "hidden" }}
        onClick={() => (active ? manageMouseLeave() : manageMouseEnter())}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className={styles.circle}
        ></div>
      </div>
    </Magnetic>
  );
}