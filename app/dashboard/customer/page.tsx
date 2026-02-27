"use client";

import { useEffect, useState } from "react";

export default function CustomerDashboard() {
  const [pickup, setPickup] = useState<string | null>(null);
  const [dropoff, setDropoff] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      setLoadingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = `${position.coords.latitude}, ${position.coords.longitude}`;
        setPickup(coords);
        setLoadingLocation(false);
      },
      () => {
        alert("Please allow location access");
        setLoadingLocation(false);
      }
    );
  }, []);

  const handleRequestRide = () => {
    if (!pickup || !dropoff) {
      alert("Please enter destination");
      return;
    }

    console.log({
      pickup,
      dropoff,
    });

    alert("Ride request sent!");
  };

  return (
    <div>
      <h2>Customer Dashboard</h2>

      <div className="card">
        <h3>Request a Ride</h3>

        <div className="form-group">
          <label>Your Current Location</label>
          <div className="location-display">
            {loadingLocation
              ? "Detecting location..."
              : pickup || "Location not available"}
          </div>
        </div>

        <div className="form-group">
          <label>Enter Destination</label>
          <input
            type="text"
            placeholder="Where are you going?"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />
        </div>

        <button className="primary-btn" onClick={handleRequestRide}>
          Request Ride
        </button>
      </div>
    </div>
  );
}
