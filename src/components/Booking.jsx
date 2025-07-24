import React, { useState } from "react";

const cities = [  "Manali", "Mcdeolganj", "Dharamsala", "Jammu", "Amritsar", "Pathankot",
     "Ludhiana", "Patiala", "Nabha", "Malerkotla", "Chandigarh", "Shimla", "Una", "Mandi Himachal", "Hamirpur",
      "Ambala", "New Delhi", "Delhi Airport","Vrindavan", "Agra", "Lucknow", "Ayodhya", 
      "Haridwar","Dehradun","Rishikesh", "Badrinath","Kedarnath","Sonprayag", "Other"];

export default function Booking() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [showCars, setShowCars] = useState(false);

  const handleSearch = () => {
    if (from && to) setShowCars(true);
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-violet-100 via-white to-violet-200 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-violet-700 mb-8">
          🚖 Book Your Taxi
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">From</label>
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full p-3 border bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">To</label>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full p-3 border rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleSearch}
            className="bg-violet-600 hover:bg-violet-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition duration-300"
          >
            🔍 Search
          </button>
        </div>

        {showCars && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* 5-Seater */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold text-violet-700 mb-2">🚗 4+1-Seater</h2>
              <p className="mb-1">Avaliable Cars: Aura, Dzire, Glanza, Honda Amaze, Etios, Vitara</p>
              <p className="mb-1 text-sm text-gray-600">AC | Comfortable Ride | Experienced Driver</p>
              {/* <p className="mt-3 text-lg font-bold text-green-600">₹3500</p> */}
              <button
  onClick={() => window.location.href = 'tel:6284882520'}
  className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition duration-300"
>
  📞 Contact Us
</button>

            </div>

            {/* 7-Seater */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold text-violet-700 mb-2">🚙 6+1-Seater</h2>
              <p className="mb-1">Available Cars: Ertiga, Marazoo, Kia Karens, Innova Crysta, Toyata Rumion, Alkazar</p>
              <p className="mb-1 text-sm text-gray-600">Spacious | AC | Experienced Driver</p>
              {/* <p className="mt-3 text-lg font-bold text-green-600">₹6500</p> */}
             <button
  onClick={() => window.location.href = 'tel:6284882520'}
  className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition duration-300"
>
  📞 Contact Us
</button>

            </div>

            {/* 7-Seater Premium */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold text-violet-700 mb-2">🚐 6+1-Seater Premium</h2>
              <p className="mb-1">Available Cars: Fortuner, Legendar, Innvoa H-Cross, Thar, Thar Roxy</p>
              <p className="mb-1 text-sm text-gray-600">Luxury | AC | Music</p>
              {/* <p className="mt-3 text-lg font-bold text-green-600">₹8500</p> */}
              <button
  onClick={() => window.location.href = 'tel:6284882520'}
  className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition duration-300"
>
  📞 Contact Us
</button>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}
