import React, { FC } from "react";
import { Link } from "react-router-dom";
import { WorldPlace } from "../../../Interfaces/Interfaces";

interface IProps {
  showModal: boolean;
  setShowModal: Function;
  place: WorldPlace;
}
const WorldTourModal: FC<IProps> = ({ showModal, setShowModal, place }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{place.name}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent  text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      &times;
                    </span>
                  </button>
                </div>
                <div className="mx-5">
                  <h1 className="text-4xl">
                    Cost:{" "}
                    <span className=" text-orange-500">
                      &#36;{place.price}{" "}
                    </span>
                    <span className="text-sm">Only</span>
                  </h1>
                  <h1>Duration: {place.duration} days</h1>
                  <h1>Location: {place.location}</h1>
                  <h1>Rating: {place.rating}</h1>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed h-72 overflow-y-auto">
                    {place.description}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <Link
                    to={`/placeDetails/${place._id}__travel-adventures__places`}
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default WorldTourModal;
