import React, { useState } from "react";
import Image from "next/image";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(
    router.query?.startDate ? new Date(router.query.startDate) : new Date()
  );
  const [endDate, setEndDate] = useState(
    router.query?.endDate ? new Date(router.query.endDate) : new Date()
  );
  const [numberOfGuests, setNumberOfGuests] = useState(
    router.query?.numberOfGuests ?? 1
  );
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "Selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.Selection.startDate);
    setEndDate(ranges.Selection.endDate);
  };

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests: numberOfGuests,
      },
    });
    setSearchInput("");
  };

  const formatPlaceholder = () => {
    return `${router.query.location} | ${
      startDate.toISOString().split("T")[0]
    } - ${endDate.toISOString().split("T")[0]} | ${numberOfGuests} guests`;
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto"
        onClick={() => router.push("/")}
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="airbnb"
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-lg focus-within:border-rose-300">
        <input
          type="text"
          placeholder={
            router?.query?.location ? formatPlaceholder() : "Start your search"
          }
          className="flex-grow pl-5 bg-transparent outline-none text-gray-600 text-sm placeholder:gray-400 placeholder:text-xs"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 mx-auto cursor-pointer md:mx-2" />
      </div>
      <div className="flex space-x-4 justify-end text-gray-400 items-center">
        <p className="hidden md:inline text-gray-700 hover:border-b-2 hover:border-red-300 transition duration-200 ease-out cursor-pointer">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 cursor-pointer hover:text-rose-400" />
        <div className="flex items-center justify-even border-2 border-gray-300 rounded-full p-2 ">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto transition-opacity">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center pb-2 border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UserIcon className="h-5 w-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none font-semibold text-red-400"
              value={numberOfGuests}
              min={1}
              onChange={(e) => setNumberOfGuests(e.target.value)}
            />
          </div>
          <div className="flex justify-around">
            <button
              className="text-gray-500"
              onClick={() => setSearchInput("")}
            >
              Cancel
            </button>
            <button className="text-red-400" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
