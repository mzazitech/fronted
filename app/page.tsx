export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-10 py-5 shadow-sm">
        <h1 className="text-2xl font-bold">Mzazigo</h1>

        <div className="flex gap-8 items-center">
          <a href="#ride" className="hover:text-gray-600">Ride</a>
          <a href="#drive" className="hover:text-gray-600">Drive</a>
          <a href="/login" className="hover:text-gray-600">Login</a>

          <a
            href="/register"
            className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800"
          >
            Sign Up
          </a>
        </div>
      </nav>


      {/* ================= HERO SECTION ================= */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-24 bg-gray-50">
        <div className="max-w-xl">
          <h2 className="text-5xl font-bold mb-6">
            Go anywhere with Mzazigo
          </h2>
          <p className="text-gray-600 mb-8">
            Safe. Fast. Reliable rides at your fingertips.
            Book taxis or bodas instantly across your city.
          </p>

          <div className="flex gap-4">
            <a
              href="/register?type=customer"
              className="bg-black text-white px-6 py-3 rounded-md"
            >
              Book a Ride
            </a>

            <a
              href="/register?type=driver"
              className="border border-black px-6 py-3 rounded-md"
            >
              Become a Driver
            </a>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1549924231-f129b911e442"
            alt="Ride"
            className="rounded-lg w-[500px] h-[350px] object-cover"
          />
        </div>
      </section>


      {/* ================= RIDE OPTIONS ================= */}
      <section id="ride" className="px-10 py-20">
        <h3 className="text-3xl font-bold mb-12 text-center">
          Choose Your Ride
        </h3>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Taxi */}
          <div className="border p-6 rounded-xl shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
              className="rounded-lg h-48 w-full object-cover mb-5"
              alt="Taxi"
            />
            <h4 className="text-xl font-bold mb-3">Mzazigo Taxi</h4>
            <p className="text-gray-600 mb-4">
              Comfortable city rides with professional drivers.
              Affordable prices and 24/7 availability.
            </p>
            <a
              href="/register?type=customer"
              className="bg-black text-white px-4 py-2 rounded-md"
            >
              Book Taxi
            </a>
          </div>

          {/* Boda */}
          <div className="border p-6 rounded-xl shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1597006488938-33f2d5e3a3d0"
              className="rounded-lg h-48 w-full object-cover mb-5"
              alt="Boda"
            />
            <h4 className="text-xl font-bold mb-3">Mzazigo Boda</h4>
            <p className="text-gray-600 mb-4">
              Beat traffic with fast motorcycle rides.
              Cheap, quick and efficient.
            </p>
            <a
              href="/register?type=customer"
              className="bg-black text-white px-4 py-2 rounded-md"
            >
              Book Boda
            </a>
          </div>

        </div>
      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-gray-100 px-10 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">
          Why Choose Mzazigo?
        </h3>

        <div className="grid md:grid-cols-3 gap-10 text-center">

          <div>
            <h4 className="text-xl font-bold mb-3">Safe & Verified</h4>
            <p className="text-gray-600">
              All drivers undergo strict verification and document checks.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-3">Affordable Prices</h4>
            <p className="text-gray-600">
              Competitive pricing with transparent fare calculation.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-3">24/7 Support</h4>
            <p className="text-gray-600">
              Dedicated support team available anytime you need help.
            </p>
          </div>

        </div>
      </section>


      {/* ================= DRIVE SECTION ================= */}
      <section id="drive" className="px-10 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h3 className="text-4xl font-bold mb-6">
            Earn money on your schedule
          </h3>
          <p className="text-gray-600 mb-8">
            Join thousands of drivers earning daily with Mzazigo.
            Flexible hours. Instant payouts.
          </p>

          <a
            href="/register?type=driver"
            className="bg-black text-white px-6 py-3 rounded-md"
          >
            Start Driving
          </a>
        </div>

        <div className="mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            alt="Driver"
            className="rounded-lg w-[500px] h-[350px] object-cover"
          />
        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-white px-10 py-10 mt-10">
        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h4 className="font-bold mb-4">Mzazigo</h4>
            <p className="text-gray-400">
              Kenya’s fastest growing ride platform.
              Safe rides. Smart earnings.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="text-gray-400 space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400">support@mzazigo.com</p>
            <p className="text-gray-400">+254 700 000 000</p>
          </div>

        </div>

        <div className="text-center text-gray-500 mt-10">
          © {new Date().getFullYear()} Mzazigo. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
