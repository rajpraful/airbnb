import React from "react";
import Image from "next/image";

const MediumCard = ({ title, img }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition duration-300 ease-out">
      <div className="relative h-52 w-60">
        <Image
          src={img}
          alt={title}
          layout="fill"
          content="contain"
          className="rounded-xl -z-10"
        />
      </div>
      <h3 className="text-gray-500l mt-3 text-xl">{title}</h3>
    </div>
  );
};

export default MediumCard;
