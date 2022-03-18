import "./App.css";
import Places from "./Pages/Places/Places";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import HomeRoot from "./Pages/Home/HomeRoot/HomeRoot";
import { useEffect } from "react";
import { getBDTourPlace, getWorldTourPlace } from "./redux/slices/placeSlice";
import { useDispatch } from "react-redux";
import { getVegetableItems } from "./redux/slices/shopSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWorldTourPlace("http://localhost:5000/ta-places"));
    dispatch(getBDTourPlace("http://localhost:5000/bd-places"));
    dispatch(getVegetableItems("http://localhost:5000/vagetables"));
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeRoot />} />
        <Route path="/places" element={<Places />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
