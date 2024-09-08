import mongoose, { connect } from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connected successfully!");
  } catch (e) {
    console.log(e);
  }
};
export default connectDB;
