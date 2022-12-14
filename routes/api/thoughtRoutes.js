const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts - Get all thoughts and create a new thought
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId - Get one thought, update a thought and delete a thought
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions - Add a new reaction
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId - Delete a reaction
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
