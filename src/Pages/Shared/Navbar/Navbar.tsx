import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import { RootState } from "../../../redux/store/store";

const Navbar: FC = () => {
  const [showItem, setShowItem] = useState(false);
  const user = useSelector((state: RootState) => state.users.user);
  const cartItem = useSelector((state: RootState) => state.shop.cart);
  const { logOut } = useFirebase();
  return (
    <div className="bg-black sticky top-0 z-20 py-6">
      <nav className="flex items-center justify-between flex-wrap container m-auto">
        <div className="flex mx-2 items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2 text-teal-300"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">E-SHOP</span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setShowItem(!showItem)}
            className="flex mr-3 items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`w-full ${
            showItem === true ? "block" : "hidden"
          } flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm mx-3 lg:flex-grow">
            <Link
              to="/"
              onClick={() => setShowItem(false)}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Home
            </Link>
            <Link
              to="/bd-places"
              onClick={() => setShowItem(false)}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Bangladesh Tour
            </Link>
            <Link
              to="/wd-places"
              onClick={() => setShowItem(false)}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              World Tour
            </Link>
            <Link
              to="/vegetables"
              onClick={() => setShowItem(false)}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Kacha Bazar
            </Link>
            <Link
              to="/bikes"
              onClick={() => setShowItem(false)}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Bike Bazar
            </Link>
            <Link
              to="/electronics"
              onClick={() => setShowItem(false)}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Electronics
            </Link>
            <Link
              to="about"
              onClick={() => setShowItem(false)}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              About
            </Link>
          </div>
          <div className="lg:flex mx-3 mt-4 lg:mt-0">
            <Link
              to="/dashboard"
              className="block lg:inline-block text-white text-xl font-bold lg:mx-2 my-3 lg:my-0"
              onClick={() => setShowItem(false)}
            >
              <i className="fas fa-user inline-block lg:mx-3 bg-blue-500 p-3 rounded-full"></i>
              <span className="text-white">Dashboard</span>
            </Link>
            <div className="text-white">
              <Link
                to="/cart"
                className="block lg:inline-block"
                onClick={() => setShowItem(false)}
              >
                <i className="fas fa-shopping-cart text-3xl"></i>
                <span className="bg-red-700 rounded-full inline-block p-2 text-white">
                  {cartItem.length}
                </span>
              </Link>
            </div>
            {user.email ? (
              <button
                onClick={logOut}
                className="inline-block  mx-2 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 bg-red-700 hover:bg-white mt-4 lg:mt-0"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setShowItem(false)}
                className="inline-block mx-2 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
