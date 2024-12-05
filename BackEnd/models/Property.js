const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  type: { type: String, required: true },
  guests: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true }
});

const Property = mongoose.model('Property', PropertySchema);

module.exports = Property;
