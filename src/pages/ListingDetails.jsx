// src/pages/ListingDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ListingDetails() {
  const { id } = useParams(); // Get the listing ID from the URL
  const [listing, setListing] = useState(null); // State for listing details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch listing details on component mount based on ID
  useEffect(() => {
    fetch(`http://localhost:3000/api/listings/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setListing(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error if fetching fails
  }

  if (!listing) {
    return <div>No listing found</div>; // Show if listing data is empty
  }

  const {
    image,
    title,
    type,
    guests,
    bedrooms,
    bathrooms,
    price,
    rating,
  } = listing;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <img src={image} alt={title} className="w-full rounded-lg shadow-md mb-6" />
      <h1 className="text-3xl font-semibold mb-2">{title}</h1>
      <p className="text-gray-600">{type} · {guests} guests · {bedrooms} bedrooms · {bathrooms} bathrooms</p>
      <p className="text-xl font-semibold mt-4">Price per night: ${price}</p>

      <div className="flex justify-center items-center mt-2 mb-4">
        <p className="text-gray-500">Rating: {rating} ⭐</p>
      </div>

      {/* Button Container with Flex to center */}
      <div className="flex justify-center mt-6">
        <Link
          to={`/booking/${id}`}
          className="px-6 py-2 text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}

export default ListingDetails;
