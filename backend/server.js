const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/csc425_assignment1';

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });

// Routes
const messagesRouter = require('./routes/messages');
app.use('/api/messages', messagesRouter);

app.get('/', (req, res) => res.send({ status: 'ok', message: 'Backend running' }));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
