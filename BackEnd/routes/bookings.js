const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/bookingsController');

// Route to create a booking (mock)
router.post('/', bookingsController.createBooking);

module.exports = router;
