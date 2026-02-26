"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()

  const [role, setRole] = useState("customer")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const handleRegister = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setMessage("")

    const form = e.target
    const formData = new FormData(form)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: "POST",
        body: formData
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message || "Registration failed")
        setLoading(false)
        return
      }

      if (role === "driver") {
        setMessage("Driver account submitted. Please wait for admin verification.")
      } else {
        setMessage("Registration successful! Redirecting to login...")
        setTimeout(() => router.push("/login"), 2000)
      }

      form.reset()
      setLoading(false)

    } catch (err) {
      setError("Server error")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-5">
      <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-lg">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Create Mzazigo Account
        </h2>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        {message && (
          <div className="bg-green-100 text-green-600 p-3 rounded mb-4 text-sm">
            {message}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">

          {/* Select Role */}
          <div>
            <label className="block mb-2 font-medium">Register As</label>
            <select
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border p-3 rounded-md"
            >
              <option value="customer">Customer</option>
              <option value="driver">Driver</option>
            </select>
          </div>

          {/* CUSTOMER FIELDS */}
          {role === "customer" && (
            <>
              <input
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className="w-full border p-3 rounded-md"
              />

              <input
                name="phone"
                type="text"
                required
                placeholder="Phone Number"
                className="w-full border p-3 rounded-md"
              />

              <input
                name="password"
                type="password"
                required
                placeholder="Password"
                className="w-full border p-3 rounded-md"
              />
            </>
          )}

          {/* DRIVER FIELDS */}
          {role === "driver" && (
            <>
              <div className="pt-4 border-t mt-4">
                <h3 className="font-semibold mb-3">
                  Driver Personal Details
                </h3>
              </div>

              <input
                name="firstName"
                type="text"
                required
                placeholder="First Name"
                className="w-full border p-3 rounded-md"
              />

              <input
                name="surname"
                type="text"
                required
                placeholder="Surname"
                className="w-full border p-3 rounded-md"
              />

              <input
                name="otherNames"
                type="text"
                placeholder="Other Names"
                className="w-full border p-3 rounded-md"
              />

              <input
                name="phone"
                type="text"
                required
                placeholder="Phone Number"
                className="w-full border p-3 rounded-md"
              />

              <input
                name="password"
                type="password"
                required
                placeholder="Password"
                className="w-full border p-3 rounded-md"
              />

              <input
                name="vehicleType"
                type="text"
                required
                placeholder="Vehicle Type (Taxi / Boda)"
                className="w-full border p-3 rounded-md"
              />

              <div className="pt-4 border-t mt-4">
                <h3 className="font-semibold mb-3">
                  Upload Verification Documents
                </h3>
              </div>

              <label className="block text-sm">ID Photo</label>
              <input name="idPhoto" type="file" required className="w-full" />

              <label className="block text-sm">Valid License</label>
              <input name="licensePhoto" type="file" required className="w-full" />

              <label className="block text-sm">Vehicle Plate Photo</label>
              <input name="vehiclePlatePhoto" type="file" required className="w-full" />

              <label className="block text-sm">Valid Insurance</label>
              <input name="insurancePhoto" type="file" required className="w-full" />
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition mt-4"
          >
            {loading ? "Registering..." : "Register"}
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-black font-medium">
            Login
          </a>
        </p>

      </div>
    </div>
  )
}
