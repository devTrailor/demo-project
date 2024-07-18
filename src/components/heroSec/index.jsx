"use client";
import Image from "next/image";
import React from "react";
import ButtonPrimary from "../common/buttons/buttonPrimary";
import { motion } from "framer-motion";

const HeroSec = ({ img, sloganHeading, brandHeading, desc }) => {
  const containerVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const sloganVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5 },
    },
  };

  const brandHeadingVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.5 } },
  };

  const descVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.8, delay: 0.5 } },
  };

  const imgVariant = {
    hidden: { opacity: 0, y: 20, transition: { scale: 0 } },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.8, delay: 0.5, scale: 1 },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-2 bg-white items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      <div className="">
        <motion.span
          className="block mb-6 font-[600] text-[20px] leading-[30px]"
          variants={sloganVariant}
        >
          {sloganHeading}
        </motion.span>
        <motion.h1
          className="capitalize mb-6 font-[600] text-[68px] leading-[70px]"
          variants={brandHeadingVariant}
        >
          {brandHeading}
        </motion.h1>
        <motion.p
          className="mb-12 font-[400] text-[17px] leading-[27px] max-w-[620px]"
          variants={descVariant}
        >
          {desc}
        </motion.p>
        <ButtonPrimary text="contact" />
      </div>
      <motion.div className="flex justify-end" variants={imgVariant}>
        <Image src={img} alt="banner-img" />
      </motion.div>
    </motion.div>
  );
};

export default HeroSec;
