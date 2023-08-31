const mongoose = require("mongoose");
let connectionString = process.env.DB_URL;
connectionString = connectionString.replace(
  "<password>",
  process.env.DB_PASSWORD
);
connectionString = connectionString.replace(
  "<username>",
  process.env.DB_USERNAME
);

const connectDB = async () => {
  try {
    await mongoose.connect(connectionString, {
      dbName: process.env.DB_NAME,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
module.exports = { connectDB };
