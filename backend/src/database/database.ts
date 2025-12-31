import mongoose from "mongoose";

const { DB_URL } = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL as string);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process on failure
  }
};

export default connectDB; // Export the default function
