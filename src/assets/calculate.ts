import { ProductCart } from "../Interfaces/Interfaces";

export const calculateTotal = (cart: ProductCart | any) => {
  let takaTotal = 0;
  let dollerTotal = 0;
  for (let item of cart) {
    if (item.d === "kacha_bazer") {
      let taka = item.quantity * item.price;
      takaTotal = takaTotal + taka;
    } else {
      let doller = item.quantity * item.price;
      dollerTotal = dollerTotal + doller;
    }
  }
  const dollerToTaka = dollerTotal * 85;
  const grandTotal = takaTotal + dollerToTaka;
  return grandTotal.toFixed(2);
};
