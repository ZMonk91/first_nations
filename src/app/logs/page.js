"use client"; // This file is a client-side script

import { useState } from "react";

// `app/logs/page.tsx` is the UI for the `/logs` URL
export default function Page() {
  const [logEntry, setLogEntry] = useState({
    date: "",
    driverName: "",
    vehicleId: "",
    startingMileage: "",
    endingMileage: "",
    startingLocation: "",
    endingLocation: "",
    purpose: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogEntry((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Log entry submitted:", logEntry);
    // We'll implement the actual submission logic later
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <h1>Mileage Logs</h1>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={logEntry.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="driverName">Driver Name:</label>
          <input
            type="text"
            id="driverName"
            name="driverName"
            value={logEntry.driverName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="miles">Miles:</label>
          <input
            type="number"
            id="miles"
            name="miles"
            value={logEntry.miles}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={logEntry.destination}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="purpose">Purpose:</label>
          <textarea
            id="purpose"
            name="purpose"
            value={logEntry.purpose}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit Log</button>
      </form>
    </div>
  );
}
