const Meme = require("../models/Meme");
const Template = require("../models/Template");
const User = require("../models/User");

const createMeme = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Log the entire body to check tags data

    const {
      title,
      topText,
      bottomText,
      fontSize,
      textColor,
      textOutline,
      tags = [],
      privacy,
      isContestEntry,
      templateId,
    } = req.body;

    // Check if tags is a stringified array and parse it
    let parsedTags = tags;

    // If tags is a string and looks like a stringified array, parse it
    if (typeof tags === "string") {
      try {
        parsedTags = JSON.parse(tags); // Parse the stringified array
      } catch (err) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid tags format" });
      }
    }

    // Ensure tags is now an array
    if (!Array.isArray(parsedTags)) {
      return res
        .status(400)
        .json({ success: false, message: "Tags must be an array" });
    }

    console.log(
      "Formatted Tags:",
      parsedTags.map((tag) => tag.toLowerCase())
    );

    // Check if image was uploaded
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "Please upload an image" });
    }

    // Create meme
    const meme = new Meme({
      title,
      imageUrl: req.file.path,
      topText,
      bottomText,
      fontSize,
      textColor,
      textOutline,
      tags: parsedTags.map((tag) => tag.toLowerCase()), // Use the parsed tags array
      privacy,
      isContestEntry,
      createdBy: req.user.id,
      template: templateId,
    });

    await meme.save();

    res.status(201).json({ success: true, meme });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: err.message });
  }
};

const getMemes = async (req, res) => {
  try {
    const memes = await Meme.find({ privacy: "public" })
      .populate("createdBy", "username avatar")
      .populate("template", "name category")
      .sort({ createdAt: -1 });

    res.json({ success: true, count: memes.length, memes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const getMyMemes = async (req, res) => {
  try {
    const memes = await Meme.find({ createdBy: req.user.id })
      .populate("createdBy", "username avatar")
      .populate("template", "name category")
      .sort({ createdAt: -1 });

    res.json({ success: true, count: memes.length, memes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const getFollowingMemes = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const memes = await Meme.find({
      createdBy: { $in: user.following },
      privacy: { $in: ["public", "followers"] },
    })
      .populate("createdBy", "username avatar")
      .populate("template", "name category")
      .sort({ createdAt: -1 });

    res.json({ success: true, count: memes.length, memes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const getMeme = async (req, res) => {
  try {
    const meme = await Meme.findById(req.params.id)
      .populate("createdBy", "username avatar")
      .populate("template", "name category")
      .populate("comments.user", "username avatar");

    if (!meme) {
      return res
        .status(404)
        .json({ success: false, message: "Meme not found" });
    }

    // Check privacy settings
    if (
      meme.privacy === "private" &&
      meme.createdBy.toString() !== req.user?.id
    ) {
      return res
        .status(401)
        .json({ success: false, message: "Not authorized to view this meme" });
    }

    if (
      meme.privacy === "followers" &&
      meme.createdBy.toString() !== req.user?.id
    ) {
      const creator = await User.findById(meme.createdBy);
      if (!creator.followers.includes(req.user?.id)) {
        return res.status(401).json({
          success: false,
          message: "Not authorized to view this meme",
        });
      }
    }

    res.json({ success: true, meme });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const updateMeme = async (req, res) => {
  try {
    const {
      title,
      topText,
      bottomText,
      fontSize,
      textColor,
      textOutline,
      tags,
      privacy,
      isContestEntry,
    } = req.body;

    let meme = await Meme.findById(req.params.id);

    if (!meme) {
      return res
        .status(404)
        .json({ success: false, message: "Meme not found" });
    }

    // Check if user is meme creator
    if (meme.createdBy.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: "Not authorized to update this meme",
      });
    }

    meme = await Meme.findByIdAndUpdate(
      req.params.id,
      {
        title,
        topText,
        bottomText,
        fontSize,
        textColor,
        textOutline,
        tags: tags.map((tag) => tag.toLowerCase()),
        privacy,
        isContestEntry,
      },
      { new: true, runValidators: true }
    );

    res.json({ success: true, meme });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const deleteMeme = async (req, res) => {
  try {
    // Find meme by ID
    const meme = await Meme.findById(req.params.id);

    // If meme not found, return an error response
    if (!meme) {
      return res
        .status(404)
        .json({ success: false, message: "Meme not found" });
    }

    // Check if the user is the creator of the meme
    if (meme.createdBy.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: "Not authorized to delete this meme",
      });
    }

    // Delete the meme
    await Meme.findByIdAndDelete(req.params.id);

    // Return a success message
    res.json({ success: true, message: "Meme removed" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const likeMeme = async (req, res) => {
  try {
    const meme = await Meme.findById(req.params.id);

    if (!meme) {
      return res
        .status(404)
        .json({ success: false, message: "Meme not found" });
    }

    const alreadyLiked = meme.likes.includes(req.user.id);

    if (alreadyLiked) {
      // Unlike
      meme.likes = meme.likes.filter((like) => like.toString() !== req.user.id);
    } else {
      // Like
      meme.likes.push(req.user.id);
    }

    await meme.save();

    res.json({
      success: true,
      likes: meme.likes.length,
      isLiked: !alreadyLiked,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const addComment = async (req, res) => {
  try {
    const { text } = req.body;

    // Find the meme by its ID
    const meme = await Meme.findById(req.params.id);

    if (!meme) {
      return res
        .status(404)
        .json({ success: false, message: "Meme not found" });
    }

    // Create the new comment
    const comment = {
      user: req.user.id,
      text,
    };

    // Push the new comment to the meme's comment array
    meme.comments.push(comment);
    await meme.save();

    // Populate the user details in the comment
    // `await meme.populate()` will work without `.exec()` in Mongoose v6+
    await meme.populate("comments.user", "username avatar");

    // Send the response with the newly added comment
    res.json({
      success: true,
      comment: meme.comments[meme.comments.length - 1], // Return the latest added comment
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const deleteComment = async (req, res) => {
  try {
    const meme = await Meme.findById(req.params.id);

    if (!meme) {
      return res
        .status(404)
        .json({ success: false, message: "Meme not found" });
    }

    // Find comment index
    const commentIndex = meme.comments.findIndex(
      (comment) => comment._id.toString() === req.params.commentId
    );

    if (commentIndex === -1) {
      return res
        .status(404)
        .json({ success: false, message: "Comment not found" });
    }

    // Check if user is comment owner or meme owner
    const isCommentOwner =
      meme.comments[commentIndex].user.toString() === req.user.id;
    const isMemeOwner = meme.createdBy.toString() === req.user.id;

    if (!isCommentOwner && !isMemeOwner) {
      return res.status(401).json({
        success: false,
        message: "Not authorized to delete this comment",
      });
    }
    meme.comments.splice(commentIndex, 1);
    await meme.save();

    res.json({ success: true, message: "Comment removed" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
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
};
