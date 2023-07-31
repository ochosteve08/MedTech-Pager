const environmentVariables = require("./env");
const { connectToMongoDb } = require("./mongodb.config");


module.exports = {
  connectToMongoDb,
  environmentVariables,
};
