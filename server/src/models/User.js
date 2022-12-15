import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      unique: true
    },
    password: {
      type: String,
      minLength: 8,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("user", userSchema);
