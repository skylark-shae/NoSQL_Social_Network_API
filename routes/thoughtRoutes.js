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
// :thoughts
router
  .route('/')
  .get(getThoughts)
  .post(createThought);

// :thoughtId
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// :thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(addReaction);

// :thoughtId/reactions/:reactionId
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;