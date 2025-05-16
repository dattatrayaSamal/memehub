const Meme = require("../models/Meme");

exports.createMeme = async (req, res) => {
  const { imageUrl, caption, tags } = req.body;
  try {
    const meme = new Meme({
      imageUrl,
      caption,
      tags,
      author: req.user.id,
    });
    await meme.save();
    res.status(201).json(meme);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getFeed = async (req, res) => {
  try {
    const memes = await Meme.find()
      .populate("author", "username")
      .sort({ createdAt: -1 });
    res.json(memes);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.voteMeme = async (req, res) => {
  const { memeId, type } = req.body;
  try {
    const meme = await Meme.findById(memeId);
    if (!meme) return res.status(404).json({ msg: "Meme not found" });

    if (type === "upvote") {
      if (!meme.upvotes.includes(req.user.id)) {
        meme.upvotes.push(req.user.id);
        meme.downvotes = meme.downvotes.filter(
          (id) => id.toString() !== req.user.id
        );
      }
    } else {
      if (!meme.downvotes.includes(req.user.id)) {
        meme.downvotes.push(req.user.id);
        meme.upvotes = meme.upvotes.filter(
          (id) => id.toString() !== req.user.id
        );
      }
    }

    await meme.save();
    res.json(meme);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
