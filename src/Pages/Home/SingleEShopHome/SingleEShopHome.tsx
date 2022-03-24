import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { EProducts } from "../../../Interfaces/Interfaces";
import { addToCart } from "../../../redux/slices/shopSlice";
import { RootState } from "../../../redux/store/store";
import EShopModal from "../../Shared/EShopModal/EShopModal";
interface IProps {
  product: EProducts;
}
const SingleEShopHome: FC<IProps> = ({ product }) => {
  const { name, img } = product;
  const [showModal, setShowModal] = useState(false);
  const cartItems = useSelector((state: RootState) => state.shop.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="rounded overflow-hidden shadow-lg hover:scale-105 transition-all bg-white">
        <img className="w-full h-52" src={img} alt="Product photos" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-700">
            {name.slice(0, 25)}...
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between">
          <button
            onClick={() => setShowModal(true)}
            className="inline-block hover:bg-green-400 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            View Details
          </button>
          {cartItems.find((item) => item.id === product._id) ? (
            <Link to="/cart" className="text-xl font-bold hover:text-blue-600">
              View Cart &gt;
            </Link>
          ) : (
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                dispatch(
                  addToCart({
                    id: product._id,
                    d: "online_shop",
                    c: "productCollection",
                    quantity: 1,
                    price: product.price,
                  })
                );
                setShowModal(false);
              }}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
      <EShopModal
        showModal={showModal}
        setShowModal={setShowModal}
        product={product}
      />
    </div>
  );
};

export default SingleEShopHome;
