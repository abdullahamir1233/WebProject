// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          {/* Links */}
          <div className="flex space-x-4">
            <a href="/support" className="hover:text-gray-400">Support</a>
            <a href="/community" className="hover:text-gray-400">Community</a>
            <a href="/hosting" className="hover:text-gray-400">Hosting</a>
            <a href="/about" className="hover:text-gray-400">About</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://via.placeholder.com/24/ffffff/000000?text=F" alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://via.placeholder.com/24/ffffff/000000?text=T" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://via.placeholder.com/24/ffffff/000000?text=I" alt="Instagram" />
            </a>
          </div>
        </div>

        {/* Copyright Information */}
        <div className="text-center mt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
