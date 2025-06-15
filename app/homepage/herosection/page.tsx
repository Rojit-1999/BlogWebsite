import Button from "@/app/component/button";
import React from "react";

const HeroSection = () => {
  return (
    <div
      className=" bg-cover bg-center bg-no-repeat h-[550px] w-full flex flex-col items-center justify-center text-white z-10 relative"
      style={{ backgroundImage: "url('/assets/image/heroimage.png')" }}
    >
      <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
      <div className="w-full flex flex-col gap-[1rem] items-center justify-center px-[50px] z-10">
        <h1 className="text-[2.3rem] font-[600]">
          Words shape worlds start yours here
        </h1>
        <p className="text-[1.2rem] font-[400] text-center max-w-[800px]">
          Discover insights, stories, and inspiration from voices around the
          globe. Whether you're here to read, write, or connect, your journey
          starts with a single post.
        </p>
        <Button text="Get Started" icon={""} />
      </div>
    </div>
  );
};

export default HeroSection;
