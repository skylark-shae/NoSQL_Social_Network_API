const { User, Thought } = require('../models');

//User Controllers (Get all users, Get a single user by ID, Create a new user, Update a user by ID, Delete a user by ID, Add a friend to a user's friend list, Remove a friend from a user's friend list)
  // Get all users, getUsers User.find()
  // Get a single user by ID, getUserById User.findOne(FILL)
  // Create a new user, createUser User.create(FILL)
  // Update a user by ID, updateUser User.findOneAndUpdate(FILL)
  // Delete a user by ID, deleteUser User.findOneAndDelete(FILL)
  // Add a friend to a user's friend list, addFriend User.findOneAndUpdate(FILL)
  // Remove a friend from a user's friend list, removeFriend User.findOneAndUpdate(FILL)

module.exports = {
  // Get all users, getUsers User.find()
  getUsers(req, res) {
    User.find()
    ;
  },

  // Get a single user by ID, getUserById User.findOne(FILL)
  getUserById(req, res) {
    User.findOne()
  },

  // Create a new user, createUser User.create(FILL)
  createUser(req, res) {
    User.create()
  },

  // Update a user by ID, updateUser User.findOneAndUpdate(FILL)
  updateUser(req, res) {
    User.findOneAndUpdate();
  },

  // Delete a user by ID, deleteUser User.findOneAndDelete(FILL)
  deleteUser(req, res) {
    User.findOneAndDelete()
  },


  // Add a friend to a user's friend list, addFriend User.findOneAndUpdate(FILL)
  addFriend(req, res) {
    User.findOneAndUpdate(
);
  },

  // Remove a friend from a user's friend list, removeFriend User.findOneAndUpdate(FILL)
  removeFriend(req, res) {
    User.findOneAndUpdate();
  }
};