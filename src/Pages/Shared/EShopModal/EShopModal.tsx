import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { EProducts } from "../../../Interfaces/Interfaces";
import { addToCart } from "../../../redux/slices/shopSlice";
import { RootState } from "../../../redux/store/store";

interface IProps {
  showModal: boolean;
  setShowModal: Function;
  product: EProducts;
}

const EShopModal: FC<IProps> = ({ showModal, setShowModal, product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.shop.cart);
  return (
    <div>
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{product.name}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      &times;
                    </span>
                  </button>
                </div>
                <div className="mx-5">
                  <h1 className="text-4xl">
                    Cost:{" "}
                    <span className=" text-orange-500">
                      &#36;{product.price}
                    </span>
                    <span className="text-sm">Only</span>
                  </h1>
                  <div>
                    <h1>
                      {product.features[0]?.description || ""} :{" "}
                      {product.features[0]?.value || ""}
                    </h1>
                    <h1>
                      {product.features[1]?.description || ""} :{" "}
                      {product.features[1]?.value || ""}
                    </h1>
                  </div>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed h-72 overflow-y-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    optio voluptates temporibus illum eligendi commodi nulla vel
                    minus in, quaerat quae cupiditate quod alias excepturi
                    voluptas numquam dolor itaque quis aliquam soluta libero
                    natus placeat quidem. Iste molestias voluptate enim.
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

                  {cartItems.find((item) => item.id === product._id) ? (
                    <Link
                      to="/cart"
                      className="text-xl font-bold hover:text-blue-600"
                    >
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
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  );
};

export default EShopModal;
