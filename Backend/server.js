const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoutes = require("./routes/authRoutes");
const memeRoutes = require("./routes/memeRoutes");
const templateRoutes = require("./routes/templateRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

mongoose
  .connect(process.env.mongoURL)
  .then(() => console.log("MongoDb connected!"))
  .catch((err) => console.log("MongoDb Disconnected!", err));

app.use("/auth", authRoutes);
app.use("/meme", memeRoutes);
app.use("/template", templateRoutes);
app.use("/analytics", analyticsRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
