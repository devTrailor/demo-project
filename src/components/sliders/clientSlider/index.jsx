"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";

const ClientSlider = ({ clientLogos }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {clientLogos?.map((elm, i) => {
        return (
          <React.Fragment key={elm + i}>
            <Image
              src={elm?.img}
              alt="logo-img"
              className="h-[38px] w-auto my-0 mx-auto"
            />
          </React.Fragment>
        );
      })}
    </Slider>
  );
};

export default ClientSlider;
