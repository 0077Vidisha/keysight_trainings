// ✅ Mock backend for flights

const airlines = ["Indigo", "Air India", "Vistara", "SpiceJet", "Akasa Air"];

function randomTime() {
  const hour = Math.floor(Math.random() * 12) + 1;
  const min = Math.floor(Math.random() * 60)
    .toString()
    .padStart(2, "0");
  const ampm = Math.random() > 0.5 ? "AM" : "PM";
  return `${hour}:${min} ${ampm}`;
}

function randomPrice() {
  return Math.floor(Math.random() * 5000) + 2500;
}

function randomSeats() {
  return Math.floor(Math.random() * 25) + 5;
}

function randomFlightNo() {
  return (
    "FL-" +
    Math.floor(Math.random() * 900 + 100)
  );
}


// ⭐ This simulates real API call
export function fetchFlights({ from, to }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const flights = Array.from({ length: 6 }).map(() => ({
        airline: airlines[Math.floor(Math.random() * airlines.length)],
        flightNo: randomFlightNo(),
        from,
        to,
        time: randomTime(),
        price: randomPrice(),
        seats: randomSeats(),
      }));

      resolve(flights);
    }, 800); // ⭐ fake network delay
  });
}
