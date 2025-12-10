"use client";
import React, { useState } from "react";
import {
  IconPrescription,
  IconUsers,
  IconHome,
  IconLayoutSidebarRightCollapse,
} from "@tabler/icons-react";
import { useSideBarLayout } from "../SidebarProvider/SidebarProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Drawer from "../Drawer/Drawer";
const SideBar = () => {
  const [activeParent, setActiveParent] = useState(1);
  const {
    isSidebarOpen,
    setIsSidebarOpen,
    isResponsiveSideBar,
    setIsResponsiveSideBar,
  } = useSideBarLayout();
  const pathName = usePathname();
  const sideBarData = [
    {
      id: 1,
      icon: IconHome,
      subItems: [
        {
          id: 1,
          data: "Home",
          link: "/",
        },
        {
          id: 2,
          data: "Get Appontment",
          link: "/appointment",
        },
      ],
    },
    {
      id: 2,
      icon: IconUsers,
      subItems: [
        {
          id: 1,
          data: "Home",
          link: "/",
        },
        {
          id: 2,
          data: "Get Appontment",
          link: "/appointment",
        },
      ],
    },
    {
      id: 3,
      icon: IconPrescription,
      subItems: [
        {
          id: 1,
          data: "Home",
          link: "/",
        },
        {
          id: 2,
          data: "Get Appontment",
          link: "/appointment",
        },
      ],
    },
  ];
  //hnadling activeParent
  const isActiveParent = (id) => {
    setActiveParent(id);
  };
  const toggleSubModule = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  //handle Drawer

  return (
    <>
      <aside className="fixed top-0 z-[9999] h-full hidden lg:block">
        <div className="flex h-full">
          {/*====parentModule====== */}
          <div className="w-16 h-full bg-[#c7dafc]/30 rounded-[12px] px-3 py-8 flex flex-col items-center">
            <IconLayoutSidebarRightCollapse
              onClick={() => toggleSubModule()}
              className="cursor-pointer text-gray-600"
            />
            <div className="mt-4 flex flex-col gap-y-4">
              {sideBarData?.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    onClick={() => isActiveParent(item.id)}
                    className={`w-9 h-9 rounded-full hover:bg-[#28629C] group flex items-center justify-center ${
                      activeParent === item.id ? "bg-[#28629C]" : ""
                    }`}
                  >
                    <Icon
                      size={16}
                      className={`group-hover:text-white cursor-pointer ${
                        activeParent === item.id
                          ? "text-white"
                          : "text-gray-600"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/*======subModule=====*/}
          <div
            className={` transition-all duration-500 bg-white h-full  py-8 ${
              isSidebarOpen === true ? "w-54 px-3" : "w-0 px-0"
            }`}
          >
            <div className="flex flex-col gap-y-1">
              <span
                className={`pb-4 text-2xl font-medium text-blue-700 ${
                  isSidebarOpen ? "block" : "hidden"
                }`}
              >
                Doctors Logo
              </span>
              {sideBarData
                ?.find((item) => item.id === activeParent)
                .subItems?.map((data) => (
                  <Link key={data.id} href={data.link}>
                    <div
                      className={`px-2 py-[6px] group hover:text-white text-sm font-medium hover:bg-[#28629C] rounded-[6px] ${
                        pathName === data.link ? "bg-[#28629C]" : "bg-none"
                      }
                      ${isSidebarOpen === false ? "hidden" : "block"}`}
                    >
                      <span
                        className={` group-hover:text-white ${
                          pathName === data.link
                            ? "text-white"
                            : "text-gray-600"
                        }`}
                      >
                        {data.data}
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </aside>
      {/*=====responsiveSideBar====== */}
      <div>
        <div
          onClick={() => setIsResponsiveSideBar(false)}
          className={`w-full h-full fixed top-0 bg-black/60 z-[9999] ${
            isResponsiveSideBar === true ? "block" : "hidden"
          }`}
        ></div>
        <aside
          className={` transition-all duration-500 fixed top-0 h-full z-[9999] ${
            isResponsiveSideBar === true ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-full">
            {/*====parentModule====== */}
            <div className="w-16 h-full bg-[#c7dafc] rounded-[12px] px-3 py-8 flex flex-col items-center">
              <IconLayoutSidebarRightCollapse
                onClick={() => toggleSubModule()}
                className="cursor-pointer text-gray-600"
              />
              <div className="mt-4 flex flex-col gap-y-4">
                {sideBarData?.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      onClick={() => isActiveParent(item.id)}
                      className={`w-9 h-9 rounded-full hover:bg-[#28629C] group flex items-center justify-center ${
                        activeParent === item.id ? "bg-[#28629C]" : ""
                      }`}
                    >
                      <Icon
                        size={16}
                        className={`group-hover:text-white cursor-pointer ${
                          activeParent === item.id
                            ? "text-white"
                            : "text-gray-600"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/*======subModule=====*/}
            <div
              className={` transition-all duration-500 bg-white h-full  py-8 ${
                isSidebarOpen === true ? "w-54 px-3" : "w-0 px-0"
              }`}
            >
              <div className="flex flex-col gap-y-1">
                <span
                  className={`pb-4 text-2xl font-medium text-blue-700 ${
                    isSidebarOpen ? "block" : "hidden"
                  }`}
                >
                  Doctors Logo
                </span>
                {sideBarData
                  ?.find((item) => item.id === activeParent)
                  .subItems?.map((data) => (
                    <Link key={data.id} href={data.link}>
                      <div
                        className={`px-2 py-[6px] group hover:text-white text-sm font-medium hover:bg-[#28629C] rounded-[6px] ${
                          pathName === data.link ? "bg-[#28629C]" : "bg-none"
                        }
                      ${isSidebarOpen === false ? "hidden" : "block"}`}
                      >
                        <span
                          className={` group-hover:text-white ${
                            pathName === data.link
                              ? "text-white"
                              : "text-gray-600"
                          }`}
                        >
                          {data.data}
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default SideBar;
