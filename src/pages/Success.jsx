import { useLocation, useNavigate } from "react-router-dom";

function Success() {
  const location = useLocation();
  const navigate = useNavigate();

  const { bookingId, flight, passenger } = location.state || {};

  if (!bookingId) {
    return (
      <div className="container">
        <h3>No booking found</h3>
      </div>
    );
  }

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h2>🎉 Booking Confirmed!</h2>

      <p style={{ marginTop: "10px" }}>
        <strong>Booking ID:</strong>
        <br />
        {bookingId}
      </p>

      <hr style={{ margin: "20px 0" }} />

      <p>
        <strong>{flight.airline}</strong> ({flight.flightNo})
      </p>
      <p>
        {flight.from} → {flight.to}
      </p>

      <p style={{ marginTop: "10px" }}>
        Passenger: <strong>{passenger.name}</strong>
      </p>

      <button
        onClick={() => navigate("/")}
        style={{ width: "100%", marginTop: "20px" }}
      >
        Book Another Flight
      </button>
    </div>
  );
}

export default Success;
