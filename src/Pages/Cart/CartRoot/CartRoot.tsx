import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calculateTotal } from "../../../assets/calculate";
import { ProductCart } from "../../../Interfaces/Interfaces";
import { RootState } from "../../../redux/store/store";
import SingleCartItem from "../SingleCartItem/SingleCartItem";

const CartRoot: FC = () => {
  const cartItems = useSelector((state: RootState) => state.shop.cart);

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-center font-bold uppercase text-5xl bg-gray-400 my-5 py-5">
        Cart
      </h1>
      <h1>Total : {calculateTotal(cartItems)} TK</h1>
      {cartItems.length > 0 && (
        <Link
          to="/checkout"
          className="bg-indigo-600 inline-block px-3 py-2 rounded text-white font-bold mt-2 uppercase"
        >
          proceed to checkout
        </Link>
      )}
      <div className="cart-item-container">
        {cartItems.map((item: ProductCart) => (
          <SingleCartItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CartRoot;
