"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function myProfile() {
  const { user } = useKindeBrowserClient();

  return (
    <section className="bg-gray-100 my-10 rounded">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <h6 className="max-w-xl text-lg mb-5">
              <span className="text-blue-500">Hello! </span>
              {user?.given_name + " " + user?.family_name}
            </h6>
            <p className="max-w-xl text-md mb-5">
              this is your current information and we will save it in peace
              please
              <Link href="/contact" className="text-blue-500 mx-1 underline">
                Contact With Us
              </Link>
              for any incomming questions Thank you!
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="#" className="space-y-4">
              <div>
                <label className="text-sm" htmlFor="name">
                  Your picture
                </label>

                <Image
                  src={user?.picture}
                  className="rounded-full cursor-pointer"
                  alt="user picture"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <label className="text-sm" htmlFor="name">
                  Your name
                </label>

                <input
                  className="w-full border rounded-lg border-gray-200 p-3 text-sm"
                  type="text"
                  disabled
                  value={user?.given_name + " " + user?.family_name}
                />
              </div>

              <div>
                <label className="text-sm" htmlFor="email">
                  Your email
                </label>
                <input
                  className="w-full border rounded-lg border-gray-200 p-3 text-sm"
                  type="text"
                  disabled
                  value={user?.email}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default myProfile;
