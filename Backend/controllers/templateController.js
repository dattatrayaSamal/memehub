const Template = require("../models/Template");

// @desc    Get all templates
// @route   GET /api/templates
// @access  Public
const getTemplates = async (req, res) => {
  try {
    const { category, search, sort } = req.query;

    // Build query object
    const query = {};

    if (category) {
      query.category = category;
    }

    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    // Build sort object
    let sortBy = { createdAt: -1 }; // Default: newest first

    if (sort === "popular") {
      // You might want to implement popularity based on meme creation count
      sortBy = { createdAt: -1 };
    } else if (sort === "name") {
      sortBy = { name: 1 };
    }

    const templates = await Template.find(query).sort(sortBy);

    res.json({ success: true, count: templates.length, templates });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// @desc    Get popular templates
// @route   GET /api/templates/popular
// @access  Public
const getPopularTemplates = async (req, res) => {
  try {
    const templates = await Template.find({ isFeatured: true }).limit(12);
    res.json({ success: true, count: templates.length, templates });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// @desc    Create a new template
// @route   POST /api/templates
// @access  Private (Admin)
const createTemplate = async (req, res) => {
  try {
    const { name, category, tags } = req.body;

    // Check if image was uploaded
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "Please upload an image" });
    }

    // Create template
    const template = new Template({
      name,
      imageUrl: req.file.path,
      category,
      tags: tags.map((tag) => tag.toLowerCase()),
      createdBy: req.user.id,
    });

    await template.save();

    res.status(201).json({ success: true, template });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// @desc    Get a single template
// @route   GET /api/templates/:id
// @access  Public
const getTemplate = async (req, res) => {
  try {
    const template = await Template.findById(req.params.id);

    if (!template) {
      return res
        .status(404)
        .json({ success: false, message: "Template not found" });
    }

    res.json({ success: true, template });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// @desc    Update a template
// @route   PUT /api/templates/:id
// @access  Private (Admin)
const updateTemplate = async (req, res) => {
  try {
    const { name, category, tags, isFeatured } = req.body;

    let template = await Template.findById(req.params.id);

    if (!template) {
      return res
        .status(404)
        .json({ success: false, message: "Template not found" });
    }

    // Update image if new one was uploaded
    if (req.file) {
      template.imageUrl = req.file.path;
    }

    template = await Template.findByIdAndUpdate(
      req.params.id,
      {
        name,
        category,
        tags: tags.map((tag) => tag.toLowerCase()),
        isFeatured,
      },
      { new: true, runValidators: true }
    );

    res.json({ success: true, template });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// @desc    Delete a template
// @route   DELETE /api/templates/:id
// @access  Private (Admin)
const deleteTemplate = async (req, res) => {
  try {
    const template = await Template.findById(req.params.id);

    if (!template) {
      return res
        .status(404)
        .json({ success: false, message: "Template not found" });
    }

    await template.remove();

    res.json({ success: true, message: "Template removed" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  getTemplates,
  getPopularTemplates,
  createTemplate,
  getTemplate,
  updateTemplate,
  deleteTemplate,
};
