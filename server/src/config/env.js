require("dotenv").config();

module.exports = {
  ENVIRONMENT: process.env.ENVIRONMENT || "ochosteve",
  APP_PORT: process.env.APP_PORT || "8080",
  APP_HOST: process.env.APP_HOST,
  MONGO_URL: process.env.MONGO_URL,
  NODE_ENV: process.env.NODE_ENV,
  STREAM_API_KEY: process.env.STREAM_API_KEY,
  STREAM_APP_ID: process.env.STREAM_APP_ID,
  STREAM_API_SECRET: process.env.STREAM_API_SECRET,

};
