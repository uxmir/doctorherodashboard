"use client";
import React from "react";
import { useSideBarLayout } from "../SidebarProvider/SidebarProvider";

const MainContent = ({ children }) => {
  const { isSidebarOpen } = useSideBarLayout();
  return (
    <div
      className={`transition-all duration-500 flex-1 pt-30 pr-5 lg:pr-8 ${
        isSidebarOpen ? " pl-5 lg:pl-76" : " pl-5 lg:pl-20"
      }`}
    >
      {children}
    </div>
  );
};

export default MainContent;
