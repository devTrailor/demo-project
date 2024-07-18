"use client";
import React, { useState } from "react";
import SocialLists from "../common/socialLists";
import { behance, dbl, discord, fb, instagram } from "@/assets";
import NotificationToast from "../common/notificationToast";
import { motion } from "framer-motion";

const AppFooter = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
  });

  const [showToast, setShowToast] = useState(false);

  const socialIconLists = [discord, fb, dbl, instagram, behance];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput.name != "" && userInput.email != "") {
      setUserInput({
        name: "",
        email: "",
      });
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    } else {
      return;
    }
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const titleVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  const descVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } },
  };

  const socialListsVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } },
  };

  const formVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } },
  };

  return (
    <footer className="app-footer">
      <div className="container py-[42px] pb-[86px]">
        <motion.div
          className="grid grid-cols-2"
          variants={containerVariant}
          initial="hidden"
          whileInView={"visible"}
        >
          <div className="flex flex-col">
            <motion.h3
              className="font-[600] text-[32px] leading-[42px] mb-6"
              variants={titleVariant}
            >
              Lets work together
            </motion.h3>
            <motion.p
              className="mb-[42px] font-[400] text-[17px] leading-[27px] max-w-[570px]"
              variants={descVariant}
            >
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com This is a template Figma file, turned into
              code using Anima. Learn more at AnimaApp.com
            </motion.p>
            <SocialLists
              socialIconLists={socialIconLists}
              socialListsVariant={socialListsVariant}
            />
          </div>
          <div className="">
            <motion.form onSubmit={handleSubmit} variants={formVariant}>
              <div className="input-fields flex flex-col gap-[12px]">
                <input
                  type="text"
                  name="name"
                  value={userInput.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="py-4 px-6 bg-light-gray w-full focus:outline-none placeholder:font-[400] placeholder:text-[17px] placeholder:leading-[27px]"
                />

                <input
                  type="email"
                  name="email"
                  value={userInput.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="py-4 px-6 bg-light-gray w-full focus:outline-none placeholder:font-[400] placeholder:text-[17px] placeholder:leading-[27px]"
                />
              </div>

              <button
                type="submit"
                className="capitalize font-[600] text-[20px] h-[78px] leading-[30px] text-white px-16 flex justify-center items-center bg-primary mt-6"
              >
                submit
              </button>

              {showToast && (
                <NotificationToast
                  msg={"Thanks for contacting us!"}
                  showToast={showToast}
                  setShowToast={setShowToast}
                />
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default AppFooter;
