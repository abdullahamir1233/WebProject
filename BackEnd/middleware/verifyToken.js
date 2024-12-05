const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_secret_key_here'; // Same secret key used during login

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Extract token from header
  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified; // Attach the user info to the request
    next(); // Move to the next middleware or route
  } catch (err) {
    res.status(400).json({ error: 'Invalid token' });
  }
};
