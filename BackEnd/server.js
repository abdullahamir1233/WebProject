const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Import Mongoose
const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/airbnb'; // Local MongoDB URI
// For MongoDB Atlas, use:
// const mongoURI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/airbnb?retryWrites=true&w=majority';

mongoose
.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

// Import routes
const listingsRoutes = require('./routes/listings');
const bookingsRoutes = require('./routes/bookings');
const authRoutes = require('./routes/auth'); // Import authentication routes
const adminRoutes = require('./routes/admin'); // Import the admin routes
const adminAuthRoutes = require('./routes/adminAuth'); // Import the admin authentication routes


// Use the routes
app.use('/api/listings', listingsRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api/admin', adminRoutes);  // Admin routes
app.use('/api/auth', authRoutes); // Add authentication routes
app.use('/api/admin/auth', adminAuthRoutes); // Add admin authentication routes

// Optional: Example of securing a route with JWT middleware
const verifyToken = require('./middleware/verifyToken'); // Import JWT middleware
app.use('/api/secure', verifyToken, (req, res) => {
  res.json({ message: 'This is a secure route, accessible with a valid token!' });
});

// Set up server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
