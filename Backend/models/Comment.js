const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    meme: { type: mongoose.Schema.Types.ObjectId, ref: "Meme" },
    text: { type: String, maxlength: 140 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
