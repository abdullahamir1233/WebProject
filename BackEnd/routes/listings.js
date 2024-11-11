const express = require('express');
const router = express.Router();
const listingsController = require('../controllers/listingsController');

// Route to get all listings
router.get('/', listingsController.getAllListings);

// Route to get listing details by ID
router.get('/:id', listingsController.getListingById);

// Route for search functionality
router.get('/search', listingsController.searchListings);

module.exports = router;
