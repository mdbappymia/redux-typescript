import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { WorldPlace } from "../../Interfaces/Interfaces";
import { RootState } from "../../redux/store/store";
import SingleWorldPlaceHome from "../Home/SingleWorldPlaceHome/SingleWorldPlaceHome";

const WorldTour = () => {
  const places = useSelector((state: RootState) => state.place.placesW);
  const [displayPlace, setDisplayPlace] = useState(places);
  useEffect(() => {
    setDisplayPlace(places);
  }, [places]);
  const handleSearch = (e: any) => {
    if (e === "") {
      setDisplayPlace(places);
      return;
    }
    const searchPlace = places.filter((place) =>
      place.name.toLowerCase().includes(e)
    );
    setDisplayPlace(searchPlace);
  };
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-center text-5xl font-bold uppercase my-5 py-6 bg-gray-400">
        World Tour Place
      </h1>
      <div className="text-center my-5">
        <input
          className="border lg:w-1/2 px-2 py-3"
          type="text"
          placeholder="Search by Name"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {displayPlace.map((place: WorldPlace) => (
          <SingleWorldPlaceHome place={place} />
        ))}
      </div>
    </div>
  );
};

export default WorldTour;
