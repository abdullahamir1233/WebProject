const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin'); // Assuming you have an Admin model

const authenticateAdmin = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, 'yourSecretKey'); // Verify JWT
    const admin = await Admin.findById(decoded.id);
    
    if (!admin) {
      return res.status(401).json({ error: 'Admin not found' });
    }

    req.admin = admin;  // Attach admin to request object
    next();  // Continue to the next middleware or route handler
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = authenticateAdmin;
