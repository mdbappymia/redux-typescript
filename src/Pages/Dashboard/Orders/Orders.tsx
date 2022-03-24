/* eslint-disable @typescript-eslint/no-redeclare */
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../../redux/slices/orderSlice";
import { RootState } from "../../../redux/store/store";
import SingleOrder from "../SingleOrder/SingleOrder";

const Orders: FC = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.orders.orders);
  useEffect(() => {
    dispatch(getAllOrders("http://localhost:5000/orders"));
  }, [dispatch]);
  return (
    <div className="container mx-auto">
      <h1 className="text-center font-bold uppercase text-3xl mt-10 py-5 border-t">
        Orders
      </h1>
      <div className="order-collection">
        {orders.length === 0 && (
          <h1 className="text-center my-4 text-md">Order is empty</h1>
        )}
        {orders.map((order) => (
          <SingleOrder key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
