import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BangladeshPlace } from "../../../Interfaces/Interfaces";
import { RootState } from "../../../redux/store/store";
import SingleBangladeshPlaceHome from "../SingleBangladeshPlaceHome/SingleBangladeshPlaceHome";

const BangladeshTourHome: FC = () => {
  const bdTourPlace = useSelector((state: RootState) => state.place.placesB);
  const displayPlace = bdTourPlace.slice(0, 4);
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center text-5xl font-bold uppercase py-5 border-b my-5">
        Bangladesh Tour Service
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        {displayPlace.map((place: BangladeshPlace) => (
          <SingleBangladeshPlaceHome key={place._id} place={place} />
        ))}
      </div>
      <Link
        to="/bd-places"
        className="text-blue-700 my-10 inline-block text-3xl hover:text-blue-900 hover:underline"
      >
        View More ...
      </Link>
    </div>
  );
};

export default BangladeshTourHome;
