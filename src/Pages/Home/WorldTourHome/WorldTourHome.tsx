import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { WorldPlace } from "../../../Interfaces/Interfaces";
import { RootState } from "../../../redux/store/store";
import SingleWorldPlaceHome from "../SingleWorldPlaceHome/SingleWorldPlaceHome";

const WorldTourHome = () => {
  const worldPlace = useSelector((state: RootState) => state.place.placesW);

  const displayPlace = worldPlace.slice(0, 4);
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center text-5xl font-bold uppercase py-5 border-b my-5">
        World Toure Services
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        {displayPlace.map((place: WorldPlace) => (
          <SingleWorldPlaceHome key={place._id} place={place} />
        ))}
      </div>
      <Link
        to="/wd-places"
        className="text-blue-700 my-10 inline-block text-3xl hover:text-blue-900 hover:underline"
      >
        View More ...
      </Link>
    </div>
  );
};

export default WorldTourHome;
