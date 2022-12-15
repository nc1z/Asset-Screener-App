import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import marketsRoutes from "./routes/markets.js";

dotenv.config();
mongoose.set("strictQuery", false);

const MONGO_URI = process.env.MONGO_URI;

const main = async () => {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to mongoDB");

  const PORT = process.env.PORT || 8080;
  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization", "x-access-token"],
    })  
  );
  app.use("/auth", authRoutes);
  app.use("/markets", marketsRoutes);

  app.listen(PORT, () => {
    console.log(`Now listening to port ${PORT}`);
  });
};

main().catch((error) => {
  console.log({ error });
  throw new Error(error);
});
