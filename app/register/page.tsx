"use client";

import { useState } from "react";
import Image from "next/image";

export default function Register() {
  const [role, setRole] = useState<"customer" | "driver">("customer");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState<any>({
    name: "",
    surname: "",
    phone: "",
    password: "",
    confirmPassword: "",
    idPic: null,
    licensePic: null,
    selfiePic: null,
    vehiclePlate: "",
    vehicleType: "Taxi",
    insurancePic: null,
  });

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirm = () => setShowConfirm(!showConfirm);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (role === "customer" && (!form.name || !form.phone || !form.password)) {
      setError("All fields are required for customer");
      return;
    }

    if (
      role === "driver" &&
      (!form.name ||
        !form.surname ||
        !form.phone ||
        !form.password ||
        !form.confirmPassword ||
        !form.idPic ||
        !form.licensePic ||
        !form.vehiclePlate ||
        !form.vehicleType ||
        !form.insurancePic ||
        !form.selfiePic)
    ) {
      setError("All fields are required for driver");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        if (form[key] !== null) formData.append(key, form[key]);
      });
      formData.append("role", role);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");

      setSuccess("Registered successfully! You can now login.");
      setForm({
        name: "",
        surname: "",
        phone: "",
        password: "",
        confirmPassword: "",
        idPic: null,
        licensePic: null,
        selfiePic: null,
        vehiclePlate: "",
        vehicleType: "Taxi",
        insurancePic: null,
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* BRANDING */}
        <div className="auth-header">
          <Image
            src="/bike-logo.png"
            alt="MzaziGo Logo"
            width={35}
            height={35}
          />
          <h1>MzaziGo Kenya</h1>
        </div>

        <p>Sign up as {role === "customer" ? "Customer" : "Driver"}</p>

        {/* ROLE SWITCH */}
        <div className="role-switch">
          <button
            type="button"
            className={role === "customer" ? "active" : ""}
            onClick={() => setRole("customer")}
          >
            Customer
          </button>
          <button
            type="button"
            className={role === "driver" ? "active" : ""}
            onClick={() => setRole("driver")}
          >
            Driver
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleRegister}>
          {role === "customer" && (
            <div className="customer-fields">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                />
                <span onClick={togglePassword} className="eye-toggle">
                  {showPassword ? "👁️" : "🙈"}
                </span>
              </div>
              <div className="password-wrapper">
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                />
                <span onClick={toggleConfirm} className="eye-toggle">
                  {showConfirm ? "👁️" : "🙈"}
                </span>
              </div>
            </div>
          )}

          {role === "driver" && (
            <div className="driver-fields">
              <input
                type="text"
                name="name"
                placeholder="First Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                value={form.surname}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                />
                <span onClick={togglePassword} className="eye-toggle">
                  {showPassword ? "👁️" : "🙈"}
                </span>
              </div>
              <div className="password-wrapper">
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                />
                <span onClick={toggleConfirm} className="eye-toggle">
                  {showConfirm ? "👁️" : "🙈"}
                </span>
              </div>

              <label>ID Picture:</label>
              <input type="file" name="idPic" onChange={handleChange} />

              <label>License Picture:</label>
              <input type="file" name="licensePic" onChange={handleChange} />

              <label>Driver Selfie:</label>
              <input type="file" name="selfiePic" onChange={handleChange} />

              <input
                type="text"
                name="vehiclePlate"
                placeholder="Vehicle Plate"
                value={form.vehiclePlate}
                onChange={handleChange}
              />
              <select name="vehicleType" value={form.vehicleType} onChange={handleChange}>
                <option value="Taxi">Taxi</option>
                <option value="Boda">Boda</option>
              </select>

              <label>Insurance Document:</label>
              <input type="file" name="insurancePic" onChange={handleChange} />
            </div>
          )}

          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}

          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
