import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ButtonPrimary = ({ text }) => {
  return (
    <Link href="#">
      <motion.button
        className="capitalize font-[600] text-[20px] h-[78px] leading-[30px] text-white px-16 flex justify-center items-center bg-primary"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1.3, delay: 0.5 }}
      >
        {text}
      </motion.button>
    </Link>
  );
};

export default ButtonPrimary;
