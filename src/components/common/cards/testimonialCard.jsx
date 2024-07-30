import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { star } from "@/assets";

const TestimonialCard = ({ testimonialsData, testimonialsVariant }) => {
  const ratingArray = testimonialsData?.ratings;
  const maxStars = Math.max(...ratingArray); // Determine the maximum number in the array

  const renderStars = (number) => {
    return Array.from({ length: number }).map((_, index) => (
      <li key={index}>
        <Image
          src={star}
          alt="star"
          style={{ width: "20px", height: "20px" }}
        />
      </li>
    ));
  };

  return (
    <motion.div
      className="bg-light-gray p-[42px]"
      variants={testimonialsVariant}
    >
      <p className="decs mb-12 font-[600] text-[20px] leading-[30px]">
        {testimonialsData?.desc}
      </p>
      <div className="user-details flex gap-1">
        <Image
          src={testimonialsData?.icon}
          alt="user"
          className="w-[50px] h-[50px]"
        />
        <div className="">
          <ul className="ratings flex gap-[6px] mb-[11px]">
            {renderStars(maxStars)}
          </ul>
          <h4 className="font-[600] text-[20px] leading-[30px]">
            {testimonialsData?.name}
          </h4>
          <span className="block font-[400] text-[17px] leading-[27px]">
            {testimonialsData?.company}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
