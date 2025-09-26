const express = require('express');
const router = express.Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../models/User');
const User = require('../models/User');

// POST /api/messages → Create a new user
router.post('/', async(req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

// GET /api/messages → Get all users
router.get('/', async (req, res) => {
    try { 
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({error : err.message});
    }
});

// GET /api/messages/:id → Get a specific user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({error : 'User not found'});
        res.json(user);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// PUT /api/messages/:id → Update a user by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true, runValidators: true}
        );
        if (!updatedUser) return res.status(404).json({error: 'User not found'});
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

// DELETE /api/messages/:id → Delete a user by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({error: 'User not found'});
        res.json({message: 'User deleted successfully'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

module.exports = router;