import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../redux/store/store";
import SingleKachaBazarHome from "../SingleKachaBazarHome/SingleKachaBazarHome";

const KachaBazarHome: FC = () => {
  const vegetabls = useSelector((state: RootState) => state.shop.vegetabls);
  const displayItem = vegetabls.slice(0, 4);
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-5xl font-bold uppercase border-b py-5 my-5">
        Kacha bazar Shop
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
        {displayItem.map((vegetable) => (
          <SingleKachaBazarHome key={vegetable._id} vegetable={vegetable} />
        ))}
      </div>
      <Link
        to="/vegetables"
        className="text-blue-700 my-10 inline-block text-3xl hover:text-blue-900 hover:underline"
      >
        View More ...
      </Link>
    </div>
  );
};

export default KachaBazarHome;
