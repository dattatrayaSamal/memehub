const router = require("express").Router();
const { protect } = require("../middlewares/authMiddleware");
const {
  createMeme,
  getFeed,
  voteMeme,
} = require("../controllers/memeController");

router.post("/", protect, createMeme);
router.get("/", getFeed);
router.post("/vote", protect, voteMeme);

module.exports = router;
