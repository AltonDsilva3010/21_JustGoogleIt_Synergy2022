const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = async () => {
  dotenv.config();
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("MongoDb Connected...");
  } catch (error) {
    console.log(error.message);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
