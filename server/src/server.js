import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();
mongoose.set("strictQuery", false);

const main = async () => {
  // Connect to db
  //   await mongoose.connect();
  //   console.log("Connected to fakeDB");

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

  app.listen(PORT, () => {
    console.log(`Now listening to port ${PORT}`);
  });
};

main().catch((error) => {
  console.log({ error });
  throw new Error(error);
});
