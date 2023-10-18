import React from "react";
import Image from "next/image";

const SmallCard = ({ img, type, name }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-200 east-out">
      <div className="relative h-16 w-16">
        <div className="w-16">
          <Image
            src={img}
            alt={name}
            layout="fill"
            content="contain"
            className="rounded-lg -z-10"
          />
        </div>
      </div>
      <div>
        <h2 className="single-line font-medium">{name}</h2>
        <h3 className="text-gray-500">{type}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
