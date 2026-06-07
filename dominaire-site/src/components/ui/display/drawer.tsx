"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLockScroll } from "@/src/lib/hooks";

type DrawerProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  anchor?: "top" | "bottom" | "left" | "right";
};

const variants = {
  left: {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
  },
  right: {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
  },
  top: {
    initial: { y: "-100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
  },
  bottom: {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "100%" },
  },
};

const position = {
  left: "left-0 top-0",
  right: "right-0 top-0",
  top: "top-0 left-0",
  bottom: "bottom-0 left-0",
};

export default function Drawer({
  open,
  onClose,
  children,
  anchor = "left",
}: DrawerProps) {
  useLockScroll({ open });

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            onClick={onClose}
            className="fixed inset-0 z-899 bg-black/25"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          <motion.div
            className={`fixed ${position[anchor]} z-900`}
            variants={variants[anchor]}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
