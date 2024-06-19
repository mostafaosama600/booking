"use client";
import DoctorList from "@/app/_components/DoctorList";
import useFetchData from "@/app/_hooks/useFetchData";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";

function Search({ params }) {
  useEffect(() => {
    console.log(params?.cname);
  }, [params?.cname]);

  const { data: doctorList } = useFetchData(
    () => GlobalApi.getDoctorByCategory(params?.cname),
    [params?.cname]
  );

  return (
    <div className="mt-5">
      <DoctorList
        heading={params.cname}
        doctorList={doctorList}
        className={"lg:grid-cols-3"}
      />
    </div>
  );
}

export default Search;
