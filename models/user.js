const { Schema, model } = require('mongoose');

// User schema with refs to Thought / User:
const UserSchema = new Schema(
// FILL
  );

// Modal to get the number of friends:
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

// Create model using UserSchema:
const User = model('User', UserSchema);

// Export Users model:
module.exports = User;