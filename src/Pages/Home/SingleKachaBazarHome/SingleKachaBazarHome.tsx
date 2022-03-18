import React, { FC, useState } from "react";
import { Vegetable } from "../../../Interfaces/Interfaces";
import KachaBazarModal from "../../Shared/KachaBazarModal/KachaBazarModal";
interface IProps {
  vegetable: Vegetable;
}
const SingleKachaBazarHome: FC<IProps> = ({ vegetable }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={vegetable.productImage}
            alt=""
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {vegetable.productName}
            </h5>
            <p className="text-gray-700 text-base mb-4">
              {vegetable.productDescription.slice(0, 100)}
            </p>
            <button
              onClick={() => setShowModal(true)}
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              View Details
            </button>
          </div>
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
