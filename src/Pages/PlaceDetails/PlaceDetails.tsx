/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/store/store";

const PlaceDetails: FC = () => {
  const [displayPlace, setDisplayPlace] = useState<any>({});
  const [pack, setPack] = useState<any>("1");
  const user = useSelector((state: RootState) => state.users.user);
  const { id } = useParams();
  const newData: Array<string> | any = id?.split("__");
  const totalPrice = displayPlace.price * parseInt(pack);
  useEffect(() => {
    fetch(
      `http://localhost:5000/random?d=${newData[1]}&c=${newData[2]}&id=${newData[0]}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDisplayPlace(data);
      });
  }, []);
  console.log(pack);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data: any) => {
    const isBooked = window.confirm("Are you sure booked ?");
    if (isBooked) {
      const submitData = {
        ...data,
        name: user.displayName,
        email: user.email,
        order_id: displayPlace._id,
        user_id: user.uid,
        pack: pack,
        d: newData[1],
        c: newData[2],
        status: "pending",
      };
      fetch("http://localhost:5000/booked_place", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(submitData),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            alert("Data added successfully");
            reset();
          }
        });
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-5xl uppercase py-5 my-5 bg-gray-300">
        Booked Your Favourite place
      </h1>
      <div className="flex justify-between">
        <div>
          <img src={displayPlace.img} alt="" />
          <h1>{displayPlace.name}</h1>
          <h1>Location: {displayPlace.location}</h1>
          <h1>Price: {totalPrice} $</h1>
        </div>
        <div className="w-1/2 my-10">
          <h1 className="uppercase font-bold text-3xl text-center">
            Enter your info
          </h1>
          <form className="mx-auto lg:w-2/3" onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
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

            {/* include validation with required or other standard HTML validation rules */}
            <label htmlFor="">Start Date:</label>
            <input
              type="date"
              className="w-full border mb-5 py-2 px-1 text-md border-black rounded"
              {...register("date", { required: true })}
            />
            <label htmlFor="">Select Your Package:</label>
            <select
              onChange={(e) => setPack(e.target.value)}
              className="w-full border mb-5 py-2 px-1 text-md border-black rounded"
              defaultValue={pack}
            >
              <option value="1">30 Days</option>
              <option value="2">100 Days</option>
              <option value="3">6 Months</option>
              <option value="4">1 Year</option>
            </select>
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
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input
              className="bg-indigo-700 text-white font-bold px-3 py-2 rounded"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
