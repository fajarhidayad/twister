import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PopOverProps {
  children?: React.ReactNode;
  isActive?: boolean;
}

export const PopOver: React.FC<PopOverProps> = ({ children, isActive }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, translateY: "-20px" }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, y: "-20px" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute top-14 left-4"
        >
          <div className="card">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
