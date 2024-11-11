// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import ListingDetails from './pages/ListingDetails';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col gap-y-2">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/listing/:id" element={<ListingDetails />} />
          <Route path="/booking/:id" element={<BookingPage />} /> {/* BookingPage Route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
