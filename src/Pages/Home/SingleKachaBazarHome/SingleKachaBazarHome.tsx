import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Vegetable } from "../../../Interfaces/Interfaces";
import { addToCart } from "../../../redux/slices/shopSlice";
import { RootState } from "../../../redux/store/store";
import KachaBazarModal from "../../Shared/KachaBazarModal/KachaBazarModal";
interface IProps {
  vegetable: Vegetable;
}
const SingleKachaBazarHome: FC<IProps> = ({ vegetable }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.shop.cart);
  return (
    <div>
      <div className="bg-white shadow-lg p-4 hover:scale-105 transition-all">
        <div className="flex flex-col md:flex-row  rounded-lg ">
          <img
            className=" w-full h-72 object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={vegetable.productImage}
            alt=""
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {vegetable.productName}
            </h5>
            <p className="text-gray-700 text-base mb-4">
              {vegetable.productDescription.slice(0, 70)}
            </p>
          </div>
        </div>
        <div className=" flex justify-between m-4">
          <button
            onClick={() => setShowModal(true)}
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            View Details
          </button>
          {cartItems.find((item) => item.id === vegetable._id) ? (
            <Link to="/cart" className="font-bold hover:text-blue-600 mt-1">
              View Cart &gt;
            </Link>
          ) : (
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                dispatch(
                  addToCart({
                    id: vegetable._id,
                    d: "kacha_bazer",
                    c: "products",
                    quantity: 1,
                    price: vegetable.price,
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
      <KachaBazarModal
        showModal={showModal}
        setShowModal={setShowModal}
        vegetable={vegetable}
      />
    </div>
  );
};

export default SingleKachaBazarHome;
