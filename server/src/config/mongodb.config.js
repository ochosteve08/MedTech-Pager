require("dotenv").config();
const mongoose = require("mongoose");
const environmentVariables = require("./env");

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(environmentVariables.MONGO_URL, {
      useNewurlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected");
  } catch (error) {
    console.log("Error in connecting to mongodb", error);
    throw new Error(error);
  }
};

module.exports = {
  connectToMongoDb,
};
