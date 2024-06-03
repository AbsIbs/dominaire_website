import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useWindowScroll } from "next/navigation";

const InfiniteText = ({ text, className }) => {
  const [direction, setDirection] = useState("-y");
  const { scrollY } = useWindowScroll();

  useEffect(() => {
    const direction = scrollY > 0 ? "-y" : "y";
    setDirection(direction);
  }, [scrollY]);

  return (
    <motion.p
      className={className}
      style={{ y: direction }}
      animate={{ y: direction }}
      transition={{ repeatType: "loop", repeat: "Infinity", duration: 5 }}
    >
      {text}
    </motion.p>
  );
};

export default InfiniteText;