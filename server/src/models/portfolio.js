import mongoose from "mongoose";

const { Schema } = mongoose;

const portfolioSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      unique: true,
    },
    currentAssets: [
      {
        name: String,
        value: Number,
      },
    ],
    tickets: [
      {
        ticketid: String,
        datetime: String,
        asset: String,
        order: String,
        amount: Number,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Portfolio", portfolioSchema);
