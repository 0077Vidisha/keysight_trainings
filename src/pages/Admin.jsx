import { useState } from "react";

function Admin() {
  const [showModal, setShowModal] = useState(false);

  const [flights, setFlights] = useState([
    {
      id: 1,
      airline: "IndiGo",
      from: "Delhi",
      to: "Mumbai",
      price: 5200,
      seats: 12,
    },
    {
      id: 2,
      airline: "Air India",
      from: "Bangalore",
      to: "Chennai",
      price: 3200,
      seats: 8,
    },
  ]);

  const [form, setForm] = useState({
    airline: "",
    from: "",
    to: "",
    price: "",
    seats: "",
  });

  // ➕ ADD FLIGHT
  const handleAdd = () => {
    setFlights([
      ...flights,
      {
        id: Date.now(),
        ...form,
      },
    ]);

    setForm({
      airline: "",
      from: "",
      to: "",
      price: "",
      seats: "",
    });

    setShowModal(false);
  };

  // ❌ DELETE FLIGHT
  const handleDelete = (id) => {
    setFlights(flights.filter((f) => f.id !== id));
  };

  return (
    <div className="admin-wrapper">
      <h2>Admin Dashboard</h2>

      <button onClick={() => setShowModal(true)}>➕ Add Flight</button>

      <div className="admin-table">
        {flights.map((f) => (
          <div key={f.id} className="admin-row">
            <span>{f.airline}</span>
            <span>{f.from} → {f.to}</span>
            <span>₹{f.price}</span>
            <span>Seats: {f.seats}</span>

            <button
              className="delete-btn"
              onClick={() => handleDelete(f.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* ---------- MODAL ---------- */}
      {showModal && (
        <div className="modal">
          <div className="modal-box">
            <h3>Add Flight</h3>

            <input
              placeholder="Airline"
              value={form.airline}
              onChange={(e) =>
                setForm({ ...form, airline: e.target.value })
              }
            />

            <input
              placeholder="From"
              value={form.from}
              onChange={(e) =>
                setForm({ ...form, from: e.target.value })
              }
            />

            <input
              placeholder="To"
              value={form.to}
              onChange={(e) =>
                setForm({ ...form, to: e.target.value })
              }
            />

            <input
              placeholder="Price"
              type="number"
              value={form.price}
              onChange={(e) =>
                setForm({ ...form, price: e.target.value })
              }
            />

            <input
              placeholder="Seats"
              type="number"
              value={form.seats}
              onChange={(e) =>
                setForm({ ...form, seats: e.target.value })
              }
            />

            <div className="modal-actions">
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button onClick={handleAdd}>Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
