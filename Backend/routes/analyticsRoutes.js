const router = require("express").Router();
const { protect } = require("../middlewares/authMiddleware");
const { getUserStats } = require("../controllers/analyticsController");

router.get("/stats", protect, getUserStats);

module.exports = router;
