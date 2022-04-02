const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://shelby9988:12345@cluster0.pfeyz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
