const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  console.log('hello')
  try {
    
    await mongoose.connect('mongodb+srv://mak:HI.thisis12@cluster01.dbjcjye.mongodb.net/skillswap');
    console.log(
      `Connected To DATABASE ${mongoose.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`.bgRed.white);
  }
};


module.exports = connectDB;
