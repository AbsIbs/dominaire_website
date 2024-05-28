"use client";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const TextReveal = (props) => {
  const description = useRef(null);
  const isInView = useInView(description);

  // Animations
  const slideUp = {
    initial: {
      y: "100%",
    },
    open: (i) => ({
      y: "0%",
      transition: { duration: 0.5, delay: 0.01 * i },
    }),
    closed: {
      y: "100%",
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <div ref={description}>
        <p className="res-text-38 text-text-normal">
          {props.text.split(" ").map((word, index) => {
            return (
              <span
                key={index}
                className="relative overflow-hidden inline-flex"
              >
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
                <span>&nbsp;</span>
              </span>
            );
          })}
        </p>
      </div>
    </>
  );
};

export default TextReveal;
