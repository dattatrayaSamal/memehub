const express = require("express");
const {
  createMeme,
  getMemes,
  getMyMemes,
  getFollowingMemes,
  getMeme,
  updateMeme,
  deleteMeme,
  likeMeme,
  addComment,
  deleteComment,
} = require("../controllers/memeController");
const { protect } = require("../middlewares/auth");
const upload = require("../middlewares/upload");

const router = express.Router();

router
  .route("/")
  .get(getMemes)
  .post(protect, upload.single("image"), createMeme);

router.get("/me", protect, getMyMemes);
router.get("/following", protect, getFollowingMemes);

router
  .route("/:id")
  .get(getMeme)
  .put(protect, updateMeme)
  .delete(protect, deleteMeme);

router.put("/:id/like", protect, likeMeme);

router.route("/:id/comments").post(protect, addComment);

router.delete("/:id/comments/:commentId", protect, deleteComment);

module.exports = router;
