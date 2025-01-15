const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB');

module.exports = mongoose.connection;


// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// module.exports = mongoose.connection;
