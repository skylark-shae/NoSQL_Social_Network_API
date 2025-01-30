// PRE-MIDDLEWARE ORIGINAL
// const { Schema, model } = require('mongoose');

// // User schema with refs to Thought / User:
// const UserSchema = new Schema(
//     {
//       username: {
//         type: String,
//         unique: true,
//         required: true,
//         trim: true },
//       email: {
//         type: String,
//         unique: true,
//         required: true,
//         match: [/.+@.+\..+/, 'Must match an email address!'] },
//       thoughts: [
//         {
//           type: Schema.Types.ObjectId,
//           ref: 'Thought',
//         },
//       ],
//       friends: [
//         {
//           type: Schema.Types.ObjectId,
//           ref: 'User',
//         },
//       ],
//     },
//     {
//       toJSON: {
//         virtuals: true
//     },
//       id: false,
//     }
//   );

// // Modal to get the number of friends:
// UserSchema.virtual('friendCounter').get(function () {
//     return this.friends.length;
//   });

// // Create model using UserSchema:
// const User = model('User', UserSchema);

// // Export Users model:
// module.exports = User;

const { Schema, model } = require('mongoose');

// User schema with refs to Thought / User:
const UserSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true },
      email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+@.+\..+/, 'Must match an email address!'] },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    },
    {
      toJSON: {
        virtuals: true
    },
      id: false,
    }
  );

// Modal to get the number of friends:
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

// Debugging middleware:
// Log when a user is created
UserSchema.pre('save', function (next) {
    console.log(`⏳ Creating user: ${this.username} (${this.email})`);
    next();
  });
  
  UserSchema.post('save', function (doc, next) {
    console.log(`✅ User created successfully: ${doc.username} (${doc.email})`);
    next();
  });
  
  // Log when a user is updated
  UserSchema.pre('findOneAndUpdate', function (next) {
    console.log(`⏳ Updating user with ID: ${this.getQuery()._id}`);
    next();
  });
  
  UserSchema.post('findOneAndUpdate', function (doc, next) {
    if (doc) {
      console.log(`✅ User updated: ${doc.username}`);
    } else {
      console.log(`⚠️ No user found to update.`);
    }
    next();
  });  


// Create model using UserSchema:
const User = model('User', UserSchema);

// Export Users model:
module.exports = User;
