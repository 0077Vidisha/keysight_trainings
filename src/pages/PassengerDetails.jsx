import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function PassengerDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const flight = location.state?.flight;

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  if (!flight) return <h3>No flight selected</h3>;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age) {
      alert("Please fill passenger details");
      return;
    }

    navigate("/payment", {
      state: {
        flight,
        passenger: { name, age },
      },
    });
  };

  return (
    <div className="passenger-wrapper">

      <div className="passenger-card">

        <h2>Passenger Details</h2>

        {/* ⭐ Flight Summary */}
        <div className="flight-summary-box">
          <h4>{flight.airline} ({flight.flightNo})</h4>
          <p>{flight.from} → {flight.to}</p>
          <p>₹{flight.price}</p>
        </div>

        {/* ⭐ Form */}
        <form onSubmit={handleSubmit} className="passenger-form">

          <div>
            <label>Passenger Name</label>
            <input
              type="text"
              placeholder="Enter passenger name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label>Age</label>
            <input
              type="number"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <button type="submit" className="big-btn">
            Proceed to Payment →
          </button>

        </form>
      </div>
    </div>
  );
}

export default PassengerDetails;
