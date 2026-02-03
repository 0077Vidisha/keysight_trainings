import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFlights } from "../api/flightsApi";

function Flights() {
  const location = useLocation();
  const navigate = useNavigate();

  const { from, to } = location.state || {};

  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function loadFlights() {
      setLoading(true);
      const data = await fetchFlights({ from, to });
      setFlights(data);
      setLoading(false);
    }

    loadFlights();
  }, [from, to]);

  const filteredFlights = flights.filter(
    (f) =>
      f.airline.toLowerCase().includes(query.toLowerCase()) ||
      f.flightNo.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flights-wrapper">
      <h2>
        Flights: {from} → {to}
      </h2>

      <input
        placeholder="Search airline or flight no"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginBottom: "20px" }}
      />

      {loading && <p>🔄 Searching flights...</p>}

      {!loading &&
        filteredFlights.map((flight, index) => (
          <div key={index} className="flight-card">
            <div>
              ✈ {flight.airline}
              <br />
              {flight.flightNo}
            </div>

            <div>
              {flight.from} → {flight.to}
              <br />
              {flight.time}
            </div>

            <div>₹{flight.price}</div>

            <div>Seats: {flight.seats}</div>

            <button
              onClick={() =>
                navigate("/passengers", { state: { flight } })
              }
            >
              Book
            </button>
          </div>
        ))}
    </div>
  );
}

export default Flights;
