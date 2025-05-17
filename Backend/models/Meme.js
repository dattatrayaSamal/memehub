const mongoose = require("mongoose");

const MemeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  topText: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  bottomText: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  fontSize: {
    type: Number,
    default: 36,
  },
  textColor: {
    type: String,
    default: "#FFFFFF",
  },
  textOutline: {
    type: String,
    default: "#000000",
  },
  tags: [
    {
      type: String,
      trim: true,
      lowercase: true,
    },
  ],
  privacy: {
    type: String,
    enum: ["public", "followers", "private"],
    default: "public",
  },
  isContestEntry: {
    type: Boolean,
    default: false,
  },
  contestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contest",
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      text: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  template: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Template",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Meme", MemeSchema);
