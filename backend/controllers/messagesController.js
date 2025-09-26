const Message = require('../models/Message');

const createMessage = async (req, res) => {
  try {
    const { title, body, author } = req.body;
    const msg = new Message({ title, body, author });
    const saved = await msg.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const listMessages = async (req, res) => {
  try {
    const list = await Message.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getMessage = async (req, res) => {
  try {
    const msg = await Message.findById(req.params.id);
    if (!msg) return res.status(404).json({ error: 'Message not found' });
    res.json(msg);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateMessage = async (req, res) => {
  try {
    const { title, body, author } = req.body;
    const updated = await Message.findByIdAndUpdate(
      req.params.id,
      { title, body, author, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: 'Message not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteMessage = async (req, res) => {
  try {
    const removed = await Message.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ error: 'Message not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createMessage,
  listMessages,
  getMessage,
  updateMessage,
  deleteMessage,
};
