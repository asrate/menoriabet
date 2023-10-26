import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, function (req, res) {
  console.log(`server starting on port ${PORT}`);
});
