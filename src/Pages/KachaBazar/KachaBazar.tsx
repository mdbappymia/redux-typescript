import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Vegetable } from "../../Interfaces/Interfaces";
import { RootState } from "../../redux/store/store";
import SingleKachaBazarHome from "../Home/SingleKachaBazarHome/SingleKachaBazarHome";

const KachaBazar = () => {
  const vegetables = useSelector((state: RootState) => state.shop.vegetabls);
  const [displayPlace, setDisplayPlace] = useState(vegetables);
  useEffect(() => {
    setDisplayPlace(vegetables);
  }, [vegetables]);
  const handleSearch = (e: any) => {
    if (e === "") {
      setDisplayPlace(vegetables);
      return;
    }
    const searchPlace = vegetables.filter((vegetable) =>
      vegetable.productName.toLowerCase().includes(e)
    );
    setDisplayPlace(searchPlace);
  };
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-center text-5xl font-bold uppercase my-5 py-6 bg-gray-400">
        Vegetables
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
        {displayPlace.map((vegetable: Vegetable) => (
          <SingleKachaBazarHome vegetable={vegetable} />
        ))}
      </div>
    </div>
  );
};

export default KachaBazar;
