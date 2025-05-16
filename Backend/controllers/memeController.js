const Meme = require("../models/Meme");

exports.createMeme = async (req, res) => {
  try {
    const { caption, tags } = req.body;

    if (!req.file || !req.file.path) {
      return res.status(400).json({ msg: "Image upload failed" });
    }

    const meme = new Meme({
      imageUrl: req.file.path,
      caption,
      tags: tags?.split(",") || [],
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
    const memes = await Meme.find().sort({ createdAt: -1 });
    res.status(200).json(memes);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.voteMeme = async (req, res) => {
  try {
    res.status(200).json({ msg: "Vote recorded" });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
