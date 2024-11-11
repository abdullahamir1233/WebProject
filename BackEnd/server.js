const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();

// Enable CORS for all routes
app.use(cors());

// Other imports and routes
const listingsRoutes = require('./routes/listings');
const bookingsRoutes = require('./routes/bookings');

app.use(express.json()); // Middleware to parse JSON data

// Use the routes
app.use('/api/listings', listingsRoutes);
app.use('/api/bookings', bookingsRoutes);

// Set up server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
