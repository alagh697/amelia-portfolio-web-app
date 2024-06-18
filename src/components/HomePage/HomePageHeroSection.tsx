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
      <div className=" absolute top-0 left-0 h-full w-full z-[2]
      flex flex-col gap-5 justify-center py-16 items-start
      ">
<div className=" flex flex-col gap-5 w-5/6 mx-auto">
        <h1
        className="text-9xl font-semibold"
        >
            {`Amalia`} <br/>
            {`Sanchez`}
        </h1>

        <h2 className="text-xl opacity-70">
            {`Hello my name is Amalia!`}
        </h2>
        </div>
      </div>
    </section>
  );
}

export default HomePageHeroSection;
