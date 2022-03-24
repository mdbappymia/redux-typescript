import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookingService } from "../../../redux/slices/bookingServiceSlice";
import { RootState } from "../../../redux/store/store";
import SingleBookedService from "../SingleBookedService/SingleBookedService";

const BookedServices = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.users.user);
  const bookingService = useSelector(
    (state: RootState) => state.booking.bookedService
  );
  useEffect(() => {
    dispatch(
      getAllBookingService(`http://localhost:5000/booked_place/${user.uid}`)
    );
  }, [user.uid, dispatch]);
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl uppercase my-5 border-t mt-10 pt-5">
        booked
      </h1>
      <div className="booking-container">
        {bookingService.length === 0 && (
          <h1 className="text-center my-4 text-md">Booking Service is empty</h1>
        )}
        {bookingService.map((booking) => (
          <SingleBookedService key={booking._id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default BookedServices;
