"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface FadeInWordsProps {
  text: string;
  className?: string;
  startOffset?: [string | number, string | number];
  endOffset?: [string | number, string | number];
}

const FadeInWords: React.FC<FadeInWordsProps> = ({
  text,
  className = "",
  startOffset = ["start", "80%"],
  endOffset = ["end", "20%"],
}) => {
  const ref = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [startOffset, endOffset],
  });

  const words = text.split(" ");

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 0.1;

        const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

        return (
          <motion.span
            key={i}
            style={{ opacity }}
            className="mr-2 inline-block"
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
};

export default FadeInWords;
