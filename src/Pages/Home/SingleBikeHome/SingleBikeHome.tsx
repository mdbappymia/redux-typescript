import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Bike } from "../../../Interfaces/Interfaces";
import { addToCart } from "../../../redux/slices/shopSlice";
import { RootState } from "../../../redux/store/store";
import BikeModal from "../../Shared/BikeModal/BikeModal";

interface Iprops {
  bike: Bike;
}
const SingleBikeHome: FC<Iprops> = ({ bike }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { img, name, description } = bike;
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.shop.cart);
  return (
    <div>
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full h-56" src={img} alt={bike.name + " Image"} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{description.slice(0, 100)}</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between">
          <button
            onClick={() => setShowModal(true)}
            className="inline-block hover:bg-blue-400 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            View details
          </button>
          {cartItems.find((item) => item.id === bike._id) ? (
            <Link to="/cart" className="text-xl font-bold hover:text-blue-600">
              View Cart &gt;
            </Link>
          ) : (
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                setShowModal(false);
                dispatch(
                  addToCart({
                    id: bike._id,
                    d: "bike_bazar",
                    c: "products",
                    quantity: 1,
                    price: bike.price,
                  })
                );
              }}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
      <BikeModal
        showModal={showModal}
        setShowModal={setShowModal}
        bike={bike}
      />
    </div>
  );
};

export default SingleBikeHome;
