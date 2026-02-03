import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);

const handleSearch = () => {
  if (from && to && date) {
    navigate("/flights", {
      state: { from, to, date, passengers }
    });
  } else {
    alert("Fill all details");
  }
};

  return (
    <div className="dashboard">

      {/* HERO TITLE */}
      <h1 className="hero-title">
        Plan your journey with ease
      </h1>

      {/* MAIN BOOKING PANEL */}
      <div className="booking-panel">

        {/* TABS */}
        <div className="booking-tabs">
          <div className="tab active">✈ Flights</div>
        </div>

        {/* TRIP TYPE */}
        <div className="trip-types">
          <label>
            <input
              type="radio"
              checked={tripType === "oneway"}
              onChange={() => setTripType("oneway")}
            />
            One Way
          </label>

          <label>
            <input
              type="radio"
              checked={tripType === "round"}
              onChange={() => setTripType("round")}
            />
            Round Trip
          </label>
        </div>

        {/* SEARCH GRID */}
        <div className="booking-grid">
          <input
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />

          <input
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <select
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
          >
            <option value="1">1 Passenger</option>
            <option value="2">2 Passengers</option>
            <option value="3">3 Passengers</option>
            <option value="4">4 Passengers</option>
          </select>

          <button className="big-search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
