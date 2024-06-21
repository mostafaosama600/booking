"use client";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import GlobalApi from "./_utils/GlobalApi";
import useFetchData from "./_hooks/useFetchData";

export default function Home() {
  const { data: doctorList } = useFetchData(GlobalApi.getDoctorList);

  return (
    <div>
      <Hero />
      <CategorySearch />
      <DoctorList doctorList={doctorList} className={"lg:grid-cols-4"} />
    </div>
  );
}
