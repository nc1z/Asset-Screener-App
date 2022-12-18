import mongoose from "mongoose";

const { Schema } = mongoose;

const watchlistSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      unique: true,
    },
    items: [
      {
        symbol: String,
        coin: String,
        image: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Watchlist", watchlistSchema);
