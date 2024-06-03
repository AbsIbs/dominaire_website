"use client";
import { motion } from "framer-motion";

const FadeIn = ({ children, viewport, variants, initial }) => {
  const defaultVariants = {
    offscreen: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const defaultViewport = { once: true, amount: 0.5 };

  return (
    <motion.div
      initial={initial ? initial : "offscreen"}
      whileInView="visible"
      viewport={viewport ? viewport : defaultViewport}
      variants={variants ? variants : defaultVariants}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
