const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialNetworkDB');

mongoose.set('debug', false);

module.exports = mongoose.connection;

// Depreciated code from assistance
// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialNetworkDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.set('debug', false);

// module.exports = mongoose.connection;