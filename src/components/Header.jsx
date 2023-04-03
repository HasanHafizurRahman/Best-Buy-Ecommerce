import Image from "next/image";
import React from "react";
import { BsCart4 } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <header>
      {/* top nav  */}
      <div className="flex items-center bg-amazon_blue flex-grow pl-2">
        <div className="flex items-center flex-grow sm:flex-grow-0 mt-2 mx-3">
          {/* <Image
            src="https://links.papareact.com/f90"
            alt="logo"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer mt-2"
          /> */}
          <div>
            <div className="flex">
              <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl text-white font-bold pb-2 mb-2">
                  Best <span className="text-green-500"> Buy</span>
                </h1>
              </div>
              <div className="px-3">
                <p className="text-white px-4 text-sm">Deliver to</p>
                <div className="flex">
                  <HiOutlineLocationMarker color="white" />
                  <p className="text-white font-bold">Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-green-500 hover:bg-green-600">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <AiOutlineSearch size={42} style={{ padding: "5px" }} />
        </div>

        {/* bottom nav */}
        <div className="flex gap-5 mx-6 items-center whitespace-nowrap">
          <div className="text-white link">
            <p className="text-sm">Hello Hasan Shanto</p>
            <p className="font-bold md:text-sm">account & lists</p>
          </div>
          <div className="text-white link">
            <p className="text-sm">Orders</p>
            <p className="font-bold md:text-sm">& Returns</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-6 text-white text-center font-bold bg-green-500 rounded-full px-1">
              0
            </span>
            <BsCart4 color="white" size={40} />
            <p className="font-bold text-white md:text-sm hidden md:inline">
              cart
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
