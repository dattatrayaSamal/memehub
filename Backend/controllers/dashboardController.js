const User = require('../models/User');
const Meme = require('../models/Meme');
const Contest = require('../models/Contest');
const Notification = require('../models/Notification');
const Leaderboard = require('../models/Leaderboard');

// @desc    Get dashboard stats for a user
// @route   GET /api/dashboard/stats
// @access  Private
const getUserStats = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    
    // Count memes created by user
    const memeCount = await Meme.countDocuments({ createdBy: req.user.id });
    
    // Count followers
    const followerCount = user.followers.length;
    
    // Count total likes on user's memes
    const memes = await Meme.find({ createdBy: req.user.id });
    const totalLikes = memes.reduce((sum, meme) => sum + meme.likes.length, 0);
    
    // Calculate viral score (simplified)
    const avgLikes = memes.length > 0 ? totalLikes / memes.length : 0;
    const viralScore = Math.min(Math.floor(avgLikes / 10), 100);
    
    // Engagement data for chart
    const engagementData = {
      likes: [120, 132, 101, 134, 290, 230, 220],
      comments: [45, 52, 38, 54, 70, 65, 60],
      shares: [80, 72, 65, 84, 120, 132, 91]
    };
    
    res.json({
      success: true,
      stats: {
        memeCount,
        followerCount,
        totalLikes,
        viralScore,
        engagementData
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// @desc    Get trending memes
// @route   GET /api/dashboard/trending
// @access  Public
const getTrendingMemes = async (req, res) => {
  try {
    const { page = 1, limit = 9 } = req.query;
    
    const memes = await Meme.find({ privacy: 'public' })
      .sort({ likes: -1, createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('createdBy', 'username avatar')
      .populate('template', 'name category');
    
    const count = await Meme.countDocuments({ privacy: 'public' });
    
    res.json({
      success: true,
      memes,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// @desc    Get latest memes
// @route   GET /api/dashboard/latest
// @access  Public
const getLatestMemes = async (req, res) => {
  try {
    const { page = 1, limit = 9 } = req.query;
    
    const memes = await Meme.find({ privacy: 'public' })
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('createdBy', 'username avatar')
      .populate('template', 'name category');
    
    const count = await Meme.countDocuments({ privacy: 'public' });
    
    res.json({
      success: true,
      memes,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// @desc    Get memes from followed users
// @route   GET /api/dashboard/following
// @access  Private
const getFollowingMemes = async (req, res) => {
  try {
    const { page = 1, limit = 9 } = req.query;
    const user = await User.findById(req.user.id);
    
    const memes = await Meme.find({
      createdBy: { $in: user.following },
      privacy: { $in: ['public', 'followers'] }
    })
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('createdBy', 'username avatar')
      .populate('template', 'name category');
    
    const count = await Meme.countDocuments({
      createdBy: { $in: user.following },
      privacy: { $in: ['public', 'followers'] }
    });
    
    res.json({
      success: true,
      memes,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// @desc    Get leaderboard data
// @route   GET /api/dashboard/leaderboard
// @access  Public
const getLeaderboard = async (req, res) => {
  try {
    const { type = 'weekly' } = req.query;
    
    let sortField;
    switch (type) {
      case 'weekly':
        sortField = 'weeklyPoints';
        break;
      case 'monthly':
        sortField = 'monthlyPoints';
        break;
      case 'allTime':
        sortField = 'allTimePoints';
        break;
      default:
        sortField = 'weeklyPoints';
    }
    
    const leaderboard = await Leaderboard.find()
      .sort({ [sortField]: -1 })
      .limit(50)
      .populate('user', 'username avatar');
    
    // Add rank and change indicators
    const rankedLeaderboard = leaderboard.map((entry, index) => {
      let change;
      if (type === 'weekly') {
        change = entry.lastWeekRank 
          ? (entry.lastWeekRank > index + 1 ? 'up' : entry.lastWeekRank < index + 1 ? 'down' : 'same')
          : 'same';
      } else if (type === 'monthly') {
        change = entry.lastMonthRank 
          ? (entry.lastMonthRank > index + 1 ? 'up' : entry.lastMonthRank < index + 1 ? 'down' : 'same')
          : 'same';
      } else {
        change = 'same';
      }
      
      return {
        rank: index + 1,
        user: entry.user,
        points: entry[sortField],
        change
      };
    });
    
    res.json({
      success: true,
      leaderboard: rankedLeaderboard,
      type
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// @desc    Get top creators
// @route   GET /api/dashboard/top-creators
// @access  Public
const getTopCreators = async (req, res) => {
  try {
    const topCreators = await User.aggregate([
      {
        $lookup: {
          from: 'memes',
          localField: '_id',
          foreignField: 'createdBy',
          as: 'memes'
        }
      },
      {
        $project: {
          username: 1,
          avatar: 1,
          followerCount: { $size: '$followers' },
          memeCount: { $size: '$memes' }
        }
      },
      { $sort: { followerCount: -1 } },
      { $limit: 10 }
    ]);
    
    res.json({
      success: true,
      topCreators
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// @desc    Get active contests
// @route   GET /api/dashboard/contests
// @access  Public
const getActiveContests = async (req, res) => {
  try {
    const contests = await Contest.find({ 
      status: 'active',
      endDate: { $gt: new Date() }
    })
    .sort({ endDate: 1 })
    .limit(3);
    
    res.json({
      success: true,
      contests
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// @desc    Get user notifications
// @route   GET /api/dashboard/notifications
// @access  Private
const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .limit(10)
      .populate('relatedUser', 'username avatar')
      .populate('relatedMeme', 'imageUrl title');
    
    // Mark as read
    await Notification.updateMany(
      { user: req.user.id, isRead: false },
      { $set: { isRead: true } }
    );
    
    res.json({
      success: true,
      notifications
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// @desc    Get trending tags
// @route   GET /api/dashboard/trending-tags
// @access  Public
const getTrendingTags = async (req, res) => {
  try {
    const trendingTags = await Meme.aggregate([
      { $unwind: '$tags' },
      { $group: { _id: '$tags', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 20 },
      { $project: { tag: '$_id', _id: 0 } }
    ]);
    
    res.json({
      success: true,
      trendingTags: trendingTags.map(t => t.tag)
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = {
  getUserStats,
  getTrendingMemes,
  getLatestMemes,
  getFollowingMemes,
  getLeaderboard,
  getTopCreators,
  getActiveContests,
  getNotifications,
  getTrendingTags
};