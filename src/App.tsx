import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import HomeRoot from "./Pages/Home/HomeRoot/HomeRoot";
import { useEffect } from "react";
import { getBDTourPlace, getWorldTourPlace } from "./redux/slices/placeSlice";
import { useDispatch } from "react-redux";
import {
  getAllBike,
  getAllEProduct,
  getVegetableItems,
} from "./redux/slices/shopSlice";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer/Footer";
import BangladeshTourRoot from "./Pages/BangladeshTour/BangladeshTourRoot";
import WorldTour from "./Pages/WorldTour/WorldTour";
import KachaBazar from "./Pages/KachaBazar/KachaBazar";
import BikeBazar from "./Pages/BikeBazar/BikeBazar";
import Electronics from "./Pages/Electronics/Electronics";
import CartRoot from "./Pages/Cart/CartRoot/CartRoot";
import PlaceDetails from "./Pages/PlaceDetails/PlaceDetails";
import PrivetRoute from "./auth/PrivetRoute/PrivetRoute";
import DashboardRoot from "./Pages/Dashboard/DashboardRoot/DashboardRoot";
import BookedServices from "./Pages/Dashboard/BookedServices/BookedServices";
import Orders from "./Pages/Dashboard/Orders/Orders";
import Checkout from "./Pages/Checkout/Checkout";
import About from "./Pages/About/About";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWorldTourPlace("http://localhost:5000/ta-places"));
    dispatch(getBDTourPlace("http://localhost:5000/bd-places"));
    dispatch(getVegetableItems("http://localhost:5000/vagetables"));
    dispatch(getAllBike("http://localhost:5000/bikes"));
    dispatch(getAllEProduct("http://localhost:5000/electronics"));
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Navbar />
      <div className="initial-width">
        <Routes>
          <Route path="/" element={<HomeRoot />} />
          <Route path="/bd-places" element={<BangladeshTourRoot />} />
          <Route path="/wd-places" element={<WorldTour />} />
          <Route path="/vegetables" element={<KachaBazar />} />
          <Route path="/bikes" element={<BikeBazar />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/cart" element={<CartRoot />} />
          <Route
            path="/placeDetails/:id"
            element={
              <PrivetRoute>
                <PlaceDetails />
              </PrivetRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivetRoute>
                <DashboardRoot />
              </PrivetRoute>
            }
          >
            <Route index={true} element={<BookedServices />} />
            <Route path="orders" element={<Orders />} />
          </Route>
          <Route
            path="/checkout"
            element={
              <PrivetRoute>
                <Checkout />
              </PrivetRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
