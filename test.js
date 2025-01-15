const mongoose = require('./config/connection'); // Import the database connection
const User = require('./models/user');          // Import the User model

// Wait for the database connection to open
mongoose.once('open', async () => {
  console.log('Connected to MongoDB');

  // Clear the database to prevent duplicate data
  await User.deleteMany({});

  // Create a new user
  const newUser = await User.create({
    username: 'testUser',
    email: 'test@example.com',
  });

  console.log('User created:', newUser);

  // Close the database connection
  mongoose.close();
});
