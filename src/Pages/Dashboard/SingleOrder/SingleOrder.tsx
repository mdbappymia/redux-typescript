import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { calculateTotal } from "../../../assets/calculate";
import { Orders } from "../../../Interfaces/Interfaces";
import { removeOrder } from "../../../redux/slices/orderSlice";
import PaymentModal from "../../Shared/PaymentModal/PaymentModal";
import SingleOrderItem from "../SingleOrderItem/SingleOrderItem";

interface Iprops {
  order: Orders;
}
const SingleOrder: FC<Iprops> = ({ order }) => {
  const { order_id, orders, status, _id, payment_status } = order;
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = (id: string) => {
    const isDelete = window.confirm("Are you sure?");
    if (isDelete) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            dispatch(removeOrder(id));
            alert("Delete Successfully");
          }
        });
    }
  };
  return (
    <div className="border my-3 p-2">
      <div className="flex justify-between">
        <div>
          <h1>Order ID: {order_id}</h1>
          <h1>Total Price: {calculateTotal(orders)} TK</h1>
          <h1>Order Status: {status}</h1>
          <h1>
            Payment Status:{" "}
            <span
              className={
                payment_status === "Unpaid"
                  ? "text-red-600 font-bold"
                  : "text-green"
              }
            >
              {payment_status}
            </span>
          </h1>
        </div>
        <div>
          <button
            onClick={() => handleDelete(_id)}
            disabled={!Boolean(status === "pending")}
            className="bg-red-600 text-white font-bold px-3 py-2 rounded active:bg-red-800 hover:bg-red-700 disabled:bg-gray-400"
          >
            Cancle
          </button>
          <div>
            <button
              onClick={() => setShowModal(true)}
              className=" bg-green-600 px-3 py-2 my-2 text-white rounded hover:bg-green-700 font-bold"
            >
              Make Payment
            </button>
          </div>
        </div>
      </div>

      <div className="w-full overflow-auto">
        <table className="w-full">
          <thead className="border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Serial
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Name
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Quantity
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Price
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item, i) => (
              <SingleOrderItem key={item.id} i={i + 1} item={item} />
            ))}
          </tbody>
        </table>
      </div>
      <PaymentModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default SingleOrder;
