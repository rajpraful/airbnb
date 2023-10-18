import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
      <Image
        src="https://links.papareact.com/0fm"
        alt="cover"
        layout="fill"
        objectFit="cover"
        className="-z-10"
      />
      <div className="absolute w-full top-1/2 text-center">
        <p className="  text-sm font-bold sm:text-3xl mb-10">
          Not sure where to go? perfect
        </p>
        <button className="text-rose-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-200 active:shadow-md ">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
