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
// :users

// :userId

// :userId/friends/
// :friendId

module.exports = router;