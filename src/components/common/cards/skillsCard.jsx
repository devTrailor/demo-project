"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const SkillsCard = ({ img, title, desc, skillsVariants }) => {
  return (
    <motion.div
      className="flex flex-col items-center py-[64px] px-[42px]"
      variants={skillsVariants}
    >
      <Image src={img} alt="skill-img" className="mb-[42px]" />
      <h3 className="mb-3 font-[600] text-[27px] text-primary leading-[42px]">
        {title}
      </h3>
      <p className="text-center font-[400] text-[17px] text-primary leading-[27px]">
        {desc}
      </p>
    </motion.div>
  );
};

export default SkillsCard;
