const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Arcanaut:Hostage343518!@cluster0.uylwl.mongodb.net/Cluster0?retryWrites=true&w=majority'

, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
