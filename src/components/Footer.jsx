import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 " >
      <div className="container mx-auto px-4">
        {/* Footer Main Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Links Section */}
          <div className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0">
            <a href="/support" className="hover:text-gray-400 transition duration-300 ease-in-out">Support</a>
            <a href="/community" className="hover:text-gray-400 transition duration-300 ease-in-out">Community</a>
            <a href="/hosting" className="hover:text-gray-400 transition duration-300 ease-in-out">Hosting</a>
            <a href="/about" className="hover:text-gray-400 transition duration-300 ease-in-out">About</a>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook"
              className="hover:text-gray-400 transition duration-300 ease-in-out"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Twitter"
              className="hover:text-gray-400 transition duration-300 ease-in-out"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram"
              className="hover:text-gray-400 transition duration-300 ease-in-out"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 text-gray-400">
          <p className="text-sm">&copy; {new Date().getFullYear()} Airbnb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
