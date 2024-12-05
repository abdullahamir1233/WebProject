
const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
  
    try {
      const admin = await Admin.findOne({ email });
      if (!admin || !(await admin.comparePassword(password))) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
  
      const token = jwt.sign({ id: admin._id }, 'yourSecretKey', { expiresIn: '1h' });
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to login' });
    }
  });

module.exports = router;