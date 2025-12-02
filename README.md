# Meal Management API - Express.js & Mongoose

A RESTful API backend built with Express.js and Mongoose for managing meals with full CRUD operations.

## Features

- ✅ Complete CRUD operations for meals
- ✅ Standardized JSON response format
- ✅ MongoDB integration with Mongoose
- ✅ Error handling middleware
- ✅ Environment configuration via `.env`
- ✅ Postman collection for testing
- ✅ Controller-based architecture

## Quick Start

### 1. Install Dependencies
```bash
# Initialize a new Node.js project (if not done already)
npm init -y

# Install runtime dependencies
npm install express mongoose dotenv cors morgan

# Install development dependencies
npm install -D nodemon

```
### 2. Set Up Environment

Create a `.env` file in the root directory:

### 3. Start the Server
```bash

#Development mode with auto-restart

npm run dev

#Production mode

npm start
```
The server will start on `http://localhost:3000`.

## API Endpoints

All responses follow a standardized JSON format:

**Success Response:**
```
{
"success": true,
"data": { ... }
}
```


**Error Response:**
```
{
"success": false,
"error": "Descriptive error message"
}
```

### Meal Endpoints

| Method | Endpoint         | Description           |
|--------|-----------------|---------------------|
| POST   | `/api/meal`      | Create a new meal    |
| GET    | `/api/meal`      | Get all meals        |
| GET    | `/api/meal/:id`  | Get a meal by ID     |
| PUT    | `/api/meal/:id`  | Update a meal by ID  |
| DELETE | `/api/meal/:id`  | Delete a meal by ID  |

### Meal Schema
```
{
"name": "string (required)",
"restaurant": "string (required)",
"price": "number (required, min 0)",
"date": "ISO Date string (required)",
"notes": "string (optional)"
}
```
**Example POST request:**
```
{
"name": "Chicken Sandwich Meal",
"restaurant": "Chick-Fil-A",
"price": 12.99,
"date": "2025-09-26",
"notes": "Favorite Meal"
}
```

## Testing

### Option 1: Postman
1. Import the collection: `tests/MealManagement_API.postman_collection.json`
2. Test each endpoint using sample data.

### Option 2: Thunder Client (VS Code)
1. Install Thunder Client extension.
2. Follow the instructions in the tests folder.

### Option 3: cURL Examples

**Create a meal:**
```
curl -X POST http://localhost:3000/api/meal

-H "Content-Type: application/json"
-d '{
"name": "Chicken Sandwich Meal",
"restaurant": "Chick-Fil-A",
"price": 12.99,
"date": "2025-09-26",
"notes": "Favorite Meal"
}'
```

**Get all meals:**
```
curl http://localhost:3000/api/meal
```

**Get meal by ID:**
```
curl http://localhost:3000/api/meal/
```

**Update a meal:**
```
curl -X PUT http://localhost:3000/api/meal/
<meal_id>
-H "Content-Type: application/json"
-d '{"price": 14.50, "notes": "Updated notes"}'
```

**Delete a meal:**
```
curl -X DELETE http://localhost:3000/api/meal/<meal_id>
```

## Current Status

**Phase 1: ✅ Complete**
- [x] Routes & Endpoints (all 5 CRUD operations)
- [x] Controller logic integrated with MongoDB
- [x] Standardized JSON response format
- [x] Postman collection tested with real data

**Phase 2: 🔄 Ready for Future Enhancements**
- [ ] Add authentication (optional)
- [ ] Add more data validation and error handling

## Environment Variables
```
PORT=3000
MONGO_URI=<your MongoDB connection string>
```

## Dependencies

- **express**: Web framework  
- **mongoose**: MongoDB object modeling  
- **cors**: Cross-origin resource sharing  
- **dotenv**: Environment variable management  
- **morgan**: HTTP request logger  
- **nodemon**: Development auto-restart (dev dependency)  
