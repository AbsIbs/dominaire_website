"use client";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const TextReveal = () => {
  const phrase =
    "We're obsessed with unlocking your digital potential, and we refuse to settle for mediocrity. We're a passionate team of experts, collaborating to craft winning digital strategies that go above and beyond.";
  const description = useRef(null);
  const isInView = useInView(description);

  const wordsVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

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

  const opacity = {
    initial: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <div ref={description}>
        <p className="reveal-text res-text-50 text-text-normal leading-[125%]">
          {phrase.split(" ").map((word, index) => {
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
              </span>
            );
          })}
        </p>
      </div>
    </>
  );
};

export default TextReveal;
