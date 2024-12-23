"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function DoctorSuggestionList() {
  const [doctorList, setDoctorList] = useState([]);
  useEffect(() => {
    getDoctorList();
  }, []);
  const getDoctorList = () => {
    GlobalApi.getDoctorList().then((resp) => {
      setDoctorList(resp.data.data);
    });
  };
  return (
    <div className=" p-4 border-[1px] mt-5 md:ml-5 rounded-lg ">
      <h2 className="mb-3 font-bold">Suggestions</h2>

      {doctorList.map((doctor, index) => (
        <Link
          key={index}
          href={"/details/" + doctor.id}
          className=" mb-4 p-3 shadow-sm w-full 
            cursor-pointer hover:bg-slate-100
            rounded-lg flex items-center gap-3"
        >
          <Image
            src={doctor.attributes?.image?.data?.attributes?.url}
            width={70}
            height={70}
            alt="doctor image"
            className="w-[70px] h-[70px] rounded-full object-cover"
          />
          <div className="mt-3 flex-col flex gap-1 items-baseline">
            <h2 className="text-[10px] bg-blue-100 p-1 rounded-full px-2 text-blue-500">
              {doctor.attributes.categories?.data[0]?.attributes?.name}
            </h2>
            <h2 className="font-medium text-sm">{doctor.attributes.name}</h2>
            <h2 className="text-blue-500 text-xs flex gap-2">
              {/* <GraduationCap/> */}
              {doctor.attributes.year_of_experiance} year of experiance
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default DoctorSuggestionList;
