import React, { FC, memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ProductCart } from "../../../Interfaces/Interfaces";
import {
  decreaseItem,
  increaseItem,
  removeFromCart,
} from "../../../redux/slices/shopSlice";
interface IProps {
  item: ProductCart;
}
const SingleCartItem: FC<IProps> = memo(({ item }) => {
  const [cartItem, setCartItem] = useState<any>({});
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`http://localhost:5000/random?d=${item.d}&c=${item.c}&id=${item.id}`)
      .then((res) => res.json())
      .then((data) => setCartItem(data));
  }, [item.c, item.d, item.id]);

  return (
    <div className="border my-5 p-3 flex justify-between">
      <div>
        <h1>{cartItem.name || cartItem.productName}</h1>
        <h1>
          Price: {item.price} {item.d === "kacha_bazer" ? "TK" : "$"}
        </h1>
        <h1>Quantity: {item.quantity}</h1>
        <h1>
          Total: {((item.quantity || 1) * parseFloat(item.price)).toFixed(2)}
          {item.d === "kacha_bazer" ? "TK" : "$"}
        </h1>
        <div>
          <button
            onClick={() =>
              dispatch(
                item.quantity === 1
                  ? removeFromCart(item.id)
                  : decreaseItem(item.id)
              )
            }
            className="text-3xl mr-5"
          >
            {item.quantity === 1 ? (
              <span className="text-sm bg-red-500 text-white px-2 py-1 font-bold rounded">
                Remove
              </span>
            ) : (
              "-"
            )}
          </button>
          <button
            onClick={() => dispatch(increaseItem(item.id))}
            className="text-3xl mr-5"
          >
            +
          </button>
        </div>
      </div>
      <div>
        <button
          className="bg-red-600 text-white font-bold px-3 py-2 rounded"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
});

export default SingleCartItem;
