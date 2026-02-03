import { useContext } from "react";
import { TripsContext } from "../context/TripsContext";

function MyTrips() {
  const { trips } = useContext(TripsContext);

  return (
    <div className="flights-wrapper">
      <h2>My Bookings</h2>

      {trips.length === 0 && <p>No bookings yet</p>}

      {trips.map((trip, index) => (
        <div key={index} className="flight-card">
          <div>
            ✈ {trip.flight.airline}
            <br />
            {trip.flight.flightNo}
          </div>

          <div>
            {trip.flight.from} → {trip.flight.to}
          </div>

          <div>Passenger: {trip.passenger.name}</div>

          <div>₹{trip.flight.price}</div>

          <div>ID: {trip.bookingId}</div>
        </div>
      ))}
    </div>
  );
}

export default MyTrips;
