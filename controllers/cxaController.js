// controllers/cxaController.js

const CXA = require('../models/CXA');
const User = require('../models/User');

exports.mineCXA = async (req, res) => {
  try {
    const { username } = req.body;

    // Check if the username exists
    const existingUser = await User.findOne({ username: username });
    if (!existingUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the user has already mined 2 CXA records in the last 24 hours
    const startDate = new Date(new Date() - 24 * 60 * 60 * 1000);
    const cxaCount = await CXA.countDocuments({ userId: existingUser._id, timestamp: { $gte: startDate } });
    if (cxaCount >= 2) {
      return res.status(400).json({ error: 'You have already mined 2 CXA records in the last 24 hours' });
    }

    // Create a new CXA record using the existing user's ID
    const newCXA = new CXA({ userId: existingUser._id });

    // Save the new CXA record
    await newCXA.save();

    // Update the user's total mined amount
    await User.findByIdAndUpdate(existingUser._id, { $inc: { totalMined: 1 } });

    res.status(201).json({ message: 'CXA mined successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getAmountMined = async (req, res) => {
  try {
    const userId = req.body.userId;

    // Retrieve the user's total mined amount
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const totalMined = user.totalMined || 0;

    res.status(200).json({ totalMined: totalMined });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
