import { FC } from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardRoot: FC = () => {
  return (
    <div className="my-10">
      <div className="flex justify-center">
        <Link className="mx-3 bg-yellow-600 px-3 py-2 rounded font-bold" to="">
          Booking
        </Link>
        <Link
          className="mx-3 bg-yellow-600 px-3 py-2 rounded font-bold"
          to="orders"
        >
          Orders
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default DashboardRoot;
