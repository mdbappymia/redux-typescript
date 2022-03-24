import { FC } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { calculateTotal } from "../../assets/calculate";
import { clearCart } from "../../redux/slices/shopSlice";
import { RootState } from "../../redux/store/store";

const Checkout: FC = () => {
  const user = useSelector((state: RootState) => state.users.user);
  const cartItems = useSelector((state: RootState) => state.shop.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  document.title = "Checkout";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data: any) => {
    const submitData = {
      ...data,
      name: user.displayName,
      email: user.email,
      user_id: user.uid,
      payment_status: "Unpaid",
      status: "pending",
      orders: cartItems,
      order_id: Date.now(),
    };
    const isOrder = window.confirm("Are you sure?");
    if (isOrder) {
      fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(submitData),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            alert("Successfull");
            reset();
            dispatch(clearCart());
            navigate("/dashboard/orders");
          }
        });
    }
  };
  return (
    <div className="my-10 container mx-auto">
      <h1 className="txt-center font-bold text-3xl uppercase border text-center py-3">
        Checkout
      </h1>
      <h1 className="text-center my-5 text-2xl">
        Total Cost: {calculateTotal(cartItems)}TK
      </h1>
      <div>
        <form className="mx-auto lg:w-2/3" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Name:</label>
          <input
            className="w-full disabled:bg-gray-100 disabled:border-gray-400 border mb-5 py-2 px-1 text-md border-black rounded"
            defaultValue={user.displayName}
            disabled
            {...register("name")}
          />
          <label htmlFor="">Email:</label>
          <input
            className="w-full disabled:bg-gray-100 disabled:border-gray-400 border mb-5 py-2 px-1 text-md border-black rounded"
            defaultValue={user.email}
            disabled
            {...register("email")}
          />
          <label htmlFor="">Your Address:</label>
          <input
            className="w-full border mb-5 py-2 px-1 text-md border-black rounded"
            {...register("address", { required: true })}
          />
          <label htmlFor="">Your Phone Number:</label>
          <input
            className="w-full border mb-5 py-2 px-1 text-md border-black rounded"
            {...register("phone", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}

          <input
            className="bg-indigo-700 text-white font-bold px-3 py-2 rounded cursor-pointer hover:bg-indigo-800"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
