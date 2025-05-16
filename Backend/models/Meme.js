const mongoose = require("mongoose");

const memeSchema = new mongoose.Schema(
  {
    imageUrl: String,
    caption: String,
    tags: [String],
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    downvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Meme", memeSchema);
