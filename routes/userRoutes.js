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
router
  .route('/')
  .get(getUsers)
  .post(createUser);

// :userId
router
  .route('/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// :userId/friends/
// :friendId
router
router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);
  
module.exports = router;