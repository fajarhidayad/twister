import React, { Ref } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PopOverProps {
  children?: React.ReactNode;
  isActive?: boolean;
  className?: string;
  menuRef?: Ref<HTMLDivElement>;
}

export const PopOver: React.FC<PopOverProps> = ({
  children,
  isActive,
  className,
  menuRef,
}) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, translateY: "-20px" }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, y: "-20px" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={"absolute " + className}
          ref={menuRef}
        >
          <div className="card">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
