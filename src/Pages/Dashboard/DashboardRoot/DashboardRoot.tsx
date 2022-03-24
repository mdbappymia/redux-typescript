import { FC } from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardRoot: FC = () => {
  return (
    <div className="my-10">
      <nav className="flex justify-center dashboard">
        <Link className="mx-3 bg-yellow-600 px-3 py-2 rounded font-bold" to="">
          Booking
        </Link>
        <Link
          className="mx-3 bg-yellow-600 px-3 py-2 rounded font-bold"
          to="orders"
        >
          Orders
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default DashboardRoot;
