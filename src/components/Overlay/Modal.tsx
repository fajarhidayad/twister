import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  children?: React.ReactNode;
  active: boolean;
}

export const Modal: React.FC<ModalProps> = ({ children, active }) => {
  return (
    <AnimatePresence>
      {active && (
        <motion.section
          className="fixed h-screen w-screen z-50 bg-black/60 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  );
};
