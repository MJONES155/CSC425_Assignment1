const express = require('express');
const router = express.Router();
const controller = require('../controllers/messagesController');

// POST /api/messages - create a new message
router.post('/', controller.createMessage);

// GET /api/messages - list all messages
router.get('/', controller.listMessages);

// GET /api/messages/:id - get one message
router.get('/:id', controller.getMessage);

// PUT /api/messages/:id - update a message
router.put('/:id', controller.updateMessage);

// DELETE /api/messages/:id - delete a message
router.delete('/:id', controller.deleteMessage);

module.exports = router;
