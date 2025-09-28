# BackendExample – Node.js + Express + MongoDB (Mongoose)

A minimal backend, Includes environment-based config, MongoDB Atlas, Mongoose models, and 4+ CRUD endpoints. Tested with Thunder Client.

---

## Tech Stack
- **Node.js + Express.js**
- **MongoDB** (Atlas or local)
- **Mongoose**
- **dotenv** for env vars
- (Optional) **nodemon** for dev reloads

---

## Folder Name (example)
```
Folder: BackendExample / Backend-Example
```

## Directory Structure
```
Backend-Example/
├─ server.js
├─ .env
├─ package.json
├─ routes/
│  └─ messageRoutes.js
└─ models/
   └─ Message.js
```

---

## Setup

### 1) Install
```bash
npm install
# if needed
npm install express mongoose cors dotenv
```

### 2) Environment Variables
Create **.env** in the same folder as `server.js`:
```env
# MongoDB Connection String
MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>.mongodb.net/backend-example?retryWrites=true&w=majority&appName=Cluster0

# Server Port
PORT=3001

# Environment
NODE_ENV=development
```

### 3) Run
```bash
node server.js
# or (recommended)
npx nodemon server.js
```

Server logs should include:
```
Server is running on port 3001
Connected to MongoDB
```

---

## API Endpoints

**Base URL:** `http://localhost:3001/api`

### Create – POST `/messages`
Create a new message.
- **Body (JSON)**
```json
{ "text": "Hello world", "author": "Alana" }
```
- **201 Created** → returns created document.

### Read All – GET `/messages`
List all messages.
- **200 OK** → `[{ _id, text, author, createdAt, updatedAt }, ...]`

### Read One – GET `/messages/:id`
Get a single message by MongoDB `_id`.
- **200 OK** → `{ _id, text, author, ... }`
- **404** if not found.

### Update – PUT `/messages/:id`
Update message fields.
- **Body (JSON)**
```json
{ "text": "Updated text" }
```
- **200 OK** → returns updated doc (or confirmation).
- **404** if not found.

### Delete – DELETE `/messages/:id`
Remove a message.
- **200 OK** → `{ "message": "Deleted" }`
- **404** if not found.

---

## Testing (Thunder Client)

1. **GET** `http://localhost:3001/api/messages`
2. **POST** `http://localhost:3001/api/messages`  `
5. **DELETE** `http://localhost:3001/api/messages/<_id>`

---

## .env Usage
- Do **not** commit `.env`. Add to `.gitignore`.
- App reads `process.env.MONGODB_URI` and `process.env.PORT` via `dotenv`.

---

## Troubleshooting
- **EADDRINUSE 3000/3001** → Port in use → change `PORT` or kill process.
- **ECONNREFUSED 127.0.0.1:27017** → Using local fallback; check `.env` path and `MONGODB_URI`.
- **Auth/Atlas IP** → Ensure DB user creds are correct and IP is whitelisted in Atlas.

---

## License
MIT (or class default)