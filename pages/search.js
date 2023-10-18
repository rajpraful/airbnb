import InfoCard from "@/components/InfoCard";
import CustomMap from "@/components/Map";
import { format } from "date-fns";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Search = ({ searchResults }) => {
  console.log("searchResults", searchResults);
  const router = useRouter();
  const { startDate, endDate, location, numberOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMM yy");
  const [selectedLocation, setSelectedLocation] = useState({});

  if (!searchResults.results) {
    return (
      <p className="text-center p-5">
        OOps, something went wrong!
        <br />
        please try again later
      </p>
    );
  }

  return (
    <div>
      <main className="flex">
        <section className="flex-grow pt-14 px-6 h-[100vh] overflow-y-auto">
          <p className="text-xs">
            {searchResults.results.length}+ stays - {formattedStartDate} -{" "}
            {formattedEndDate} for {numberOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="block lg:hidden text-right">
            <button className="customButton">Filter</button>
          </div>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="customButton">Cencellation Flexibility</p>
            <p className="customButton">Type of Place</p>
            <p className="customButton">Price</p>
            <p className="customButton">Rooms and Beds</p>
            <p className="customButton">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.results.map((result, i) => (
              <InfoCard
                key={i}
                data={result}
                selected={selectedLocation.lat == result.lat}
              />
            ))}
          </div>
        </section>
        <section className="hidden xl:inline-flex h-[100vh] max-w-[600px]">
          <CustomMap
            searchResults={searchResults.results ?? []}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />
        </section>
      </main>
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const https = require("https");
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  const { startDate, endDate, location, numberOfGuests } = context.query;

  const formattedStartDate = format(new Date(startDate), "yyyy-MM-dd");
  const formattedEndDate = format(new Date(endDate), "yyyy-MM-dd");

  const searchUrl = `https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=${formattedStartDate}&checkout=${formattedEndDate}&adults=${numberOfGuests}&children=0&infants=0&pets=0&page=1&currency=USD`;

  const newoptions = {
    method: "GET",
    agent,
    headers: {
      "X-RapidAPI-Key": "7be0011a10mshe705355d9d78470p1c6866jsnd5b80830d00a",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  const searchResults = await fetch(searchUrl, newoptions).then((res) =>
    res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
