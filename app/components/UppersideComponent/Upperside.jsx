"use client";
import React, { useState } from "react";
import { useSideBarLayout } from "../SidebarProvider/SidebarProvider";
import Button from "../Button/Button";
import Drawer from "../Drawer/Drawer";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
import Image from "next/image";
import { IconMenu, IconPlus, IconSearch } from "@tabler/icons-react";

const Upperside = () => {
  const { isSidebarOpen,isResponsiveSideBar,setIsResponsiveSideBar } = useSideBarLayout();
  const [drawerOverlay, setDrawerOverlay] = useState(false);
  const [drawerContainer, setDrawerContainer] = useState(false);
  const [drawerContent, setDrawerContent] = useState("");
  const [inputModal, setInputModal] = useState(false);
  const [addDropdown, setAddDropdown] = useState(false);
  const handleDrawer = (condition, content) => {
    setDrawerOverlay(condition);
    setDrawerContainer(condition);
    setDrawerContent(content);
  };
  return (
    <>
      <div
        className={`w-full flex items-center h-[87px] py-5 pr-5 lg:pr-8 bg-white fixed top-0 z-[9999] ${
          isSidebarOpen ? "pl-5 lg:pl-76" : " pl-5 lg:pl-20"
        }`}
      >
        <div className="w-full flex justify-between items-center ">
          <div className=" hidden xl:block  w-[432px]">
            <Input
              labelFor={"search"}
              inputName={"search"}
              inputType={"text"}
              placeHolder={"Search By name "}
              Icon={IconSearch}
            />
          </div>
       <div className="flex gap-x-2 items-center">
            <IconMenu
              onClick={() => setIsResponsiveSideBar(true)}
              className="text-gray-500 block lg:hidden"
            />
            <IconSearch
              onClick={() => setInputModal(true)}
              className="text-gray-500 block  xl:hidden"
            />
          </div>
          <div className="flex gap-x-5 items-center">
            <div className=" hidden lg:flex gap-x-6">
              <Button event={() => handleDrawer(true, "rx")} Icon={IconPlus}>
                add RX
              </Button>
              <Button
                Icon={IconPlus}
                event={() => handleDrawer(true, "appointment")}
              >
                Get Appointment
              </Button>
              <Button
                Icon={IconPlus}
                event={() => handleDrawer(true, "patient")}
              >
                Add patient
              </Button>
            </div>
            <div className="lg:hidden relative">
              <Button
                event={() => setAddDropdown(!addDropdown)}
                Icon={IconPlus}
              >
                Quik add
              </Button>
              <div
                className={` max-[400px]:w-[200px] w-[250px] md:w-[300px] transition-all duration-500 bg-white px-4 py-4 rounded-2xl absolute top-12  -right-5  shadow-2xl flex flex-col gap-y-3 ${
                  addDropdown === true
                    ? "-translate-y-0"
                    : "-translate-y-[180%]"
                }`}
              >
                <Button
                  event={() => {
                    handleDrawer(true, "rx");
                    setAddDropdown(false);
                  }}
                  Icon={IconPlus}
                >
                  add RX
                </Button>
                <Button
                  Icon={IconPlus}
                  event={() => {
                    handleDrawer(true, "appointment");
                    setAddDropdown(false);
                  }}
                >
                  Get Appointment
                </Button>
                <Button
                  Icon={IconPlus}
                  event={() => {
                    handleDrawer(true, "patient");
                    setAddDropdown(false);
                  }}
                >
                  Add patient
                </Button>
              </div>
            </div>
            <div className="flex gap-x-2">
              <div className="w-9 h-9 rounded-full">
                <Image
                  src={"/user.png"}
                  alt="image"
                  width={36}
                  height={36}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col max-[370px]:hidden text-gray-600">
                <span className="capitalize font-medium text-sm">John due</span>
                <span className="text-gray-500 text-xs">John @gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====rxdrawer=====*/}
      <Drawer
      drawerType={'right'}
      containerWidth={'w-1/2'}
      containerColor={'bg-white'}
        close={() => handleDrawer(false)}
        overlay={drawerOverlay}
        container={drawerContainer}
      >
        {drawerContent === "patient" && <p>patient</p>}
        {drawerContent === "appointment" && <p>appointment</p>}
        {drawerContent === "rx" && <p>rx</p>}
      </Drawer>
      {/*====inputModal==== */}

      {inputModal === true && (
        <Modal close={() => setInputModal(false)}>
          <div className=" max-[360px]:w-[250px] w-[300px] sm:w-[500px] my-6">
            <Input
              labelFor={"search"}
              inputName={"search"}
              inputType={"text"}
              placeHolder={"Search By name "}
              Icon={IconSearch}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Upperside;
