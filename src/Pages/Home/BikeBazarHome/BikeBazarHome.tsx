import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../redux/store/store";
import SingleBikeHome from "../SingleBikeHome/SingleBikeHome";

const BikeBazarHome: FC = () => {
  const bikes = useSelector((state: RootState) => state.shop.bikes);
  const displayItem = bikes.slice(0, 4);
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center font-bold text-5xl uppercase my-5 border-b py-5">
        bike bazar
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
        {displayItem.map((bike) => (
          <SingleBikeHome bike={bike} key={bike._id} />
        ))}
      </div>
      <Link
        to="/bikes"
        className="text-blue-700 my-10 inline-block text-xl hover:text-blue-500 hover:underline"
      >
        View More ...
      </Link>
      <hr />
    </div>
  );
};

export default BikeBazarHome;
