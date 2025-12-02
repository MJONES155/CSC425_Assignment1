const mongoose = require("mongoose");

const MealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  restaurant: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  date: { type: Date, required: true },
  notes: String
}, { timestamps: true });

MealSchema.index({ name: 1, restaurant: 1, date: -1 });

module.exports = mongoose.model("Meal", MealSchema);