export default function Home() {
  return (
    <>
      <div className="navbar">
        <h1>Mzazigo</h1>
        <div>
          <a href="/login">Login</a>
          <a href="/register">Sign Up</a>
        </div>
      </div>

      <div className="hero">
        <h2>Go anywhere with Mzazigo</h2>
        <p>
          Safe. Fast. Reliable rides at your fingertips.
        </p>
        <button>Book a Ride</button>
      </div>

      <div className="footer">
        © 2026 Mzazigo Kenya
      </div>
    </>
  );
}
