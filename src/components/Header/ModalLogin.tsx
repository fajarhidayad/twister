import { useModalStore } from "#/store";
import React, { useRef } from "react";
import { Modal } from "../Overlay";
import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import useClickOutside from "#/hooks/useClickOutside";
import { signIn } from "next-auth/react";

const ModalLogin = () => {
  const { active, close: closeModal } = useModalStore();
  const modalRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(modalRef, closeModal);

  return (
    <Modal active={active}>
      <motion.div
        ref={modalRef}
        className="card w-[500px] mx-3 flex flex-col"
        initial={{ opacity: 0, translateY: "20px" }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.3, delay: 0.1 }}
      >
        <button className="ml-auto" onClick={closeModal}>
          <IoClose size={25} />
        </button>
        <h1 className="text-center text-2xl font-semibold mb-2">
          Welcome to Twister
        </h1>
        <div className="border-b border-b-slate-300 my-2" />
        <h1 className="text-center text-2xl font-semibold mb-3">Sign In</h1>
        <div className="flex flex-col items-center">
          <button
            onClick={() => signIn("google")}
            className="rounded border border-slate-400 py-3 px-7 flex items-center justify-center space-x-2 text-xl"
          >
            <FcGoogle size={25} />
            <span>Sign in with Google</span>
          </button>
        </div>
      </motion.div>
    </Modal>
  );
};

export default ModalLogin;
