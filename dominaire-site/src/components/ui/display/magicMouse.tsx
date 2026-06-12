"use client";
import { motion } from "framer-motion";

const MagicMouse = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-14 w-9 rounded-full border-2 border-white">
        <motion.div
          className="absolute left-1/2 top-3 h-2 w-1 -translate-x-1/2 rounded-full bg-white"
          animate={{
            y: [0, 12, 12],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </div>

      <span className="text-xs tracking-[0.3em] text-white">SCROLL</span>
    </div>
  );
};

export default MagicMouse;
