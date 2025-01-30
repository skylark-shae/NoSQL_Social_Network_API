const router = require('express').Router();
const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../controllers/thoughtController');

// /api/thoughts

// /api/thoughts/:thoughtId

// /api/thoughts/:thoughtId/reactions

// /api/thoughts/:thoughtId/reactions/:reactionId

module.exports = router;