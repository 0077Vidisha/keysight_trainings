import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Flights from "./pages/Flights";
import PassengerDetails from "./pages/PassengerDetails";
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import MyTrips from "./pages/MyTrips";
import Admin from "./pages/Admin";

import { AuthContext } from "./context/AuthContext";


/* ---------------- PROTECTED ROUTE ---------------- */

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);

  return user ? children : <Navigate to="/login" />;
}


/* ---------------- APP ---------------- */

function App() {
  return (
    <BrowserRouter>
      {/* ⭐ Navbar always visible */}
      <Navbar />

      <Routes>

        /* ================= PUBLIC ================= */
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        /* ================= PROTECTED ================= */

        <Route
          path="/flights"
          element={
            <PrivateRoute>
              <Flights />
            </PrivateRoute>
          }
        />

        <Route
          path="/passengers"
          element={
            <PrivateRoute>
              <PassengerDetails />
            </PrivateRoute>
          }
        />

        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />

        <Route
          path="/success"
          element={
            <PrivateRoute>
              <Success />
            </PrivateRoute>
          }
        />

        {/* My Bookings */}
        <Route
          path="/trips"
          element={
            <PrivateRoute>
              <MyTrips />
            </PrivateRoute>
          }
        />

        {/* Admin Panel */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />


        /* ================= FALLBACK (LAST ALWAYS) ================= */
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
