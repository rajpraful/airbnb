import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import "mapbox-gl/dist/mapbox-gl.css";

const CustomMap = ({
  searchResults,
  selectedLocation,
  setSelectedLocation,
}) => {
  const coordinates = searchResults.map((ele) => ({
    latitude: ele.lat,
    longitude: ele.lng,
  }));
  const center = getCenter(coordinates);
  const [viewPort, setViewPort] = useState({
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 12,
  });

  const handleSelect = (data) => {
    setSelectedLocation(data);
    document
      .getElementById(data.name)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div style={{ width: "600px", height: "100%" }}>
      <Map
        initialViewState={viewPort}
        mapboxAccessToken={process.env.MAPAPIKEY}
        width="100%"
        height="120%"
        transitionDuration="200"
        mapStyle="mapbox://styles/prafulraj/clnua2ivv00of01p9aqosf8tx"
      >
        {searchResults.map((result, i) => {
          return (
            <>
              <Marker
                latitude={result.lat}
                longitude={result.lng}
                offsetLeft={-3.5 * viewPort.zoom}
                offsetTop={-7 * viewPort.zoom}
                onViewportChange={(nextViewport) => setViewPort(nextViewport)}
              >
                <div
                  className="cursor-poiter animate-bounce  text-[30px] h-[50px] w-[50px]"
                  onClick={() => handleSelect(result)}
                >
                  <img
                    src="./placeholder.png"
                    alt="pin"
                    width="40px"
                    height="80px"
                  />
                </div>
              </Marker>
            </>
          );
        })}
        {selectedLocation.lat ? (
          <Popup
            latitude={selectedLocation.lat}
            longitude={selectedLocation.lng}
            closeOnClick={false}
            onClose={() => setSelectedLocation({})}
          >
            <div className="flex gap-2 items-center relative">
              <img
                src={selectedLocation.images[0]}
                alt=""
                className="object-contain rounded-lg h-10"
              />
              <div className="flex flex-col gap-[2px]">
                <p className="single-line text-sm text-gray-600">
                  {selectedLocation.name}
                </p>
                <p className="text-gray-500">
                  <span className="text-rose-500">★</span>{" "}
                  {selectedLocation.rating} - ${selectedLocation.price.rate}
                </p>
              </div>
            </div>
          </Popup>
        ) : (
          false
        )}
      </Map>
    </div>
  );
};

export default CustomMap;
