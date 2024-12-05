import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Check if the admin is logged in by looking for the token in localStorage
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (!token) {
      navigate('/admin/login'); // Redirect to login if not authenticated
    }
    
    const fetchListings = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/admin/listings', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setListings(data);
        } else {
          setError(data.error || 'Failed to fetch listings');
        }
      } catch (error) {
        setError('An error occurred. Please try again.');
      }
    };

    fetchListings();
  }, [token, navigate]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      try {
        const response = await fetch(`http://localhost:3000/api/admin/listings/${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setListings(listings.filter((listing) => listing._id !== id));
        } else {
          alert(data.error || 'Failed to delete listing');
        }
      } catch (error) {
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <h2 className="text-xl font-semibold mb-2">All Listings</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing) => (
          <div key={listing._id} className="bg-white p-4 border rounded shadow">
            <h3 className="text-lg font-semibold">{listing.title}</h3>
            <p className="text-sm text-gray-500">{listing.description}</p>
            <button
              onClick={() => handleDelete(listing._id)}
              className="mt-4 w-full py-2 px-4 bg-red-500 text-white rounded"
            >
              Delete Listing
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminHome;
