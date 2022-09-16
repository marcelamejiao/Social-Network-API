const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/userController');

// /api/thoughts - Get all thoughts and create a new thought
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId - Get one thought, update a thought and delete a thought
router.route('/:userId').get(getSingleThought).put(updateThought).delete(deleteThought);

// ///api/thoughts/:thoughtId/reactions - Add a new reaction and delete reaction
router.route('/:/api/thoughts/:thoughtId/reactions').post(addReaction).delete(removeReaction);

module.exports = router;
