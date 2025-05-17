const mongoose = require("mongoose");

const TemplateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["funny", "animals", "movies", "gaming", "work", "other"],
  },
  tags: [
    {
      type: String,
      trim: true,
      lowercase: true,
    },
  ],
  isFeatured: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Template", TemplateSchema);
