import Image from "next/image";
import React from "react";
import { BsCart4 } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { signIn, signout, useSession } from "next-auth/react";

// client id = 613735720339 - f7jpjrthhm9uvb8rkdnnkfa0cmg6sus3.apps.googleusercontent.com
// client secret = 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
const Header = () => {
  return (
    <header>
      {/* top nav  */}
      <div className="flex items-center bg-primary flex-grow pl-2">
        <div className="flex items-center flex-grow sm:flex-grow-0 mt-2 mx-3">
          <div>
            <div className="flex">
              <div>
                <h1 className="text-md md:text-xl lg:text-2xl bg-gray-600 text-white rounded-lg font-bold pb-2 mb-2 px-2">
                  Best <span className="text-primary"> Buy</span>
                </h1>
              </div>
              <div className="px-3 hidden md:block">
                <p className="text-secondary px-4 text-sm">Deliver to</p>
                <div className="flex">
                  <HiOutlineLocationMarker color="#1F2937" />
                  <p className="text-secondary font-bold">Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-gray-600 hover:bg-gray-700">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <AiOutlineSearch
            color="#FDD670"
            size={42}
            style={{ padding: "5px" }}
          />
        </div>

        {/* bottom nav */}
        <div className="flex gap-5 mx-6 items-center whitespace-nowrap">
          <div onClick={signIn} className="text-secondary link">
            <p className="text-sm">Hello Hasan Shanto</p>
            <p className="font-bold md:text-sm">account & lists</p>
          </div>
          <div className="text-secondary link">
            <p className="text-sm">Orders</p>
            <p className="font-bold md:text-sm">& Returns</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-6 text-secondary text-center font-bold bg-green-500 rounded-full px-1">
              0
            </span>
            <BsCart4 color="#1F2937" size={40} />
            <p className="font-semibold text-secondary md:text-md mt-2 hidden md:inline">
              cart
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
