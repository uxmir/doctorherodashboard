"use client";
import React from "react";
import { PropTypes } from "prop-types";
const Button = ({ children, Icon,event }) => {
  return (
    <>
      <div 
      onClick={event}
      className="px-4 py-2 bg-[#28629C] flex justify-center items-center gap-x-1 font-medium capitalize rounded-[8px] text-xs sm:text-base text-white cursor-pointer">
        {Icon && <Icon size={20} className="text-white" />}
        {children}
      </div>
    </>
  );
};
Button.propTypes = {
  Icon: PropTypes.bool
};
Button.defaultProps = {
  Icon: false,
};
export default Button;
