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
    console.log('📌 Fetching all users...');

    User.find()
    .populate('thoughts')
    .populate('friends')
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
  },

  // Get a single user by ID, getUserById User.findOne(FILL)
  getUserById(req, res) {
    console.log(`📌 Fetching user with ID: ${req.params.userId}`);

    User.findOne({ _id: req.params.userId })
      .populate('thoughts')
      .populate('friends')
      .then((user) => {
        if (!user) {
          console.warn(`⚠️ No user found with ID: ${req.params.userId}`);
          return res.status(404).json({ message: 'No user found with that ID' });
        }
        console.log(`✅ Found user: ${user.username}`);
        res.json(user);
      })
      .catch((err) => {
        console.error('❌ Error fetching user:', err);
        res.status(500).json(err);
      });
  },

  // Create a new user, createUser User.create(FILL)
  createUser(req, res) {
    console.log('📌 Creating new user:', req.body);

    User.create(req.body)
    .then((user) => {
      console.log(`✅ User created: ${user.username} (ID: ${user._id})`);
      res.json(user);
    })
    .catch((err) => {
      console.error('❌ Error creating user:', err);
      res.status(500).json(err);
    });
},

  // Update a user by ID, updateUser User.findOneAndUpdate(FILL)
  updateUser(req, res) {
    console.log(`📌 Updating user with ID: ${req.params.userId}`);

    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
    .then((user) => {
      if (!user) {
        console.warn(`⚠️ No user found with ID: ${req.params.userId}`);
        return res.status(404).json({ message: 'No user found with that ID' });
      }
      console.log(`✅ User updated: ${user.username}`);
      res.json(user);
    })
    .catch((err) => {
      console.error('❌ Error updating user:', err);
      res.status(500).json(err);
    });
},

  // Delete a user by ID, deleteUser User.findOneAndDelete(FILL)
  deleteUser(req, res) {
    console.log(`📌 Deleting user with ID: ${req.params.userId}`);

    User.findOneAndDelete({ _id: req.params.userId })
    .then((user) => {
      if (!user) {
        console.warn(`⚠️ No user found with ID: ${req.params.userId}`);
        return res.status(404).json({ message: 'No user found with that ID' });
      }
      console.log(`🗑️ User deleted: ${user.username}`);
      return Thought.deleteMany({ _id: { $in: user.thoughts } });
    })
    .then(() => {
      console.log(`✅ Associated thoughts deleted`);
      res.json({ message: 'User and associated thoughts deleted!' });
    })
    .catch((err) => {
      console.error('❌ Error deleting user:', err);
      res.status(500).json(err);
    });
},


  // Add a friend to a user's friend list, addFriend User.findOneAndUpdate(FILL)
  addFriend(req, res) {
    console.log(`📌 Adding friend (ID: ${req.params.friendId}) to user (ID: ${req.params.userId})`);

    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) => {
        if (!user) {
          console.warn(`⚠️ No user found with ID: ${req.params.userId}`);
          return res.status(404).json({ message: 'No user found with that ID' });
        }
        console.log(`✅ Friend added! ${user.username} now has ${user.friends.length} friends`);
        res.json(user);
      })
      .catch((err) => {
        console.error('❌ Error adding friend:', err);
        res.status(500).json(err);
      });
  },

  // Remove a friend from a user's friend list, removeFriend User.findOneAndUpdate(FILL)
  removeFriend(req, res) {
    console.log(`📌 Removing friend (ID: ${req.params.friendId}) from user (ID: ${req.params.userId})`);

    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) => {
        if (!user) {
          console.warn(`⚠️ No user found with ID: ${req.params.userId}`);
          return res.status(404).json({ message: 'No user found with that ID' });
        }
        console.log(`✅ Friend removed! ${user.username} now has ${user.friends.length} friends`);
        res.json(user);
      })
      .catch((err) => {
        console.error('❌ Error removing friend:', err);
        res.status(500).json(err);
      });
  },
};
