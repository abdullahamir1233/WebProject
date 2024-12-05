const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/airbnb'; // Change if using MongoDB Atlas

// Admin details
const adminUsername = 'admin_username'; // Change the admin username
const adminEmail = 'admin_email@example.com'; // Change the admin email
const adminPassword = 'admin_password'; // Set your admin password here

// Define the Admin Schema
const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash password before saving to the database
adminSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10); // Hash password
  }
  next();
});

// Create the Admin Model
const Admin = mongoose.model('Admin', adminSchema);

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');

    // Check if an admin already exists
    const adminExists = await Admin.findOne({ email: adminEmail });
    if (adminExists) {
      console.log('Admin already exists.');
      return;
    }

    // Create a new admin with hashed password
    const newAdmin = new Admin({
      username: adminUsername,
      email: adminEmail,
      password: adminPassword,
    });

    // Save the admin to the database
    await newAdmin.save();
    console.log('Admin created successfully!');
    mongoose.connection.close(); // Close the connection
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    mongoose.connection.close(); // Close the connection in case of error
  });
