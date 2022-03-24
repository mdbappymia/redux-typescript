import { FC, useEffect, useState } from "react";
import { Order } from "../../../Interfaces/Interfaces";

interface Iprops {
  item: Order;
  i: number;
}
const SingleOrderItem: FC<Iprops> = ({ item, i }) => {
  const [displayItem, setDisplayItem] = useState<any>({});
  const { id, d, c, quantity, price } = item;
  useEffect(() => {
    fetch(`http://localhost:5000/random?d=${d}&c=${c}&id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDisplayItem(data);
      });
  }, [id, d, c]);
  return (
    <tr className="border-b">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {i}
      </td>
      <td
        title={displayItem.name || displayItem.productName}
        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
      >
        {displayItem.name?.slice(0, 30) ||
          displayItem.productName?.slice(0, 30)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {quantity}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {price}
        {d === "kacha_bazer" ? "TK" : "$"}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {d !== "kacha_bazer"
          ? quantity * parseFloat(price) * 85
          : quantity * parseFloat(price)}
        TK
      </td>
    </tr>
  );
};

export default SingleOrderItem;
