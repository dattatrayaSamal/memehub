const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const {
  getUserStats,
  getTrendingMemes,
  getLatestMemes,
  getFollowingMemes,
  getLeaderboard,
  getTopCreators,
  getActiveContests,
  getNotifications,
  getTrendingTags
} = require('../controllers/dashboardController');

const router = express.Router();

// User dashboard stats
router.get('/stats', protect, getUserStats);

// Meme feeds
router.get('/trending', getTrendingMemes);
router.get('/latest', getLatestMemes);
router.get('/following', protect, getFollowingMemes);

// Leaderboard
router.get('/leaderboard', getLeaderboard);

// Top creators
router.get('/top-creators', getTopCreators);//server error

// Contests
router.get('/contests', getActiveContests);

// Notifications
router.get('/notifications', protect, getNotifications);

// Trending tags
router.get('/trending-tags', getTrendingTags);

module.exports = router;