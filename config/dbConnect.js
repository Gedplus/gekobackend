const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const uri = process.env.MONGODB_URL;

    if (!uri) {
      throw new Error("MONGODB_URL is not defined in the environment variables.");
    }

    const conn = await mongoose.connect(uri);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = dbConnect;
