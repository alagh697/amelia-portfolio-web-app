"use client";

import { scrollTo } from "@/utils/scroll";
import Image from "next/image";
import React from "react";

function HomePageHeroSection() {
  return (
    <section className="relative h-screen w-full">
      <Image
        src={`/images/Alicia.png`}
        fill
        className="object-contain object-right-bottom grayscale brightness-50"
        alt="alicia"
      />

      {/* Titles */}
      <div
        className=" absolute top-0 left-0 h-full w-full z-[2]
      flex flex-col gap-5 justify-center py-16 items-start 
      "
      >
        <div className=" flex flex-col gap-5 w-5/6 mx-auto flex-1">
          <h1 className="text-9xl font-semibold">
            {`Amalia`} <br />
            {`Sanchez`}
          </h1>

          <h2 className="text-xl opacity-70">{`Hello my name is Amalia!`}</h2>
        </div>
        <div className="w-full flex justify-center">
          <button
            onClick={() => scrollTo("service-slider")}
            className="group relative flex flex-col items-center w-7 h-20 border border-white/40 rounded-full p-1"
          >
            <span className="-mt-1">.</span>
            <span>.</span>
            <span>.</span>

            <div
              className="
          absolute top-1 left-1/2 -translate-x-1/2 group-hover:translate-y-3/4 hover-effect
          w-5/6 h-1/2 border border-white bg-black rounded-full flex justify-center py-1"
            >
              <div className="h-1/3 border border-white"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomePageHeroSection;
