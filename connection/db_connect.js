import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const DB_URL = 'mongodb://localhost/test';

const connectDB = () => {
  mongoose
    .connect(DB_URL)
    .then(console.log("DATABASE CONNECTED"))
    .catch(() => {
      console.log("CONNECTION UNSUCCESSFULL");
      setTimeout(connectwithretry, 5000);
    });

  const connectwithretry = () => {
    mongoose.connect(DB_URL).then(console.log("DATABASE CONNECTED"));
  };
};

export default connectDB;