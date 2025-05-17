const router = require("express").Router();
const { protect } = require("../middlewares/auth");
const { getUserStats } = require("../controllers/analyticsController");

router.get("/stats", protect, getUserStats);

module.exports = router;
