const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../controllers/userController');

// /api/users

// /api/users/:userId

// /api/users/:userId/friends/:friendId

module.exports = router;