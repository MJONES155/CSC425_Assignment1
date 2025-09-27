Meal Management API - Express.js & Mongoose

A RESTful API backend built with Express.js and Mongoose for managing meals with full CRUD operations.

Features

✅ Complete CRUD operations for meals

✅ Standardized JSON response format

✅ MongoDB integration with Mongoose

✅ Error handling middleware

✅ Environment configuration via .env

✅ Postman collection for testing

✅ Controller-based architecture

Quick Start

Initialize Project & Install Dependencies

# Initialize a new Node.js project (if not already done)
npm init -y

# Install runtime dependencies
npm install express mongoose dotenv cors morgan

# Install development dependencies
npm install -D nodemon


Set Up Environment
Create a .env file in the root directory:

MONGO_URI=<your MongoDB connection string>
PORT=3000


Start the Server

# Development mode with auto-restart
npm run dev

# Production mode
npm start


Server will start at http://localhost:3000.

API Endpoints

All responses follow a standardized JSON format:

Success

{
  "success": true,
  "data": { ... }
}


Error

{
  "success": false,
  "error": "Descriptive error message"
}

Meal Endpoints
Method	Endpoint	Description
POST	/api/meal	Create a new meal
GET	/api/meal	Get all meals
GET	/api/meal/:id	Get a meal by ID
PUT	/api/meal/:id	Update a meal by ID
DELETE	/api/meal/:id	Delete a meal by ID
Meal Schema
{
  "name": "string (required)",
  "restaurant": "string (required)",
  "price": "number (required, min 0)",
  "date": "ISO Date string (required)",
  "notes": "string (optional)"
}


Example POST request:

{
  "name": "Chicken Sandwich Meal",
  "restaurant": "Chick-Fil-A",
  "price": 12.99,
  "date": "2025-09-26",
  "notes": "Favorite Meal"
}

Testing
Option 1: Postman

Import the collection: tests/MealManagement_API.postman_collection.json

Test each endpoint using sample data.

Option 2: Thunder Client (VS Code)

Install Thunder Client extension.

Follow instructions in the tests folder.

Option 3: cURL Examples

Create a meal

curl -X POST http://localhost:3000/api/meal \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Chicken Sandwich Meal",
    "restaurant": "Chick-Fil-A",
    "price": 12.99,
    "date": "2025-09-26",
    "notes": "Favorite Meal"
  }'


Get all meals

curl http://localhost:3000/api/meal


Get meal by ID

curl http://localhost:3000/api/meal/<meal_id>


Update a meal

curl -X PUT http://localhost:3000/api/meal/<meal_id> \
  -H "Content-Type: application/json" \
  -d '{"price": 14.50, "notes": "Updated notes"}'


Delete a meal

curl -X DELETE http://localhost:3000/api/meal/<meal_id>

Current Status

✅ Complete CRUD operations for meals

✅ Controller logic fully integrated with MongoDB

✅ Standardized response format implemented

✅ Postman collection tested with real data

Environment Variables
PORT=3000
MONGO_URI=<your MongoDB connection string>

Dependencies

express → Web framework

mongoose → MongoDB object modeling

cors → Cross-origin requests

dotenv → Environment variables

morgan → HTTP request logger

nodemon → Dev dependency for auto-restart
