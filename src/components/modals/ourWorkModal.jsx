import React from "react";

const OurWorkModal = ({ fun, handleOutsideClick }) => {
  return (
    <div className="modal-our-work fixed top-0 left-0 w-full h-full bg-[#000000db] z-[999]">
      <div className="inner flex items-center justify-center h-screen relative">
        <span
          className="close-button top-[40px] right-[40px] absolute text-white text-[50px] cursor-pointer"
          onClick={() => fun()}
        >
          &times;
        </span>
        <div
          className="content font-[600] text-[42px]"
          style={{ color: "red" }}
        >
          Work Modal
        </div>
      </div>
    </div>
  );
};

export default OurWorkModal;
