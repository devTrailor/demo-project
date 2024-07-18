"use client";
import {
  bannerImg,
  iconAdidas,
  iconApple,
  iconGoogle,
  iconNike,
  iconSamsung,
  skill1,
  skill2,
  skill3,
  star,
  userIcon,
  work1,
  work2,
  work3,
  work4,
  work5,
  work6,
} from "@/assets";
import SkillsCard from "@/components/common/cards/skillsCard";
import TestimonialCard from "@/components/common/cards/testimonialCard";
import WorkCard from "@/components/common/cards/workCard";
import HeroSec from "@/components/heroSec";
import OurWorkModal from "@/components/modals/ourWorkModal";
import ClientSlider from "@/components/sliders/clientSlider";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const clientLogos = [
    { img: iconGoogle },
    { img: iconNike },
    { img: iconSamsung },
    { img: iconApple },
    { img: iconAdidas },
  ];

  const skills = [
    {
      title: "Product Design",
      desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      img: skill1,
    },
    {
      title: "Visual Design",
      desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      img: skill2,
    },
    {
      title: "Art Direction",
      desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      img: skill3,
    },
  ];

  const ourWorks = [
    {
      img: work1,
      title: "Project title",
      desc: "UI, Art direction",
    },
    {
      img: work2,
      title: "Project title",
      desc: "UI, Art direction",
    },
    {
      img: work3,
      title: "Project title",
      desc: "UI, Art direction",
    },
    {
      img: work4,
      title: "Project title",
      desc: "UI, Art direction",
    },
    {
      img: work5,
      title: "Project title",
      desc: "UI, Art direction",
    },
    {
      img: work6,
      title: "Project title",
      desc: "UI, Art direction",
    },
  ];

  const testimonialsData = [
    {
      icon: userIcon,
      desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      ratings: [star, star, star, star, star],
      name: "Gemma Nolen",
      company: "Google",
    },
    {
      icon: userIcon,
      desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      ratings: [star, star, star, star, star],
      name: "Gemma Nolen",
      company: "Google",
    },
    {
      icon: userIcon,
      desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      ratings: [star, star, star, star, star],
      name: "Gemma Nolen",
      company: "Google",
    },
    {
      icon: userIcon,
      desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      ratings: [star, star, star, star, star],
      name: "Gemma Nolen",
      company: "Google",
    },
    {
      icon: userIcon,
      desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      ratings: [star, star, star, star, star],
      name: "Gemma Nolen",
      company: "Google",
    },
    {
      icon: userIcon,
      desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      ratings: [star, star, star, star, star],
      name: "Gemma Nolen",
      company: "Google",
    },
  ];

  const handleCardClick = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
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

  const textVariantMain = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  const skillsSamplesLists = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const latestWorkSamplesLists = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const testimonialsLists = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main>
      <motion.section className="hero-sec min-h-screen">
        <div className="container py-[58px]">
          <HeroSec
            img={bannerImg}
            sloganHeading="Branding | Image making"
            brandHeading="Visual Designer"
            desc="This is a template Figma file, turned into code using Anima. 
Learn more at AnimaApp.com"
          />
        </div>
      </motion.section>

      <section className="client-logos bg-secondary">
        <div className="container py-[50px]">
          <ClientSlider clientLogos={clientLogos} />
        </div>
      </section>

      <motion.section
        className="skills-sec bg-white"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
      >
        <div className="container py-[42px]">
          <div className="skills-wrapper grid grid-cols-3 gap-6">
            {skills?.map((elm, i) => {
              return (
                <React.Fragment key={elm + i}>
                  <SkillsCard
                    img={elm?.img}
                    title={elm.title}
                    desc={elm.desc}
                    skillsVariants={skillsSamplesLists}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </motion.section>

      <section className="latest-works-sec">
        <div className="container py-[42px]">
          <motion.h2
            className="mb-[42px] capitalize text-center font-[600] text-[32px] leading-[42px]"
            variants={textVariantMain}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            latest work
          </motion.h2>
          <motion.div
            className="latest-work-wrapper grid grid-cols-3 gap-6"
            initial="hidden"
            variants={containerVariant}
            whileInView="visible"
            viewport={{ once: true }}
          >
            {ourWorks?.map((elm, i) => {
              return (
                <React.Fragment key={elm + i}>
                  <WorkCard
                    img={elm?.img}
                    title={elm?.title}
                    desc={elm?.desc}
                    workVariants={latestWorkSamplesLists}
                    fun={handleCardClick}
                  />
                </React.Fragment>
              );
            })}
            {isModalOpen && <OurWorkModal fun={closeModal} />}
          </motion.div>
        </div>
      </section>

      <section className="testimonials-sec">
        <div className="container py-[42px]">
          <motion.h2 className="mb-[42px] capitalize text-center font-[600] text-[32px] leading-[42px]" variants={textVariantMain}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}>
            Testimonial
          </motion.h2>
          <motion.div className="testimonials-wrapper grid grid-cols-3 gap-6" initial="hidden"
            variants={containerVariant}
            whileInView="visible"
            viewport={{ once: true }}>
            {testimonialsData?.map((elm, i) => {
              return <TestimonialCard testimonialsData={elm} key={elm + i} testimonialsVariant={testimonialsLists} />;
            })}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
