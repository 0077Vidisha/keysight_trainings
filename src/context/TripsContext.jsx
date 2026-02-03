import { createContext, useState } from "react";

export const TripsContext = createContext();

export function TripsProvider({ children }) {
  const [trips, setTrips] = useState([]);

  const addTrip = (trip) => {
    setTrips((prev) => [...prev, trip]);
  };

  return (
    <TripsContext.Provider value={{ trips, addTrip }}>
      {children}
    </TripsContext.Provider>
  );
}
