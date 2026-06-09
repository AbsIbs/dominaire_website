"use client";
// UI
import { Modal } from "@/src/components/ui/display";

// React
import { motion, AnimatePresence } from "framer-motion";

// Icons
import { IoCheckmark, IoAlertOutline } from "react-icons/io5";
import { IoIosWarning } from "react-icons/io";
import { CgSandClock } from "react-icons/cg";

// Type
type Props = {
  title: string;
  desc: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type?: "error" | "success" | "info" | "pending";
  confirmText?: string;
  warning?: string;
  zIndex?: number;
};

const AlertModal = ({
  title,
  desc,
  open,
  setOpen,
  type = "error",
  confirmText = "Okay!",
  warning,
  zIndex = 500,
}: Props) => {
  const handleClose = () => {
    setOpen(false);
  };

  const colors = {
    error: {
      light: "bg-red-200",
      dark: "bg-red-700",
    },
    success: {
      light: "bg-green-200",
      dark: "bg-green-700",
    },
    info: {
      light: "bg-blue-200",
      dark: "bg-blue-700",
    },
    pending: {
      light: "bg-yellow-200",
      dark: "bg-yellow-700",
    },
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)} zIndex={zIndex}>
      <AnimatePresence mode="wait">
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-6 items-center bg-white rounded-lg max-w-2xl w-[90vw] p-12 text-center"
        >
          <div
            className={`${colors[type].light} flex items-center justify-center p-6 rounded-full`}
          >
            {type === "error" && (
              <IoAlertOutline className="text-red-800 res-text-38" />
            )}
            {type == "success" && (
              <IoCheckmark className="text-green-800 res-text-38" />
            )}
            {type == "pending" && (
              <CgSandClock className="text-yellow-800 res-text-38" />
            )}
          </div>
          <p className="res-text-30 text-text-on-lightSurface font-medium">{title}</p>
          <p className="text-gray-500">{desc}</p>
          {warning && (
            <div className="flex gap-2 py-2 px-6 bg-orange-400 text-white items-center rounded">
              <IoIosWarning className="text-xl" />
              <p>{warning}</p>
            </div>
          )}
          <button
            onClick={handleClose}
            className={`w-full py-2 rounded-full flex items-center justify-center ${colors[type].dark}`}
          >
            <p className="text-white text-lg font-medium">{confirmText}</p>
          </button>
        </motion.div>
      </AnimatePresence>
    </Modal>
  );
};

export default AlertModal;
