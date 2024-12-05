// const express = require('express');
// const router = express.Router();
// const listingsController = require('../controllers/listingsController');

// // Route to get all listings
// router.get('/', listingsController.getAllListings);

// // Route to get listing details by ID
// router.get('/:id', listingsController.getListingById);

// // Route for search functionality
// router.get('/search', listingsController.searchListings);

// module.exports = router;

const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

// GET all properties
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new property
router.post('/', async (req, res) => {
  try {
    const property = new Property(req.body);
    const savedProperty = await property.save();
    res.status(201).json(savedProperty);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET property by ID
router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    res.json(property);
  } catch (err) {
    res.status(404).json({ error: 'Property not found' });
  }
});
module.exports = router;
