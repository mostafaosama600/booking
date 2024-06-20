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
      {/* Hero Section  */}
      <Hero />
      {/* Search bar + Categories  */}
      <CategorySearch />
      {/* Popular Doctor List  */}
      <DoctorList doctorList={doctorList} className={"lg:grid-cols-4"} />
    </div>
  );
}
