import { iconSuccess } from "@/assets";
import Image from "next/image";
import React from "react";

const NotificationToast = ({ msg, showToast }) => {
  return (
    <div
      className={`right-[-300px] font-[500] text-[18px] flex items-center text-dark-green gap-3 leading-[27px] rounded-md z-50 bg-light-green w-fit py-6 px-4 fixed shadow-[rgba(0,0,0,0.04)_0px_3px_5px] ${
        showToast ? "right-[30px] bottom-[30px] transition-all" : ""
      }`}
    >
      <Image src={iconSuccess} alt="success-img" className="w-10 h-10" />
      {msg}
    </div>
  );
};

export default NotificationToast;
