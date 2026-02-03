import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

import { AuthProvider } from "./context/AuthContext";
import { TripsProvider } from "./context/TripsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <TripsProvider>
        <App />
      </TripsProvider>
    </AuthProvider>
  </React.StrictMode>
);
