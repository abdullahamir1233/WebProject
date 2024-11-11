// src/pages/BookingPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BookingPage() {
  const { id } = useParams(); // Get the listing ID from the URL
  const [listing, setListing] = useState(null);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch listing details by ID
    fetch(`http://localhost:3000/api/listings/${id}`)
      .then(response => response.json())
      .then(data => setListing(data))
      .catch(err => setError(err.message));
  }, [id]);

  if (!listing) return <div>Loading...</div>;

  const totalDays = (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 3600 * 24);
  const totalPrice = totalDays > 0 ? totalDays * listing.price : 0;

  const handleBooking = (e) => {
    e.preventDefault();
    if (!checkInDate || !checkOutDate || totalDays <= 0) {
      setError('Please enter valid check-in and check-out dates.');
    } else {
      setError(null);
      console.log('Booking details:', { checkInDate, checkOutDate, totalPrice });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-4">Book Your Stay at {listing.title}</h1>
      <form onSubmit={handleBooking} className="space-y-4">
        <div>
          <label className="block text-gray-700">Check-in Date</label>
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-red-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Check-out Date</label>
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-red-500"
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <div className="text-gray-700">
          <p>Price per night: <span className="font-semibold">${listing.price}</span></p>
          <p>Total price: <span className="font-semibold">${totalPrice}</span></p>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-2 text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default BookingPage;
