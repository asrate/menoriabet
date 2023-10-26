import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => console.log(err));
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, function (req, res) {
  console.log(`server starting on port ${PORT}`);
});
