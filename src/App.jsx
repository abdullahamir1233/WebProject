import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import ListingDetails from './pages/ListingDetails';
import BookingPage from './pages/BookingPage';
import AdminHome from './pages/AdminHome';
import AdminLogin from './pages/AdminLogin';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <div className="flex flex-col gap-y-2">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/listing/:id" element={<ListingDetails />} />
          <Route path="/booking/:id" element={<BookingPage />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
