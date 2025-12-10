"use client";
import React from "react";
import { PropTypes } from "prop-types";
import { IconX } from "@tabler/icons-react";
const Drawer = ({
  overlay,
  container,
  children,
  close,
  containerWidth,
  drawerType,
  containerColor,
}) => {
  const positionTransform = {
    right_visible: "translate-x-0",
    right_hidden: "translate-x-full",
    left_visible: "translate-x-0",
    left_hidden: "-translate-x-full",
  };
 const dynamicClasses= `${containerColor} ${containerWidth}`
  return (
    <>
      <div
        onClick={close}
        className={`w-full h-full fixed top-0 left-0 right-0 bg-black/60 z-[9999999] ${
          overlay === true ? "block" : "hidden"
        }`}
      ></div>
      {drawerType === "right" && (
        <div
          className={`${dynamicClasses}  transition-all duration-500 h-full fixed top-0 right-0  z-[9999999] ${
            container === true
              ? `${positionTransform.right_visible}`
              : `${positionTransform.right_hidden}`
          }  `}
        >
          {children}
        </div>
      )}
      {drawerType === "left" && (
        <div
          className={`${dynamicClasses}  transition-all duration-500 h-full fixed top-0 left-0  z-[9999999] ${
            container === true
              ? `${positionTransform.left_visible}`
              : `${positionTransform.left_hidden}`
          }  `}
        > <IconX onClick={close} className="absolute top-5 right-5 text-gray-600"/>
          {children}
        </div>
      )}
    </>
  );
};
Drawer.propTypes = {
  containerWidth: PropTypes.string,
  containerColor:PropTypes.string,
};
Drawer.defaultProps = {
  containerWidth: "w-1/2",
  containerColor:"bg-white",
};
export default Drawer;
