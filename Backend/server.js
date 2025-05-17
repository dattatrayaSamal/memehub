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
const dashboardRoutes = require('./routes/dashboardRoutes');

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
app.use('/api/dashboard', dashboardRoutes);//dashboard

app.get("/verify", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    res.status(200).json({ message: "Token valid", user: decoded });
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
