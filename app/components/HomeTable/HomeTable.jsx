"use client";
import {
  IconCalendar,
  IconCheck,
  IconChevronLeft,
  IconChevronRight,
  IconEye,
  IconPencil,
  IconPrescription,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Drawer from "../Drawer/Drawer";

const HomeTable = ({ tableType }) => {
  const [activePagination, setActivePagination] = useState(1);
  const [drawerOverlay, setDrawerOverlay] = useState(false);
  const [drawerContainer, setDrawerContainer] = useState(false);
  const [patientData, setPatientData] = useState(null);
  const tableData = [
    {
      id: 1,
      name: "mir monir",
      img: "/user.png",
      visted_date: "19/2/25",
      patient_type: "new",
      UID: "012365444",
      phone: "01943254037",
      gender: "male",
      age: "24",
      time: "10.30",
      location: "Dhaka, bangladesh",
      price: "120",
      date: "19/2/25",
      status: "completed",
    },
    {
      id: 2,
      name: "mir monir",
      img: "/user.png",
      visted_date: "19/2/25",
      patient_type: "old",
      UID: "012365444",
      phone: "01943254037",
      gender: "male",
      age: "24",
      time: "10.30",
      location: "Dhaka, bangladesh",
      price: "120",
      date: "19/2/25",
      status: "pending",
    },
    {
      id: 3,
      name: "mir monir",
      img: "/user.png",
      visted_date: "19/2/25",
      patient_type: "old",
      UID: "012365444",
      phone: "01943254037",
      gender: "male",
      age: "24",
      time: "10.30",
      location: "Dhaka, bangladesh",
      price: "120",
      date: "19/2/25",
      status: "cancelled",
    },
    {
      id: 4,
      name: "mir monir",
      img: "/user.png",
      visted_date: "19/2/25",
      patient_type: "new",
      UID: "012365444",
      gender: "male",
      phone: "01943254037",
      age: "24",
      time: "10.30",
      location: "Dhaka, bangladesh",
      price: "120",
      date: "19/2/25",
      status: "completed",
    },
    {
      id: 5,
      name: "mir monir",
      img: "/user.png",
      visted_date: "19/2/25",
      patient_type: "new",
      UID: "012365444",
      phone: "01943254037",
      gender: "male",
      age: "24",
      time: "10.30",
      location: "Dhaka, bangladesh",
      price: "120",
      date: "19/2/25",
      status: "inprogress",
    },
    {
      id: 6,
      name: "mir monir",
      img: "/user.png",
      visted_date: "19/2/25",
      patient_type: "new",
      UID: "012365444",
      gender: "male",
      phone: "01943254037",
      age: "24",
      time: "10.30",
      location: "Dhaka, bangladesh",
      price: "120",
      date: "19/2/25",
      status: "completed",
    },
    {
      id: 8,
      name: "mir monir",
      img: "/user.png",
      visted_date: "19/2/25",
      patient_type: "new",
      UID: "012365444",
      gender: "male",
      phone: "01943254037",
      age: "24",
      time: "10.30",
      location: "Dhaka, bangladesh",
      price: "120",
      date: "19/2/25",
      status: "completed",
    },
    {
      id: 9,
      name: "mir monir",
      img: "/user.png",
      visted_date: "19/2/25",
      patient_type: "new",
      UID: "012365444",
      gender: "male",
      phone: "01943254037",
      age: "24",
      time: "10.30",
      location: "Dhaka, bangladesh",
      price: "120",
      date: "19/2/25",
      status: "completed",
    },
    {
      id: 10,
      name: "mir monir",
      img: "/user.png",
      visted_date: "19/2/25",
      patient_type: "new",
      UID: "012365444",
      gender: "male",
      phone: "01943254037",
      age: "24",
      time: "10.30",
      location: "Dhaka, bangladesh",
      price: "120",
      date: "19/2/25",
      status: "completed",
    },
  ];

  const colors = {
    color_1: "bg-[#AEF28A] text-green-900",
    color_2: "bg-purple-200 text-purple-600",
    color_3: "bg-blue-200 text-blue-600",
    color_4: "bg-red-200 text-red-600",
  };
  const colorsApply = {
    completed: colors.color_1,
    pending: colors.color_2,
    inprogress: colors.color_3,
    cancelled: colors.color_4,
  };
  //pagination
  const pagiationData = [
    {
      id: 1,
      data: "1",
    },
    {
      id: 2,
      data: "2",
    },
    {
      id: 3,
      data: "3",
    },
    {
      id: 4,
      data: "4",
    },
  ];
  //handleDrawer
  const handleDrawer = (condition, id) => {
    setDrawerOverlay(condition);
    setDrawerContainer(condition);
    setPatientData(id);
    console.log(id);
  };
  return (
    <>
      {
        //tableHome
        tableType === "home" && (
          <>
            <div className="w-full hidden sm:block">
              <table className="w-full ">
                <thead className="w-full">
                  <tr className="w-full bg-gray-100 uppercase text-gray-600 font-medium">
                    <td className="py-3 pl-5">Patient Name</td>
                    <td className="py-2 text-center">Patient type</td>
                    <td className="py-2 text-center">status</td>
                    <td className="py-2 text-center">actions</td>
                  </tr>
                </thead>
                <tbody className="w-full ">
                  {tableData.map((data, index) => (
                    <tr
                      key={index}
                      className={`w-full bg-white hover:bg-gray-50 text-gray-600  border-gray-200 ${
                        index !== tableData.length - 1 ? "border-b" : "border-0"
                      }`}
                    >
                      <td className="py-3 pl-5">
                        <div className="flex items-center gap-x-2">
                          <div className="w-9 h-9 rounded-full">
                            <Image
                              src={data.img}
                              width={36}
                              height={36}
                              alt={"images"}
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="capitalize text-gray-600 text-base font-medium">
                              {data.name}
                            </span>
                            <span className="capitalize text-gray-500 text-xs">
                              Visited At:{data.visted_date}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3  text-center">
                        <span className=" uppercase   font-medium ">
                          {data.patient_type}
                        </span>
                      </td>
                      <td className="py-3  text-center">
                        <span
                          className={`font-medium capitalize rounded px-3 py-2 ${
                            colorsApply[data.status]
                          }`}
                        >
                          {data.status}
                        </span>
                      </td>
                      <td className="py-3  text-center">
                        <div className="flex justify-center items-center gap-x-1">
                          <Link href={"#"}>
                            <IconEye
                              onClick={() => handleDrawer(true, data.id)}
                              className="text-red-500"
                            />
                          </Link>
                          <Link href={"#"}>
                            <IconPrescription className="text-blue-500" />
                          </Link>
                          <Link href={"#"}>
                            <IconCheck className="text-green-500" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col gap-y-4 sm:hidden">
              {tableData.map((data, index) => (
                <div
                  key={index}
                  className="w-full px-4 py-5 bg-white shadow-lg text-gray-600 flex flex-col gap-y-4 rounded-xl"
                >
                  <div className="flex justify-between items-center w-full border-b border-gray-200 py-2">
                    <span className="uppercase font-medium">Patient Name</span>
                    <span className="capitalize">{data.name}</span>
                  </div>
                  <div className="flex justify-between items-center w-full border-b border-gray-200 py-2">
                    <span className="uppercase font-medium">visiteDate</span>
                    <span className="capitalize">{data.visted_date}</span>
                  </div>
                  <div className="flex justify-between items-center w-full border-b border-gray-200 py-2">
                    <span className="uppercase font-medium">PatentType</span>
                    <span className="capitalize">{data.patient_type}</span>
                  </div>
                  <div className="flex justify-between items-center w-full border-b border-gray-200 py-2">
                    <span className="uppercase font-medium">Status</span>
                    <span
                      className={`font-medium rounded px-3 py-2 ${
                        colorsApply[data.status]
                      }`}
                    >
                      {data.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center w-full border-b border-gray-200 py-2">
                    <span className="uppercase font-medium">Actons</span>
                    <div className="flex justify-center items-center gap-x-1">
                      <Link href={"#"}>
                        <IconEye
                          onClick={() => handleDrawer(true, data.id)}
                          className="text-red-500"
                        />
                      </Link>
                      <Link href={"#"}>
                        <IconPrescription className="text-blue-500" />
                      </Link>
                      <Link href={"#"}>
                        <IconCheck className="text-green-500" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex max-[400px]:flex-col gap-y-3 flex-row items-center justify-between mt-3">
              <div className="text-gray-600">10 of 100 entries</div>
              <div className="flex items-center gap-x-2">
                <IconChevronLeft className="text-gray-600" />
                <div className="flex items-center gap-x-1">
                  {pagiationData.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setActivePagination(item.id)}
                      className={`w-9 h-9 cursor-pointer rounded hover:bg-green-600 hover:text-white flex justify-center items-center ${
                        activePagination === item.id
                          ? "bg-green-600 text-white"
                          : "text-gray-600 bg-gray-200"
                      }`}
                    >
                      <span>{item.data}</span>
                    </div>
                  ))}
                </div>
                <IconChevronRight className="text-gray-600" />
              </div>
            </div>
            <Drawer
              drawerType={"right"}
              containerWidth={" w-3/4 2xl:w-1/2"}
              containerColor={"bg-white"}
              close={() => handleDrawer(false)}
              overlay={drawerOverlay}
              container={drawerContainer}
            >
              {(() => {
                const data = tableData.find((item) => item.id === patientData);
                if (!data) return null;
                return (
                  <div className=" max-w-[700px] mx-auto mt-40 bg-white shadow-lg rounded-2xl py-8">
                    <div className="flex gap-x-2 items-center border-b border-gray-200 pb-6 px-8">
                      <div className="w-18 h-18 rounded-full bg-green-200 flex justify-center items-center">
                        <span className="text-green-900 uppercase text-2xl font-medium">
                          {data.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex flex-col gap-y-1">
                        <span className="capitalize text-gray-600 font-medium text-md md:text-xl">
                          {data?.name}
                        </span>
                        <span className="capitalize text-gray-600  text-md">
                          UID{data?.UID}
                        </span>
                      </div>
                    </div>
                    <div className="mt-5 w-full capitalize flex flex-wrap justify-between gap-y-4 px-8">
                      <div>
                        <div className="flex flex-col gap-y-4 items-start w-full text-gray-600 ">
                          <div className="flex flex-col gap-y-1 ">
                            <span className="capitalize font-medium text-md md:text-xl">
                              PatientName
                            </span>
                            <span className="text-sm md:text-base">
                              {data.name}
                            </span>
                          </div>
                          <div className="flex flex-col gap-y-1 ">
                            <span className="capitalize font-medium text-md md:text-xl">
                              PatientType
                            </span>
                            <span className="text-sm md:text-base">
                              {data.patient_type}
                            </span>
                          </div>
                          <div className="flex flex-col gap-y-1 ">
                            <span className="capitalize font-medium text-md md:text-xl">
                              PhoneNumber
                            </span>
                            <span className="text-sm md:text-base">
                              {data?.phone}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col gap-y-4   items-start w-full text-gray-600 ">
                          <div className="flex flex-col gap-y-1 ">
                            <span className="capitalize font-medium text-md md:text-xl">
                              Gender
                            </span>
                            <span className="text-sm md:text-base">
                              {data?.gender}
                            </span>
                          </div>
                          <div className="flex flex-col gap-y-1 ">
                            <span className="capitalize font-medium text-md md:text-xl">
                              age
                            </span>
                            <span className="text-sm md:text-base">
                              {data?.age}
                            </span>
                          </div>
                          <div className="flex flex-col gap-y-1 ">
                            <span className="capitalize font-medium text-md md:text-xl">
                              visitingdate
                            </span>
                            <span className="text-sm md:text-base">
                              {data?.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col gap-y-4  items-start w-full text-gray-600 ">
                          <div className="flex flex-col gap-y-1 ">
                            <span className="capitalize font-medium text-md md:text-xl">
                              time
                            </span>
                            <span className="text-sm md:text-base">
                              {data?.time}
                            </span>
                          </div>
                          <div className="flex flex-col gap-y-1 ">
                            <span className="capitalize font-medium text-md md:text-xl">
                              location
                            </span>
                            <span className="text-sm md:text-base">
                              {data?.location}
                            </span>
                          </div>
                          <div className="flex flex-col gap-y-1 ">
                            <span className="capitalize font-medium text-md md:text-xl">
                              price
                            </span>
                            <span className="text-sm md:text-base">
                              {data?.price} BDT
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </Drawer>
          </>
        )
      }
      
      {
        //tablefor getappointment
      tableType === "appointment" && (
        <>
          <div className="w-full hidden xl:block">
            <table className="w-full ">
              <thead className="w-full">
                <tr className="w-full bg-gray-100 uppercase text-gray-600 font-medium">
                  <td className="py-3 pl-5">Patient Name</td>
                  <td className="py-2 ">UID</td>
                  <td className="py-2 pr-4">gender</td>
                  <td className="py-2 pr-6">AGE</td>
                  <td className="py-2 pr-6">date</td>
                  <td className="py-2 pr-4">time</td>
                  <td className="py-2 ">location</td>
                  <td className="py-2 ">price</td>
                  <td className="py-2 text-center">status</td>
                  <td className="py-2 text-center">actions</td>
                </tr>
              </thead>
              <tbody className="w-full ">
                {tableData.map((data, index) => (
                  <tr
                    key={index}
                    className={`w-full bg-white capitalize hover:bg-gray-50 text-gray-600  border-gray-200 ${
                      index !== tableData.length - 1 ? "border-b" : "border-0"
                    }`}
                  >
                    <td className="py-3 pl-5">
                      <div className="flex items-center gap-x-2">
                        <div className="w-9 h-9 rounded-full flex justify-center items-center bg-green-200">
                          <span className="text-md text-green-600 font-medium uppercase">
                            {data.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="capitalize text-gray-600 text-base font-medium">
                            {data.name}
                          </span>
                          <span className="capitalize text-gray-500 text-xs">
                            Visited At:{data.visted_date}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3  ">
                      <span className=" ">{data.UID}</span>
                    </td>
                    <td className="py-3  ">
                      <span className=" ">{data.gender}</span>
                    </td>
                    <td className="py-3  ">
                      <span className=" ">{data.age}</span>
                    </td>
                    <td className="py-3  ">
                      <span className=" ">{data.date}</span>
                    </td>
                    <td className="py-3  ">
                      <span className=" ">{data.time}</span>
                    </td>
                    <td className="py-3  ">
                      <span className=" ">{data.location}</span>
                    </td>
                    <td className="py-3  ">
                      <span className=" ">{data.price}</span>
                    </td>
                    <td className="py-3  text-center">
                      <span
                        className={`font-medium rounded px-3 py-2 ${
                          colorsApply[data.status]
                        }`}
                      >
                        {data.status}
                      </span>
                    </td>
                    <td className="py-3  text-center">
                      <div className="flex justify-center items-center gap-x-1">
                        <Link href={"#"}>
                          <IconCalendar className="text-orange-500" />
                        </Link>
                        <Link href={"#"}>
                          <IconPencil className="text-blue-500" />
                        </Link>
                        <Link href={"#"}>
                          <IconPrescription className="text-blue-500" />
                        </Link>
                        <Link href={"#"}>
                          <IconCheck className="text-green-500" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col gap-y-4 xl:hidden">
            {tableData.map((data, index) => (
              <div
                key={index}
                className="w-full px-4 py-5 bg-white shadow-lg text-gray-600 flex flex-col gap-y-4 rounded-xl"
              >
                <div className="flex justify-between items-center w-full border-b border-gray-200 py-2">
                  <span className="uppercase font-medium">Patient Name</span>
                  <span className="capitalize">{data.name}</span>
                </div>
                <div className="flex justify-between items-center w-full border-b border-gray-200 py-2">
                  <span className="uppercase font-medium">visiteDate</span>
                  <span className="capitalize">{data.visted_date}</span>
                </div>
                <div className="flex justify-between items-center w-full border-b border-gray-200 py-2">
                  <span className="uppercase font-medium">UID</span>
                  <span className="capitalize">{data.UID}</span>
                </div>
                    <div className="flex justify-between items-center w-full border-b border-gray-200 py-2">
                  <span className="uppercase font-medium">gender</span>
                  <span className="capitalize">{data.gender}</span>
                </div>
                    <div className="flex justify-between items-center w-full border-b border-gray-200 py-2">
                  <span className="uppercase font-medium">date</span>
                  <span className="capitalize">{data.date}</span>
                </div>
                    <div className="flex justify-between items-center w-full border-b border-gray-200 py-2">
                  <span className="uppercase font-medium">time</span>
                  <span className="capitalize">{data.time}</span>
                </div>
                    <div className="flex justify-between items-center w-full border-b border-gray-200 py-2">
                  <span className="uppercase font-medium">location</span>
                  <span className="capitalize">{data.location}</span>
                </div>
                    <div className="flex justify-between items-center w-full border-b border-gray-200 py-2">
                  <span className="uppercase font-medium">price</span>
                  <span className="capitalize">{data.price}</span>
                </div>
                <div className="flex justify-between items-center w-full border-b border-gray-200 py-2">
                  <span className="uppercase font-medium">Status</span>
                  <span
                    className={`font-medium rounded px-3 py-2 ${
                      colorsApply[data.status]
                    }`}
                  >
                    {data.status}
                  </span>
                </div>
                <div className="flex justify-between items-center w-full border-b border-gray-200 py-2">
                  <span className="uppercase font-medium">Actons</span>
                   <div className="flex justify-center items-center gap-x-1">
                        <Link href={"#"}>
                          <IconCalendar className="text-orange-500" />
                        </Link>
                        <Link href={"#"}>
                          <IconPencil className="text-blue-500" />
                        </Link>
                        <Link href={"#"}>
                          <IconPrescription className="text-blue-500" />
                        </Link>
                        <Link href={"#"}>
                          <IconCheck className="text-green-500" />
                        </Link>
                      </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex max-[400px]:flex-col gap-y-3 flex-row items-center justify-between mt-3">
            <div className="text-gray-600">10 of 100 entries</div>
            <div className="flex items-center gap-x-2">
              <IconChevronLeft className="text-gray-600" />
              <div className="flex items-center gap-x-1">
                {pagiationData.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActivePagination(item.id)}
                    className={`w-9 h-9 cursor-pointer rounded hover:bg-green-600 hover:text-white flex justify-center items-center ${
                      activePagination === item.id
                        ? "bg-green-600 text-white"
                        : "text-gray-600 bg-gray-200"
                    }`}
                  >
                    <span>{item.data}</span>
                  </div>
                ))}
              </div>
              <IconChevronRight className="text-gray-600" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HomeTable;
