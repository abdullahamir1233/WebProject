import React, { useState, useEffect } from 'react';

// Dummy data for listings, replace this with real data from your backend or state
const listings = [
  { id: 1, name: 'Cozy Apartment in New York' },
  { id: 2, name: 'Luxury Villa in Bali' },
  { id: 3, name: 'Beachfront Property in Miami' },
  { id: 4, name: 'Modern Studio in London' },
  { id: 5, name: 'Spacious Home in Los Angeles' },
];

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [filteredListings, setFilteredListings] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);

  useEffect(() => {
    if (location.trim() === '') {
      setFilteredListings([]);
    } else {
      const filtered = listings.filter((listing) =>
        listing.name.toLowerCase().includes(location.toLowerCase())
      );
      setFilteredListings(filtered);
    }
  }, [location]);

  const handleSearch = () => {
    console.log(`Searching for location: ${location}`);
    // Add logic to display the selected listing or show relevant results
    if (selectedListing) {
      // You can navigate or display the selected listing details here
      console.log(`Selected listing: ${selectedListing.name}`);
    }
  };

  const handleSelect = (listing) => {
    setLocation(listing.name);  // Set the location to the selected listing name
    setSelectedListing(listing); // Set the selected listing
    setFilteredListings([]); // Clear the filtered listings after selection
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-full shadow-md py-2 px-4 flex flex-wrap justify-center md:justify-between items-center mt-4">
      {/* Location Input */}
      <div className="flex flex-col w-full md:w-auto px-2 mb-2 relative">
        <label className="text-xs font-semibold">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Where are you going?"
          className="border-none outline-none text-sm text-gray-600 w-full"
        />

        {/* Show filtered listings as suggestions */}
        {filteredListings.length > 0 && (
          <ul className="absolute top-full left-0 w-full bg-white shadow-lg max-h-60 overflow-auto z-10">
            {filteredListings.map((listing) => (
              <li
                key={listing.id}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                onClick={() => handleSelect(listing)}
              >
                {listing.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Check-In Date */}
      <div className="flex flex-col w-full md:w-auto px-2 mb-2">
        <label className="text-xs font-semibold">Check-In</label>
        <input
          type="date"
          className="border-none outline-none text-sm text-gray-600 w-full"
        />
      </div>

      {/* Check-Out Date */}
      <div className="flex flex-col w-full md:w-auto px-2 mb-2">
        <label className="text-xs font-semibold">Check-Out</label>
        <input
          type="date"
          className="border-none outline-none text-sm text-gray-600 w-full"
        />
      </div>

      {/* Guests Input */}
      <div className="flex flex-col w-full md:w-auto px-2 mb-2">
        <label className="text-xs font-semibold">Guests</label>
        <input
          type="number"
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
