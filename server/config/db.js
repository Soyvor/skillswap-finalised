const mongoose = require("mongoose");
const colors = require("colors");


const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://mak:HI.thisis12@cluster01.dbjcjye.mongodb.net/skillswap', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Replace useCreateIndex with createIndexes
     
    });
    console.log(colors.green("Connected to MongoDB"));
  } catch (err) {
    console.error(colors.red("Error in connecting to MongoDB:", err.message));
    process.exit(1);
  };
};

module.exports = connectDB;
   