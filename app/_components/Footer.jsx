import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <>
      <br />
      <br />
      <footer className="bg-gray-100">
        <footer className="bg-gray-50">
          <div className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="flex justify-center text-teal-600 sm:justify-start">
                <Image src="/logo.svg" alt="logo" width={180} height={80} />
              </div>

              <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                Copyright &copy; 2024. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </footer>
    </>
  );
}

export default Footer;
