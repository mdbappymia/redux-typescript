import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import SingleKachaBazarHome from "../SingleKachaBazarHome/SingleKachaBazarHome";

const KachaBazarHome = () => {
  const vegetabls = useSelector((state: RootState) => state.shop.vegetabls);
  const displayItem = vegetabls.slice(0, 4);
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-5xl font-bold uppercase border-b py-5 my-5">
        Kacha bazar Shop
      </h1>
      <div className="grid grid-cols-4 gap-5">
        {displayItem.map((vegetable) => (
          <SingleKachaBazarHome key={vegetable._id} vegetable={vegetable} />
        ))}
      </div>
      <h1>View more ...</h1>
    </div>
  );
};

export default KachaBazarHome;
