import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const SocialLists = ({ socialIconLists, socialListsVariant }) => {
  return (
    <motion.ul className="flex gap-6" variants={socialListsVariant}>
      {socialIconLists?.map((elm, i) => {
        return (
          <li key={elm + i}>
            <Link href={"#"}>
              <Image src={elm} alt="social-icon" className="w-9 h-9" />
            </Link>
          </li>
        );
      })}
    </motion.ul>
  );
};

export default SocialLists;
