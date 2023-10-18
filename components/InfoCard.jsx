import React, { useState } from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

const InfoCard = ({ data, selected }) => {
  const img = data.images[0];
  const location = data.city;
  const title = data.name;
  const amenities = data.previewAmenities;
  const rating = data.rating;
  const price = data.price.rate;
  const total = data.price.total;
  const [fav, setFav] = useState(false);
  return (
    <div
      className={`flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition transform duration-100 ease-out first:border-t ${
        selected ? "shadow-lg custom-pulse" : ""
      }`}
      id={title}
    >
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5 ">
        <div className="flex justify-between pt-2">
          <p>{location}</p>
          <HeartIcon
            className={`h-7 cursor-pointer active:text-rose-400 ${
              fav ? "text-rose-400" : "text-gray-400"
            }`}
            onClick={() => setFav(!fav)}
          />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="flex gap-2 text-gray-500 pt-2 text-sm flex-grow">
          {amenities.map((item, i) => (
            <span key={i}>{item} |</span>
          ))}
        </p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-300 pr-2" />
            {rating ? Number(rating).toFixed(1) : "new"}
          </p>
          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">
              ${price}/night
            </p>
            <p className="text-right font-extralight">${total} total</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
