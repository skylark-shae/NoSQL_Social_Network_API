const { Thought, User } = require('../models');

// Thought Controllers (Get all thoughts, Get a single thought by ID, Create a new single thought, Update a thought by ID, Delete a thought by ID, Add a reaction to a thought, Remove reaction from a thought)
  // Get all thoughts, getTHoughts Thoughts.find()
  // Get a single thought by ID, getThoughtById Thought.findOne(FILL)
  // Create a new single thought, createThought User.findOne(FILL)
  // Update a thought by ID, updateThought Thought.findOneAndUpdate(FILL)
  // Delete a thought by ID, deleteThought Thought.findOneAndDelete(FILL)
  // Add a reaction to a thought, addReaction User.findOne(FILL)
  // Remove reaction from a thought, removeReaction Thought.findOneAndUpdate(FILL)

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    // console.log('testGetThoughts');
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  // Get a single thought by ID
  getThoughtById(req, res) {
    // console.log('testGetThoughtById');
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought found with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Create a new single thought
  createThought(req, res) {
    // console.log('Create new thought with user ID:', req.body.userId);
    User.findOne({ _id: req.body.userId })
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: 'No user found with that ID' });
            }
            Thought.create({...req.body, ...{username: user.username}})
              .then((thought) => {
                return User.findOneAndUpdate(
                  { _id: req.body.userId },
                  { $addToSet: { thoughts: thought._id } },
                  { new: true }
                );
              })
              .then((user) =>
                !user
                  ? res.status(404).json({ message: 'Thought created, but found no user with that ID' })
                  : res.json('Created the thought 🎉')
              )
              .catch((err) => res.status(500).json(err));
        })
        .catch((err) => res.status(500).json(err));
  },

  // Update a thought by ID
  updateThought(req, res) {
    // console.log('Update thoughts with ID:', req.params.thoughtId, 'with data:', req.body);
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought found with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete a thought by ID
  deleteThought(req, res) {
    // console.log('Deleting Thought with ID:', req.params.thoughtId);
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought found with that ID' })
          : User.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'Thought deleted but no user found with that ID' })
          : res.json({ message: 'Thought successfully deleted' })
      )
      .catch((err) => res.status(500).json(err));
  },

  // Add a reaction to a thought
  addReaction(req, res) {
    // console.log('Adding reaction to Thought ID:', req.params.thoughtId, 'with data:', req.body);
    User.findOne({ _id: req.body.userId })
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: 'No user found with that ID' });
            }
            reactionContent = { ...req.body, ...{ username: user.username } };
            Thought.findOneAndUpdate(
              { _id: req.params.thoughtId },
              { $addToSet: { reactions: reactionContent } },
              { runValidators: true, new: true }
            )
              .then((thought) =>
                !thought
                  ? res.status(404).json({ message: 'No thought found with that ID' })
                  : res.json(thought)
              )
              .catch((err) => res.status(500).json(err));
        })
        .catch((err) => res.status(500).json(err));
  },

  // Remove reaction from a thought
  removeReaction(req, res) {
    console.log('Removing reaction with ID:', req.params.reactionId, 'from Thought ID:', req.params.thoughtId);
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      )
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought found with that ID' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
  },
};