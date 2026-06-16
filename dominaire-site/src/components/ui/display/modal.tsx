"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLockScroll } from "@/src/lib/hooks";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  zIndex?: number;
};

const Modal = ({ open, onClose, children, zIndex = 500 }: ModalProps) => {
  useLockScroll({ open });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          onClick={onClose}
          className="fixed inset-0 flex items-center justify-center bg-black/75"
          style={{ zIndex: zIndex }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
