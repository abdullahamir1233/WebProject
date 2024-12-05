const express = require('express');
const router = express.Router();
const Property = require('../models/Property');
const Booking = require('../models/Booking');
const authenticateAdmin = require('../middleware/authenticateAdmin'); // Middleware to authenticate admin
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
// Middleware to authenticate admin
// router.use(authenticateAdmin);

// GET: Fetch all listings (admin view)
router.get('/listings', async (req, res) => {
  try {
    const listings = await Property.find();
    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch listings' });
  }
});

// POST: Add a new listing
router.post('/listings', async (req, res) => {
  try {
    const newListing = new Property(req.body);
    await newListing.save();
    res.status(201).json({ message: 'New listing added', listing: newListing });
  } catch (error) {
    res.status(400).json({ error: 'Failed to add listing' });
  }
});

// DELETE: Delete a listing by ID
router.delete('/listings/:id', async (req, res) => {
  try {
    const listing = await Property.findByIdAndDelete(req.params.id);
    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }
    res.status(200).json({ message: 'Listing deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete listing' });
  }
});

// GET: View all bookings (admin overview)
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('listingId userId'); // Optionally populate user and listing info
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});


module.exports = router;
