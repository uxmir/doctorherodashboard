"use client";
import React, { useState } from "react";
import OverviewCard from "../components/OverviewCard/OverviewCard";
import HomeTable from "../components/HomeTable/HomeTable";
import CalendarComponent from "../components/Calender/Calender";
import Input from "../components/Input/Input";
import Modal from "../components/Modal/Modal";
import {
  IconClipboardPlus,
  IconFlask,
  IconTrendingUp3,
  IconUsers,
  IconSearch,
} from "@tabler/icons-react";
import SelectInput from "../components/SelectInput/SelectInput";
const page = () => {
  const [showData, setShowData] = useState("patient");
  const [inputModal, setInputModal] = useState(false);
  const [dataDropdown, setDataDropdown] = useState(false);
  const [inputDropdown, setInputDropdown] = useState(true);
  const handleData = (data) => {
    setShowData(data);
  };
  const selectData = [
    {
      id: 1,
      data: "Admin",
    },
    {
      id: 2,
      data: "Vendor",
    },
    {
      id: 3,
      data: "User",
    },
  ];
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-4 gap-y-6">
          <OverviewCard
            Icon={IconUsers}
            border={"border-[#28629C]"}
            bgColor={"bg-linear-to-br from-[#F4F9FE] to-[#B0D2F9]"}
            iconBg={"bg-[#28629C]"}
            text={"total appointment"}
            amount={20}
          />
          <OverviewCard
            Icon={IconClipboardPlus}
            border={"border-[#9C7D28]"}
            bgColor={"bg-linear-to-br from-[#FBF9F4] to-[#F8E8BD]"}
            iconBg={"bg-[#9C7D28]"}
            text={"pending tasks"}
            amount={20}
          />
          <OverviewCard
            Icon={IconClipboardPlus}
            border={"border-[#289C36]"}
            bgColor={"bg-linear-to-br from-[#E8EEE9] to-[#D2F6D6]"}
            iconBg={"bg-[#289C36]"}
            text={"completed tasks"}
            amount={20}
          />
          <OverviewCard
            Icon={IconClipboardPlus}
            border={"border-[#77289C]"}
            bgColor={"bg-linear-to-br from-[#FBF2FF] to-[#E4C0F5]"}
            iconBg={"bg-[#77289C]"}
            text={"cancelled tasks"}
            amount={20}
          />
        </div>
        {/*=====tableData====== */}
        <section className="mt-12">
          <div className="py-6 px-6 w-full hidden xl:flex justify-between items-center bg-white">
            <div className="  2xl:w-[432px]">
              <Input
                labelFor={"search"}
                inputName={"search"}
                inputType={"text"}
                placeHolder={"Search By name "}
                Icon={IconSearch}
              />
            </div>
            <div className="flex   items-center gap-x-3 mr-5">
              <CalendarComponent />
              <SelectInput
                selectLabel={"Provider"}
                SelectData={selectData}
                width={" w-[100px] 2xl:w-[130px]"}
              />
              <SelectInput
                selectLabel={"Provider"}
                SelectData={selectData}
                width={" w-[100px] 2xl:w-[130px]"}
              />
              <SelectInput
                selectLabel={"Provider"}
                SelectData={selectData}
                width={" w-[100px] 2xl:w-[130px]"}
              />
              <div className="flex gap-x-2">
                <button
                  onClick={() => handleData("patient")}
                  className={`px-4 py-2  cursor-pointer  rounded-lg ${
                    showData === "patient"
                      ? "bg-[#28629C] text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  Patient
                </button>
                <button
                  onClick={() => handleData("report")}
                  className={`px-4 py-2  cursor-pointer rounded-lg ${
                    showData === "report"
                      ? "bg-[#28629C] text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  Report
                </button>
              </div>
            </div>
          </div>
          <div className=" py-6 px-4 md:px-6 w-full rounded-2xl mb-5  xl:hidden flex flex-col gap-4 sm:flex-row justify-between items-center bg-white">
            <IconSearch onClick={() => setInputModal(true)} />
                 <div className="flex w-full flex-col gap-y-4 sm:flex-row  items-center gap-x-3">
               <CalendarComponent width={'w-60 sm:w-auto'}/>
              <SelectInput
                selectLabel={"Provider"}
                SelectData={selectData}
                width={" w-full"}
              />
              <SelectInput
                selectLabel={"Provider"}
                SelectData={selectData}
                width={" w-full"}
              />
              <SelectInput
                selectLabel={"Provider"}
                SelectData={selectData}
                width={" w-full"}
              />
            </div>
            <div className="flex w-full sm:w-auto items-center gap-x-2">
              <div className="relative w-full">
                <button
                  onClick={() => setDataDropdown(!dataDropdown)}
                  className={`px-4 py-2 w-full cursor-pointer  rounded-lg bg-[#28629C] text-white`}
                >
                  DataFilter
                </button>
                {/* datafilterdropdown*/}
                <div
                  className={`flex flex-col transition-all duration-900 bg-white shadow-md gap-y-2 w-full z-[9999999] absolute top-10 py-2 px-2 rounded ${
                    dataDropdown === true
                      ? "right-0"
                      : "right-100 sm:right-200 lg:right-250"
                  }`}
                >
                  <button
                    onClick={() => {
                      handleData("patient");
                      setDataDropdown(false);
                    }}
                    className={`px-4 py-2  cursor-pointer  rounded-lg ${
                      showData === "patient"
                        ? "bg-[#28629C] text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    Patient
                  </button>
                  <button
                    onClick={() => {
                      handleData("report");
                      setDataDropdown(false);
                    }}
                    className={`px-4 py-2  cursor-pointer rounded-lg ${
                      showData === "report"
                        ? "bg-[#28629C] text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    Report
                  </button>
                </div>
              </div>
            </div>
          </div>
          {showData === "patient" && <HomeTable tableType={"appointment"} />}
          {showData === "report" && <div>mirmonir</div>}
        </section>
      </div>
      {/*======searchIconinresponsive===== */}

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

export default page;
