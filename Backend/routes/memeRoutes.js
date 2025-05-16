const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const {
  createMeme,
  getFeed,
  voteMeme,
} = require("../controllers/memeController");
const { upload } = require("../utils/cloudinary");

router.post("/", protect, upload.single("image"), createMeme);
router.get("/", getFeed);
router.post("/vote", protect, voteMeme);

module.exports = router;
