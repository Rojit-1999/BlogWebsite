import React from "react";
import { NavItems } from "../data";
import Button from "./button";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="bg-[#FAFAFA] w-full h-[80px] flex justify-between items-center px-[50px]">
      <Image
        src={"/assets/image/logo.png"}
        alt="Logo"
        width={50}
        height={50}
        loading="lazy"
        className="cursor-pointer rounded-full bg-cover"
      />

      <div className="flex flex-row gap-[70px] justify-center items-center text-[#2d2d2d] p-4">
        {NavItems.map((lists, index) => (
          <div key={index} className=" flex items-center justify-center">
            <h1 className="text-[16px] font-[500] hover:text-primary-hover hover:cursor-pointer">
              {lists.Name}
            </h1>
          </div>
        ))}
      </div>
      <Button text="Get Started" />
    </div>
  );
};

export default NavBar;
