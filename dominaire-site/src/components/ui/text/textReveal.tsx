"use client";
// React
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import type { ElementType } from "react";

// Props
type Props = {
  text: string;
  className: string;
  as?: ElementType;
};

const TextReveal = ({ text, className, as: Tag = "p" }: Props) => {
  const description = useRef(null);
  const isInView = useInView(description);

  // Animations
  const slideUp = {
    initial: {
      y: "100%",
    },
    open: (i: number) => ({
      y: "0%",
      transition: { duration: 0.5, delay: 0.01 * i },
    }),
    closed: {
      y: "100%",
      transition: { duration: 0.5 },
    },
  };

  return (
    <div ref={description}>
      <Tag className={`${className}`}>
        {text.split(" ").map((word, index) => {
          return (
            <span key={index} className="relative overflow-hidden inline-flex">
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
      </Tag>
    </div>
  );
};

export default TextReveal;
