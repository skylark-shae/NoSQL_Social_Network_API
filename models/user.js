const { Schema, model } = require('mongoose');

// User schema with references to Thought and User (friends):

// Virtual to get the number of friends:
