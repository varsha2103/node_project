const mongoose = require('mongoose');
// const config = require('config');
const db = 'mongodb://localhost:27017/devconnector';
const Atlas =
  'mongodb+srv://varsha:varsha@123@cluster0.arjyz.mongodb.net/SocialSite?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(Atlas, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.log(err.message);
    // process.exit(1);
  }
};

module.exports = connectDB;
