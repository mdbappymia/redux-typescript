import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { EProducts } from "../../../Interfaces/Interfaces";
import { RootState } from "../../../redux/store/store";
import SingleEShopHome from "../SingleEShopHome/SingleEShopHome";

const ElectronicsShopHome: FC = () => {
  const products = useSelector((state: RootState) => state.shop.electronics);

  const displayProducts = products.slice(0, 4);
  return (
    <div className="py-10 container mx-auto">
      <h1 className="text-center font-bold text-5xl my-5 uppercase border-b py-5">
        Eletronics Shop
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
        {displayProducts.map((product: EProducts) => (
          <SingleEShopHome key={product._id} product={product} />
        ))}
      </div>
      <Link
        to="/electronics"
        className="text-blue-700 my-10 inline-block text-xl hover:text-blue-500 hover:underline"
      >
        View More ...
      </Link>
      <hr />
    </div>
  );
};

export default ElectronicsShopHome;
