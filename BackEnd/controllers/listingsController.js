const listings = require('../data/listings.json');

// Get all listings
exports.getAllListings = (req, res) => {
  res.json(listings);
};

// Get listing details by ID
exports.getListingById = (req, res) => {
  const id = parseInt(req.params.id);
  if (id < 0 || id >= listings.length) {
    return res.status(404).json({ message: 'Listing not found' });
  }
  res.json(listings[id]);
};

// Search functionality (filter by title or location)
exports.searchListings = (req, res) => {
  const query = req.query.query.toLowerCase();
  const results = listings.filter(listing => 
    listing.title.toLowerCase().includes(query)
  );
  res.json(results);
};
