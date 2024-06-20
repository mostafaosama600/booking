"use client";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MenuIcon, CopyX } from "lucide-react";

function Header() {
  const [activeMenu, setActiveMenu] = useState(false);

  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore Doctors",
      path: "/explore-doctors",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/contact",
    },
    {
      id: 4,
      name: "About Us",
      path: "/about",
    },
  ];

  const { user } = useKindeBrowserClient();

  useEffect(() => {}, [user]);

  return (
    <div
      className="flex items-center 
    justify-between p-4 shadow-sm "
    >
      <div className="flex items-center gap-10">
        <div>
          <MenuIcon
            onClick={() => setActiveMenu(!activeMenu)}
            className="md:hidden flex cursor-pointer"
          />
          {activeMenu && (
            <ul className="bg-white z-50 fixed left-0 top-0 w-full p-2">
              {Menu.map((item, index) => (
                <Link href={item.path} key={index}>
                  <li className="cursor-pointer my-5 rounded shadow-sm p-2 mx-3">
                    {item.name}
                  </li>
                </Link>
              ))}
              <CopyX
                className="cursor-pointer mb-3 mx-3"
                onClick={() => setActiveMenu(!activeMenu)}
              />
            </ul>
          )}
        </div>

        <Image
          src="/logo.svg"
          className="md:flex gap-8 hidden"
          alt="logo"
          width={180}
          height={80}
        />
        <ul className="md:flex gap-8 hidden">
          {Menu.map((item, index) => (
            <Link href={item.path} key={index}>
              <li
                className="hover:text-blue-500
                    cursor-pointer hover:scale-105
                    transition-all ease-in-out"
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {user ? (
        <Popover>
          <PopoverTrigger>
            {user?.picture ? (
              <Image
                src={user?.picture}
                className="rounded-full cursor-pointer"
                alt="user picture"
                width={40}
                height={40}
              />
            ) : (
              <Image
                src="/avatar.webp" // Provide a fallback image source here
                className="rounded-full cursor-pointer"
                alt="user picture"
                width={40}
                height={40}
              />
            )}
          </PopoverTrigger>
          <PopoverContent className="w-44">
            <ul className="flex  flex-col gap-2">
              <Link
                href={"/my-profile"}
                className="cursor-pointer
             hover:bg-slate-100 p-2 rounded-md"
              >
                My Profile
              </Link>
              <Link
                href={"/my-booking"}
                className="cursor-pointer
             hover:bg-slate-100 p-2 rounded-md"
              >
                My Booking
              </Link>
              <li
                className="cursor-pointer
             hover:bg-slate-100 p-2 rounded-md"
              >
                <LogoutLink> Logout </LogoutLink>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      ) : (
        <LoginLink>
          <Button>Get Started</Button>
        </LoginLink>
      )}
    </div>
  );
}

export default Header;
