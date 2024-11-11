// src/components/Categories.jsx
import React, { useState } from 'react';

const categories = ['Beachfront', 'Cabins', 'Trending', 'Luxury', 'Camping', 'Tiny homes', 'Design', 'Countryside'];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="flex overflow-x-auto space-x-4 py-4 px-8 bg-white shadow-md">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setActiveCategory(category)}
          className={`whitespace-nowrap px-4 py-2 rounded-full border text-sm font-medium ${
            activeCategory === category ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'
          } hover:bg-gray-200 transition duration-150`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
