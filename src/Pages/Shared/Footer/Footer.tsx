import React, { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <div className="bg-black text-white pb-96 pt-10">
      <div className="container mx-auto lg:grid grid-cols-3 gap-5 px-3">
        <div>
          <h1 className="font-bold text-3xl my-2 border-b py-2 border-gray-500">
            E-SHOP
          </h1>
          <ul className="flex gap-3">
            <li>
              <Link className="hover:text-green-700 text-2xl" to="/">
                <i className="fab fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link className="hover:text-green-700 text-2xl" to="/">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link className="hover:text-green-700 text-2xl" to="">
                <i className="fab fa-whatsapp-square"></i>
              </Link>
            </li>
            <li>
              <Link className="hover:text-green-700 text-2xl" to="">
                <i className="fas fa-phone"></i>
              </Link>
            </li>
            <li>
              <Link className="hover:text-green-700 text-2xl" to="">
                <i className="fas fa-envelope"></i>
              </Link>
            </li>
          </ul>
          <h1>Address: 789 Mohammadpur, Dhaka.</h1>
          <h1>Phone: 01586231256</h1>
          <h1>Email: e-shop@info.com</h1>
        </div>
        <div>
          <h1 className="text-3xl font-bold uppercase border-b my-2 py-2 border-gray-500">
            Support
          </h1>
          <ul>
            <li>
              <Link className="hover:text-white text-gray-400" to="/">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-white text-gray-400" to="/">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="hover:text-white text-gray-400" to="">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-white text-gray-400" to="">
                Ask a question
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl font-bold uppercase border-b my-2 py-2 border-gray-500">
            Subscribe
          </h1>
          <form>
            <input
              type="text"
              className="w-full my-5 text-2xl text-black p-2 rounded outline-none"
              placeholder="Your email"
              name=""
              id=""
            />
            <input
              type="submit"
              value="Subscribe"
              className="bg-blue-600 mb-5 text-xl uppercase font-bold px-3 py-2 cursor-pointer rounded hover:bg-blue-800"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
