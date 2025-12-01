# Dining Dollars Management API

# Overview
This RESTful API powers the backend for a student-focused dining dollars management app. It allows users to track spending, set budgeting preferences, and log transactions. Built with Node.js, Express, and MongoDB, the API supports full CRUD operations for both users and transactions.

# Setup and Run Instructions
1. Install dependencies
  npm install
2. Create a .env file in the root directory
  PORT=3000
  MONGO_URI="your-mongodb-connection-string"
3. Start the server
  npm run dev

# .env Keys Required
PORT	Port number for the server
MONGO_URI	MongoDB connection string (Atlas or local)

# Models
User: 

Field	             Type	             Constraints

user	             String	           Required
email	             String	           Required, must be valid email
studentID	         String	           Required, unique
balance            Number	           Required, default: 0
budgetPreferences	 Object	           Required: weeklyLimit, notifsOn

Transaction:

Field	            Type	             Constraints

userID	          ObjectId	         Required, references User
type	            String	           Required (purchase, deposit, etc.)
amount	          Number	           Required
description	      String	           Optional
createdAt	        Date	             Auto-generated

# Endpoint Documentation

Users:

Method	         Endpoint	           Description

POST	           /api/users	         Create a new user
GET	             /api/users	         Get all users
GET	             /api/users/:id	     Get a specific user
PUT	             /api/users/:id	     Update a user
DELETE	         /api/users/:id	     Delete a user

# Known Limitations

Basic validation only — no advanced error handling
Transactions are not linked to balance updates (yet)

# Testing Instructions
Tested using Postman- submitted a PDF with proof of testing success

Example: Create a User
Method: POST
URL: http://localhost:3000/api/users
Body:
{
  "user": "Emilia",
  "email": "emilia@example.com",
  "studentID": "123456",
  "balance": 100,
  "budgetPreferences": {
    "weeklyLimit": 50,
    "NotifsOn": true
  }
}
