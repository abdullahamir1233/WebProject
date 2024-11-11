// Mock booking creation
exports.createBooking = (req, res) => {
    const booking = req.body;
  
    // Mock response for successful booking
    res.status(201).json({
      message: 'Booking created successfully',
      booking: booking
    });
  };
  