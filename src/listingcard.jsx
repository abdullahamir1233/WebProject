// src/components/ListingCard.jsx
import React from 'react';

const ListingCard = ({ image, title, type, guests, bedrooms, bathrooms, price, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-72">
      {/* Property Image */}
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      {/* Property Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{type}</p>
        
        <div className="text-sm text-gray-500 mt-2">
          {guests} guests · {bedrooms} bedrooms · {bathrooms} bathrooms
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="text-lg font-bold">${price} / night</div>
          <div className="flex items-center text-sm text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.75l6.16 3.44-1.18-6.87L21 9.25l-6.9-.6L12 2.75 9.9 8.65 3 9.25l5.02 4.07-1.18 6.87z" />
            </svg>
            <span className="ml-1">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
