// src/components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    console.log(`Searching for location: ${location}, Check-In: ${checkInDate}, Check-Out: ${checkOutDate}, Guests: ${guests}`);
    // Add logic for searching/filtering
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-full shadow-md py-2 px-4 flex justify-between items-center mt-4">
      {/* Location Input */}
      <div className="flex flex-col px-4">
        <label className="text-xs font-semibold">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Where are you going?"
          className="border-none outline-none text-sm text-gray-600"
        />
      </div>

      {/* Check-In Date */}
      <div className="flex flex-col px-4">
        <label className="text-xs font-semibold">Check-In</label>
        <input
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          className="border-none outline-none text-sm text-gray-600"
        />
      </div>

      {/* Check-Out Date */}
      <div className="flex flex-col px-4">
        <label className="text-xs font-semibold">Check-Out</label>
        <input
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          className="border-none outline-none text-sm text-gray-600"
        />
      </div>

      {/* Guests Input */}
      <div className="flex flex-col px-4">
        <label className="text-xs font-semibold">Guests</label>
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          min="1"
          className="border-none outline-none text-sm text-gray-600 w-16"
        />
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 3a7.5 7.5 0 0010.61 10.61z" />
        </svg>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
