const Meme = require("../models/Meme");

exports.getUserStats = async (req, res) => {
  try {
    const memes = await Meme.find({ author: req.user.id });
    const totalViews = memes.reduce((sum, meme) => sum + meme.views, 0);
    const totalVotes = memes.reduce(
      (sum, meme) => sum + (meme.upvotes.length - meme.downvotes.length),
      0
    );
    res.json({ totalMemes: memes.length, totalViews, totalVotes });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
