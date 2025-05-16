const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.mongoURL)
  .then(() => console.log("MongoDb connected!"))
  .catch((err) => console.log("MongoDb Disconnected!", err));

app.use("/auth", authRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
