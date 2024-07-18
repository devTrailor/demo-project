"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const AppHeader = () => {
  const navigation = [
    {
      name: "about",
      path: "#",
    },
    {
      name: "work",
      path: "#",
    },
    {
      name: "contact",
      path: "#",
    },
  ];

  return (
    <motion.header
      className="h-[78px] flex items-center sticky top-0 bg-white z-20"
      initial={{
        y: "-100%",
        opacity: 0,
      }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ duration: 0.5, ease: "backInOut" }}
    >
      <div className="container">
        <nav className="flex justify-between">
          <div className="logo font-[600] text-[20px] leading-[23px]">LOGO</div>

          <ul className="flex gap-6">
            {navigation?.map((elm, i) => {
              return (
                <li
                  key={elm + i}
                  className="capitalize font-[400] text-[17px] leading-[27px]"
                >
                  <Link href={elm?.path}>{elm?.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default AppHeader;
