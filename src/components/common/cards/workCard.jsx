"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const WorkCard = ({ fun, img, title, desc, workVariants }) => {
  return (
    <motion.div
      className="flex flex-col cursor-pointer"
      variants={workVariants}
      onClick={() => fun()}
    >
      <Image src={img} alt="work-img" />
      <h4 className="mt-6 font-[600] text-[20px] leading-[30px] text-primary">
        {title}
      </h4>
      <p className="mt-[8px] font-[400] text-[17px] leading-[27px] text-primary">
        {desc}
      </p>
    </motion.div>
  );
};

export default WorkCard;
