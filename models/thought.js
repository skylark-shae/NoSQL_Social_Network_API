const { Schema, model, Types } = require('mongoose');

// Example Reaction Schema:
const ReactionSchema = new Schema({
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: { type: String, required: true },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });


// Thought refs User for population:
const ThoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    reactions: [ReactionSchema],
  },
  {
    toJSON: { virtuals: true },
    id: false,
  }
);

// Debugging middleware:
// Log when a thought is created
ThoughtSchema.pre('save', function (next) {
    console.log(`⏳ Creating thought: "${this.thoughtText}" by ${this.username}`);
    next();
  });
  
  ThoughtSchema.post('save', function (doc, next) {
    console.log(`✅ Thought created successfully: "${doc.thoughtText}" by ${doc.username}`);
    next();
  });
  
  // Log when a thought is updated
  ThoughtSchema.pre('findOneAndUpdate', function (next) {
    console.log(`⏳ Updating thought with ID: ${this.getQuery()._id}`);
    next();
  });
  
  ThoughtSchema.post('findOneAndUpdate', function (doc, next) {
    if (doc) {
      console.log(`✅ Thought updated: "${doc.thoughtText}"`);
    } else {
      console.log(`⚠️ No thought found to update.`);
    }
    next();
  });
  
  // Log when a thought is deleted
  ThoughtSchema.pre('findOneAndDelete', function (next) {
    console.log(`⏳ Deleting thought with ID: ${this.getQuery()._id}`);
    next();
  });
  
  ThoughtSchema.post('findOneAndDelete', function (doc, next) {
    if (doc) {
      console.log(`🗑️ Thought deleted: "${doc.thoughtText}"`);
    } else {
      console.log(`⚠️ No thought found to delete.`);
    }
    next();
  }); 


// Create model using ThoughtSchema:
const Thought = model('Thought', ThoughtSchema);

// Export Thought model:
module.exports = Thought;