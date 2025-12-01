const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  studentID: {type: String, required: true, unique: true},
  balance: {type: Number, required: true},
  budgetPreferences: {
    weeklyLimit: {type: Number, required: true},
    NotifsOn: {type: Boolean, required: true}
  }
}, {
  timestamps: true // This adds createdAt and updatedAt fields automatically
});

// Add indexes for better query performance
userSchema.index({ studentID: 1 });

module.exports = mongoose.model('User', userSchema)