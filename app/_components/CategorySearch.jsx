"use client";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";
import Link from "next/link";
import useFetchData from "../_hooks/useFetchData";

function CategorySearch() {
  const { data: categoryList } = useFetchData(GlobalApi.getCategory);

  return (
    <div className="mb-10 items-center px-5 flex flex-col gap-2">
      <h2
        className="font-bold
        text-4xl tracking-wide"
      >
        Search <span className="text-blue-500">Doctors</span>
      </h2>
      <h2 className="text-gray-500">
        Search Your Doctor and Book Appointment in one click
      </h2>

      {/* Display List of Category  */}
      <div className="grid grid-cols-2 mt-5 md:grid-cols-4 lg:grid-cols-6 ">
        {categoryList.length > 0
          ? categoryList.map(
              (item, index) =>
                index < 6 && (
                  <Link
                    href={"/search/" + item.attributes.name}
                    key={index}
                    className="flex 
          flex-col text-center items-center
          p-5 bg-blue-50 m-2 rounded-lg cursor-pointer
          gap-2 border hover:border-blue-500 hover:scale-110 transition-all ease-in-out"
                  >
                    <Image
                      src={item.attributes?.icon?.data.attributes?.url}
                      alt="icon"
                      width={40}
                      height={40}
                    />
                    <label className="text-blue-600 text-sm">
                      {item?.attributes?.name}
                    </label>
                  </Link>
                )
            )
          : [1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className=" bg-slate-200 m-2
       w-[130px] h-[120px] rounded-lg animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default CategorySearch;
