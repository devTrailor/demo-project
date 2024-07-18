import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const TestimonialCard = ({ testimonialsData, testimonialsVariant }) => {
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
            {testimonialsData?.ratings?.map((elm, i) => {
              return (
                <li key={elm + i}>
                  <Image
                    src={elm}
                    alt="user"
                    className="h-[20px] w-[20px] cursor-pointer"
                  />
                </li>
              );
            })}
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
