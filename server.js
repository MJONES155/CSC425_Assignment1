const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const mealRoutes = require("./src/routes/mealRoutes.js");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });

// Routes
app.use('/api', mealRoutes);

//Default route
app.get('/', (req, res) => {
    res.json({ 
        success : true,
        data: {
            message: "Welcome to the Meal Management API",
            endpoints: [
                'POST /api/meal - Create a new meal',
                'GET /api/meal - Get all meals',
                'GET /api/meal/:id - Get a meal by ID',
                'PUT /api/meal/:id - Update a meal by ID',
                'DELETE /api/meal/:id - Delete a meal by ID'
            ]
                
            }
        });

});

//404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({
    success: false,
    error: 'Something went wrong!'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to see available endpoints`);
});

module.exports = app;