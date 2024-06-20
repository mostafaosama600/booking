"use client";
import {
  BadgeAlert,
  BadgeCheck,
  CalendarCheck,
  GraduationCap,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import BookAppointment from "./BookAppointment";

function DoctorDetail({ doctor }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg">
        <div>
          <Image
            src={doctor?.attributes?.image?.data?.attributes?.url}
            width={200}
            height={200}
            alt="doctor-image"
            className="rounded-lg w-full h-[280px] object-cover"
          />
        </div>
        <div className="col-span-2 mt-5 flex md:px-10 flex-col gap-3 items-baseline">
          <h2 className="font-bold text-2xl">{doctor?.attributes?.name}</h2>
          <h2 className="flex gap-2 text-gray-500 text-md">
            <GraduationCap />
            <span>{doctor?.attributes?.year_of_experiance} of Experience</span>
          </h2>
          <h2 className="text-md flex gap-2 text-gray-500">
            <MapPin />
            <span>{doctor?.attributes?.address}</span>
          </h2>
          {doctor?.attributes?.categories?.data[0] && (
            <h2 className="text-[10px] bg-blue-100 p-1 rounded-full px-2 text-blue-500">
              {doctor?.attributes?.categories.data[0].attributes?.name}
            </h2>
          )}

          <BookAppointment doctor={doctor} />
        </div>

        {/* About Doctor  */}
      </div>
      <div className="p-3 border-[1px] rounded-lg mt-5">
        <div className="w-full my-2">
          <p className="mb-2">
            <span className="font-bold me-3">About Me:</span>
            {doctor.attributes.about[0].children[0].text}
          </p>
          <p className="mb-2 flex items-center gap-2">
            {doctor.attributes.premium ? (
              <BadgeCheck width={20} height={20} color="green" />
            ) : (
              <BadgeAlert width={20} height={20} color="yellow" />
            )}
            <span className="font-bold me-3">Premium Doctor</span>
          </p>
          <div className="flex items-center gap-3">
            <p className="flex items-center font-bold">
              <span className="font-bold me-3">
                <CalendarCheck width={20} height={20} />
              </span>
              {doctor.attributes.start_time}
            </p>
            <p className="flex items-center font-bold">To</p>
            <p className="flex items-center font-bold">
              {doctor.attributes.emd_time}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorDetail;
