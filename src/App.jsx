import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import Categories from './categories';
import ListingCard from './listingcard';
import Footer from './Footer';

function App() {
  const [listings, setListings] = useState([]); // State to store listings data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  // Fetch listings data on component mount
  useEffect(() => {
    fetch('/data/listing.json') // Fetch the JSON from public folder
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setListings(data); // Set the fetched data
        setLoading(false); // Set loading to false
      })
      .catch((err) => {
        console.error('Fetch error: ', err);
        setError(err.message); // Set error state in case of failure
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error if fetch fails
  }

  return (
    <div className='gap-y-2 flex flex-col'>
      <Navbar />
      <SearchBar />
      <Categories />

      {/* Listing Cards */}
      <div className="flex flex-wrap justify-center gap-8 py-8 px-8">
        {listings.map((listing, index) => (
          <ListingCard
            key={index}
            image={listing.image}
            title={listing.title}
            type={listing.type}
            guests={listing.guests}
            bedrooms={listing.bedrooms}
            bathrooms={listing.bathrooms}
            price={listing.price}
            rating={listing.rating}
          />
        ))}
      </div>

      {/* Footer should be outside of the listings */}
      <Footer />
    </div>
  );
}

export default App;
