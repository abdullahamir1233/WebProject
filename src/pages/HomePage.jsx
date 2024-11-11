import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import ListingCard from '../components/ListingCard';

function Homepage() {
    const [listings, setListings] = useState([]); // State to store listings data
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling

    // Fetch listings data on component mount
    useEffect(() => {
        fetch('http://localhost:3000/api/listings')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setListings(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Fetch error: ', err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <SearchBar />
            <Categories />

            <div className="flex flex-wrap justify-center gap-8 py-8 px-8">
                {listings.map((listing, index) => (
                    <ListingCard
                        key={index}
                        id={index} // Use a unique identifier here if available in your data
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
        </div>
    );
}

export default Homepage;
