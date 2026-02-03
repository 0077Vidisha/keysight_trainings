import { useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { TripsContext } from "../context/TripsContext";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const { flight, passenger } = location.state || {};
  const { addTrip } = useContext(TripsContext);

  const [method, setMethod] = useState("card");
  const [loading, setLoading] = useState(false);

  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  });

  const [upi, setUpi] = useState("");

  if (!flight || !passenger) {
    return <h3 style={{ padding: "40px" }}>Invalid payment request</h3>;
  }

  /* ------------------ PAYMENT LOGIC ------------------ */

  const handlePay = async () => {
    const isCardValid =
      card.number && card.expiry && card.cvv && card.name;

    const isUpiValid = upi;

    if (
      (method === "card" && !isCardValid) ||
      (method === "upi" && !isUpiValid)
    ) {
      alert("Please fill payment details");
      return;
    }

    setLoading(true);

    // ⭐ simulate payment processing
    setTimeout(() => {
      const bookingId =
        "BK" + Math.floor(Math.random() * 1000000);

      // ⭐ save booking
      addTrip({
        bookingId,
        flight,
        passenger,
      });

      navigate("/success", {
        state: { bookingId, flight, passenger },
      });
    }, 1200);
  };

  /* ------------------ UI ------------------ */

  return (
    <div className="payment-wrapper">

      {/* LEFT - SUMMARY */}
      <div className="order-summary">
        <h3>Order Summary</h3>

        <p><strong>Passenger</strong></p>
        <p>{passenger.name}</p>

        <p><strong>Flight</strong></p>
        <p>{flight.airline} ({flight.flightNo})</p>
        <p>{flight.from} → {flight.to}</p>

        <p style={{ marginTop: "15px" }}>
          <strong>Total Fare</strong>
        </p>

        <h2>₹{flight.price}</h2>
      </div>


      {/* RIGHT - PAYMENT */}
      <div className="payment-box">
        <h3>Payment Method</h3>

        <div className="payment-tabs">
          <button
            className={method === "card" ? "active" : ""}
            onClick={() => setMethod("card")}
          >
            💳 Card
          </button>

          <button
            className={method === "upi" ? "active" : ""}
            onClick={() => setMethod("upi")}
          >
            📱 UPI
          </button>
        </div>


        {/* CARD */}
        {method === "card" && (
          <div className="payment-form">
            <input
              placeholder="Card Number"
              value={card.number}
              onChange={(e) =>
                setCard({ ...card, number: e.target.value })
              }
            />

            <input
              placeholder="Expiry (MM/YY)"
              value={card.expiry}
              onChange={(e) =>
                setCard({ ...card, expiry: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="CVV"
              value={card.cvv}
              onChange={(e) =>
                setCard({ ...card, cvv: e.target.value })
              }
            />

            <input
              placeholder="Cardholder Name"
              value={card.name}
              onChange={(e) =>
                setCard({ ...card, name: e.target.value })
              }
            />
          </div>
        )}


        {/* UPI */}
        {method === "upi" && (
          <div className="payment-form">
            <input
              placeholder="Enter UPI ID (name@upi)"
              value={upi}
              onChange={(e) => setUpi(e.target.value)}
            />
          </div>
        )}


        {/* PAY BUTTON */}
        <button
          className="pay-btn"
          disabled={loading}
          onClick={handlePay}
        >
          {loading ? "Processing payment..." : `Pay ₹${flight.price}`}
        </button>
      </div>
    </div>
  );
}

export default Payment;
