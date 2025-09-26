# CSC425 — Backend API (Message Board)

Minimal Node.js + Express API using Mongoose to persist a simple Message model.

Quick start

1. Install dependencies

   npm install

2. Create `.env` from `.env.example` and set values:

   - PORT (optional, defaults to 5000)
   - MONGO_URI (MongoDB connection string)

3. Run the server

   npm run dev    # development (nodemon)
   npm start      # production

MongoDB Atlas (quick)

1. Create an Atlas account and a free cluster.
2. Create a database user and allow your IP (or 0.0.0.0/0 while testing).
3. Copy the connection string, replace <username> and <password>, and paste into `MONGO_URI`.

API endpoints

Base URL: http://localhost:5000 (or the port you set in `PORT`)

- POST /api/messages
  - Create a message
  - Body: { "title": "...", "body": "...", "author": "..." }
- GET /api/messages
  - List messages
- GET /api/messages/:id
  - Get a single message
- PUT /api/messages/:id
  - Update message (same body as POST; fields optional)
- DELETE /api/messages/:id
  - Delete message

Testing

- Import `postman_collection.json` (in this folder) into Postman or Thunder Client.
- Use the Collection's requests; create a message first to obtain an `_id` for GET/PUT/DELETE.

Notes

- The app respects `process.env.PORT` for deployment platforms that provide a port.
- Do not commit `.env` to source control.

That's it — open an issue or ask if you want validation, tests, or auth wired in.
