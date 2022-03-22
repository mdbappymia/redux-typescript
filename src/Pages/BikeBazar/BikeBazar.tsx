import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Bike } from "../../Interfaces/Interfaces";
import { RootState } from "../../redux/store/store";
import SingleBikeHome from "../Home/SingleBikeHome/SingleBikeHome";

const BikeBazar = () => {
  const bikes = useSelector((state: RootState) => state.shop.bikes);
  const [displayBikes, setDisplayBikes] = useState(bikes);
  useEffect(() => {
    setDisplayBikes(bikes);
  }, [bikes]);
  const handleSearch = (e: any) => {
    if (e === "") {
      setDisplayBikes(bikes);
      return;
    }
    const searchPlace = bikes.filter((bikes) =>
      bikes.name.toLowerCase().includes(e)
    );
    setDisplayBikes(searchPlace);
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-5xl font-bold uppercase my-5 py-6 bg-gray-400">
        bikes
      </h1>
      <div className="text-center my-5">
        <input
          className="border lg:w-1/2 px-2 py-3"
          type="text"
          placeholder="Search by Name"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {displayBikes.map((bike: Bike) => (
          <SingleBikeHome bike={bike} />
        ))}
      </div>
    </div>
  );
};

export default BikeBazar;
