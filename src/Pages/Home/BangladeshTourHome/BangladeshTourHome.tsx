import React from "react";
import { useSelector } from "react-redux";
import { BangladeshPlace } from "../../../Interfaces/Interfaces";
import { RootState } from "../../../redux/store/store";
import SingleBangladeshPlaceHome from "../SingleBangladeshPlaceHome/SingleBangladeshPlaceHome";

const BangladeshTourHome = () => {
  const bdTourPlace = useSelector((state: RootState) => state.place.placesB);
  const displayPlace = bdTourPlace.slice(0, 4);
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center text-5xl font-bold uppercase py-5 border-b my-5">
        Bangladesh Tour Service
      </h1>
      <div className="grid grid-cols-4 gap-8">
        {displayPlace.map((place: BangladeshPlace) => (
          <SingleBangladeshPlaceHome key={place._id} place={place} />
        ))}
      </div>
      <button>View More ...</button>
    </div>
  );
};

export default BangladeshTourHome;
