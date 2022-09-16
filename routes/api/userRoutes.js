const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users - Get all users and create a new user
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId - Get one user, update a user and delete a user
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// TODO: **BONUS**: Remove a user's associated thoughts when deleted.

// /api/users/:userId/friends/:friendId - Add a new friend and delete friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
