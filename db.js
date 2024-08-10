import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.MONGO_DB_URL;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
};

export default connectToDatabase;
