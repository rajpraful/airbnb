import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import SmallCard from "@/components/SmallCard";
import MediumCard from "@/components/MediumCard";
import LargeCard from "@/components/LargeCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ exploreData, categoryData }) {
  console.log("exploreData", categoryData.data?.slice(2, 7));
  const exploreRooms = exploreData?.results?.slice(0, 9);
  const categories = categoryData.data?.slice(6, 13);

  return (
    <div>
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:p-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreRooms?.map((item, i) => (
              <SmallCard
                img={item.images[0]}
                name={item.name}
                type={item.type}
                key={i}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-5 overflow-scroll scrollbar-hide p-3 -ml-3">
            {categories?.map((item, i) => (
              <MediumCard
                img={exploreRooms[i].images[0]}
                title={item.title}
                key={i}
              />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists Curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const https = require("https");
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  const searchUrl =
    "https://airbnb13.p.rapidapi.com/search-location?location=bangalore&checkin=2023-11-16&checkout=2023-11-20&adults=1&children=0&infants=0&pets=0&page=1&currency=USD";

  const newoptions = {
    method: "GET",
    agent,
    headers: {
      "X-RapidAPI-Key": "7be0011a10mshe705355d9d78470p1c6866jsnd5b80830d00a",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  const exploreData = await fetch(searchUrl, newoptions).then((res) =>
    res.json()
  );

  const categoryURL = "https://airbnb19.p.rapidapi.com/api/v1/getCategory";
  const options = {
    method: "GET",
    agent,
    headers: {
      "X-RapidAPI-Key": "7be0011a10mshe705355d9d78470p1c6866jsnd5b80830d00a",
      "X-RapidAPI-Host": "airbnb19.p.rapidapi.com",
    },
  };

  const categoryData = await fetch(categoryURL, options).then((res) =>
    res.json()
  );

  console.log("categoryData", categoryData);

  return {
    props: {
      exploreData,
      categoryData,
    },
  };
}
