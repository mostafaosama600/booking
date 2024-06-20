"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import useFetchData from "@/app/_hooks/useFetchData";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
function CategoryList() {
  const params = usePathname();
  const category = params.split("/")[2];

  const { data: categoryList } = useFetchData(GlobalApi.getCategory);
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <>
      <div className="h-screen fixed mt-5 flex flex-col">
        <MenuIcon
          onClick={() => setActiveMenu(!activeMenu)}
          className="md:flex lg:flex cursor-pointer p-4 border text-black"
        />
        {activeMenu && (
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList className="overflow-visible">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                {categoryList &&
                  categoryList.map((item, index) => (
                    <CommandItem key={index}>
                      <Link
                        href={"/search/" + item?.attributes?.name}
                        className={`p-2 flex gap-2
                text-[14px]
                text-blue-600
                items-center
                rounded-md cursor-pointer w-full
                ${category == item.attributes.name && "bg-blue-100"}
                `}
                      >
                        <Image
                          src={item.attributes?.icon?.data.attributes?.url}
                          alt="icon"
                          width={25}
                          height={25}
                        />
                        <label>{item.attributes.name}</label>
                      </Link>
                    </CommandItem>
                  ))}
              </CommandGroup>
            </CommandList>
          </Command>
        )}
      </div>
    </>
  );
}

export default CategoryList;
