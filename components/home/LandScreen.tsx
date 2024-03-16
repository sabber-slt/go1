/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import TypeWr from "../sections/motions/TypeWr";
import Social from "../Social";

const LandScreen = () => {
  return (
    <div className="relative w-full h-[50vh] lg:h-[80vh] vstack justify-end z-0 lg:mt-14">
      <Image
        src="https://sabber.chbk.run/api/files/nd0x82c2djedlon/au6lr7xw2z1m541/homesdasspage_rhccmh_1_7AQ8QY2nxV.png"
        alt="wallpaper"
        fill
        priority
        sizes="100%"
        className="object-top object-cover z-0 opacity-80"
      />
      <div className="absolute vstack w-full lg:h-full justify-center bg-gradient-to-t from-black to-transparent z-30">
        <div className="relative w-24 h-24 lg:w-44 lg:h-44 rounded-full shadow-xl overflow-hidden border-4 border-main">
          <Image
            src="/sabber.png"
            alt="صابر سلطانی"
            fill
            sizes="100%"
            priority
            className="object-cover z-30"
          />
        </div>
        <div className="w-80 lg:w-[40vw] vstack justify-center z-30">
          <h1 className="text-[17px] lg:text-3xl font-bold mt-3 lg:mt-5 text-center">
            I'm
            <span className="lg:text-5xl text-xl text-main ml-2 font-semibold">
              Sabber Soltani
            </span>
            ,
            <br />A software engineer passionate about
          </h1>
          <TypeWr />
        </div>
        <div className="w-60 center">
          <Social />
        </div>
      </div>
    </div>
  );
};

export default LandScreen;
