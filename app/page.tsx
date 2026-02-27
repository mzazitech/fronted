"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to MzaziGo Kenya</h1>
        <p>Ride anywhere in Kenya safely and quickly</p>
        <div className="cta-buttons">
          <Link href="/login">
            <button className="btn-primary">Login</button>
          </Link>
          <Link href="/register">
            <button className="btn-primary">Register</button>
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Fast Rides</h3>
          <p>Request Taxi or Boda rides with real-time GPS tracking.</p>
        </div>
        <div className="feature-card">
          <h3>Safe Drivers</h3>
          <p>All drivers verified with license, insurance, and selfie.</p>
        </div>
        <div className="feature-card">
          <h3>Easy Payments</h3>
          <p>Pay via M-Pesa or Cash (driver choice available).</p>
        </div>
      </section>

      <section className="about">
        <h2>About MzaziGo</h2>
        <p>
          MzaziGo Kenya connects customers with verified drivers across the
          country. Our platform ensures safety, transparency, and real-time
          GPS tracking for every ride.
        </p>
      </section>
    </div>
  );
}
