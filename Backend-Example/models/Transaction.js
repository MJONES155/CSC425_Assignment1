const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  userID: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
  type: {type: String, enum: ['purchase', 'deposit', 'transfer'], required: true},
  amount: {type: Number, required: true},
  description: {type: String},
  timestamp: {type: Date, default: Date.now}
}, {
  timestamps: true
});

transactionSchema.index({ userID: 1, timestamp: -1 });

module.exports = mongoose.model('Transaction', transactionSchema)