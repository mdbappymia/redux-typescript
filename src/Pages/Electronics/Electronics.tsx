import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { EProducts } from "../../Interfaces/Interfaces";

import { RootState } from "../../redux/store/store";
import SingleEShopHome from "../Home/SingleEShopHome/SingleEShopHome";

const Electronics = () => {
  const electronics = useSelector((state: RootState) => state.shop.electronics);
  const [displayElectronics, setDisplayElectronics] = useState(electronics);
  useEffect(() => {
    setDisplayElectronics(electronics);
  }, [electronics]);
  const handleSearch = (e: any) => {
    if (e === "") {
      setDisplayElectronics(electronics);
      return;
    }
    const searchPlace = electronics.filter((electronic) =>
      electronic.name.toLowerCase().includes(e)
    );
    setDisplayElectronics(searchPlace);
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-5xl font-bold uppercase my-5 py-6 bg-gray-400">
        electronics
      </h1>
      <div className="text-center my-5">
        <input
          className="border lg:w-1/2 px-2 py-3"
          type="text"
          placeholder="Search by Name"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {displayElectronics.map((product: EProducts) => (
          <SingleEShopHome product={product} />
        ))}
      </div>
    </div>
  );
};

export default Electronics;
