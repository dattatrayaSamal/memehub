const express = require("express");
const {
  getTemplates,
  getPopularTemplates,
  createTemplate,
  getTemplate,
  updateTemplate,
  deleteTemplate,
} = require("../controllers/templateController");
const { protect } = require("../middlewares/auth");
const upload = require("../middlewares/upload");

const router = express.Router();

router
  .route("/")
  .get(getTemplates)
  .post(protect, upload.single("image"), createTemplate);

router.get("/popular", getPopularTemplates);

router
  .route("/:id")
  .get(getTemplate)
  .put(protect, upload.single("image"), updateTemplate)
  .delete(protect, deleteTemplate);

module.exports = router;
