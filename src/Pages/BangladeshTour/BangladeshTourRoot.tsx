import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BangladeshPlace } from "../../Interfaces/Interfaces";
import { RootState } from "../../redux/store/store";
import SingleBangladeshPlaceHome from "../Home/SingleBangladeshPlaceHome/SingleBangladeshPlaceHome";

const BangladeshTourRoot = () => {
  const bd_places = useSelector((state: RootState) => state.place.placesB);
  const [displayPlace, setDisplayPlace] = useState(bd_places);
  useEffect(() => {
    setDisplayPlace(bd_places);
  }, [bd_places]);
  const handleSearch = (e: any) => {
    if (e.target.value === "") {
      setDisplayPlace(bd_places);
      return;
    }
    const searchPlace = bd_places.filter((place) =>
      place.name.toLowerCase().includes(e.target.value)
    );
    setDisplayPlace(searchPlace);
  };
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-center text-5xl font-bold bg-gray-400 uppercase my-5 py-5">
        Bangladesh tour
      </h1>
      <div className="text-center my-5">
        <input
          className="border lg:w-1/2 px-2 py-3"
          type="text"
          placeholder="Search by Name"
          onChange={handleSearch}
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {displayPlace.map((place: BangladeshPlace) => (
          <SingleBangladeshPlaceHome key={place._id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default BangladeshTourRoot;
