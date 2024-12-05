// const express = require('express');
// const router = express.Router();
// const bookingsController = require('../controllers/bookingsController');

// // Route to create a booking (mock)
// router.post('/', bookingsController.createBooking);

// module.exports = router;
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// GET all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('propertyId').populate('userId');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Create a new booking
router.post('/', async (req, res) => {
  try {
    const { listingId, userId, checkInDate, checkOutDate } = req.body;
    const newBooking = new Booking({ listingId, userId, checkInDate, checkOutDate });
    await newBooking.save();
    res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (error) {
    res.status(400).json({ error: 'Failed to create booking' });
  }
});

module.exports = router;
