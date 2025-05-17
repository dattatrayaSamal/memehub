// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from "react";
import { popularTemplates } from "../components/data/mockdata";
import { Link } from "react-router-dom";
const CreateMeme = () => {
  // Template data
  //
  //
  // State variables
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [fontSize, setFontSize] = useState(36);
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [textOutline, setTextOutline] = useState("#000000");
  const [memeTitle, setMemeTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [previewMode, setPreviewMode] = useState(false);
  const [privacy, setPrivacy] = useState("public");
  const [submitToContest, setSubmitToContest] = useState(false);
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  // Popular tags suggestions
  const popularTags = [
    "Funny",
    "Relatable",
    "Programming",
    "Gaming",
    "WorkLife",
    "Movies",
    "Pets",
    "Food",
    "Sports",
  ];

  // Handle tag input
  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // Get selected template image
  const getUploadedTemplateImage = () => {
    if (!setImage) return null;
    const template = popularTemplates.find((t) => t.id === setImage);
    return template ? template.imageUrl : null;
  };

  const getSelectedTemplateImage = () => {
    if (!selectedTemplate) return null;
    const template = popularTemplates.find((t) => t.id === selectedTemplate);
    return template ? template.imageUrl : null;
  };

  return (
    <div className="min-h-[1024px] bg-gray-50">
      {/* Header with back button */}
      <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <i className="fas fa-laugh-squint text-purple-600 mr-3"></i>
          Create Your Own Meme
        </h1>
        <Link
          to="/dashboard"
          className="flex items-center text-purple-700 hover:text-purple-900 cursor-pointer"
        >
          <i className="fas fa-arrow-left mr-2"></i>
          Back to Home
        </Link>
      </header>

      {/* Main content area */}
      <main className="container mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Template selection */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <i className="fas fa-images text-purple-500 mr-2"></i>
            Choose a Template
          </h2>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {popularTemplates.map((template) => (
              <div
                key={template.id}
                onClick={() => setSelectedTemplate(template.id)}
                className={`rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  selectedTemplate === template.id
                    ? "border-purple-500 shadow-md transform scale-105"
                    : "border-gray-200 hover:border-purple-300"
                }`}
              >
                <div className="aspect-w-1 aspect-h-1 relative">
                  <img
                    src={template.imageUrl}
                    alt={template.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-2 bg-gray-50">
                  <p className="text-xs font-medium truncate">
                    {template.name}
                  </p>
                  <p className="text-xs text-gray-500">{template.category}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full text-purple-600 hover:text-purple-800 text-sm font-medium py-2 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer mb-6 !rounded-button whitespace-nowrap">
            Browse More Templates
          </button>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-md font-medium text-gray-800 mb-3">
              Upload Your Own Image
            </h3>

            <label htmlFor="imageUpload">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors cursor-pointer">
                <i className="fas fa-cloud-upload-alt text-3xl text-gray-400 mb-3"></i>
                <p className="text-sm text-gray-600 mb-1">
                  Drag & drop an image or
                </p>
                <span className="text-purple-600 font-medium text-sm hover:text-purple-800">
                  Browse Files
                </span>
                <p className="text-xs text-gray-400 mt-3">
                  Supports JPG, PNG, GIF (Max 5MB)
                </p>
              </div>
            </label>

            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />

            {image && (
              <div className="mt-4 text-sm text-gray-600">
                Selected file: <strong>{image.name}</strong>
              </div>
            )}
          </div>
        </div>

        {/* Middle column - Meme editor */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center">
              <i className="fas fa-edit text-purple-500 mr-2"></i>
              Meme Editor
            </h2>
            <div className="flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setPreviewMode(false)}
                className={`px-4 py-1.5 text-sm rounded-full transition-colors !rounded-button whitespace-nowrap cursor-pointer ${
                  !previewMode
                    ? "bg-white text-purple-700 shadow-sm"
                    : "text-gray-600"
                }`}
              >
                Edit
              </button>
              <button
                onClick={() => setPreviewMode(true)}
                className={`px-4 py-1.5 text-sm rounded-full transition-colors !rounded-button whitespace-nowrap cursor-pointer ${
                  previewMode
                    ? "bg-white text-purple-700 shadow-sm"
                    : "text-gray-600"
                }`}
              >
                Preview
              </button>
            </div>
          </div>

          {/* Canvas area */}
          <div className="border border-gray-200 rounded-lg overflow-hidden mb-6 bg-gray-100 flex items-center justify-center">
            {selectedTemplate ? (
              <div className="relative w-full">
                <img
                  src={getSelectedTemplateImage() || ""}
                  alt="Meme template"
                  className="w-full h-auto"
                />
                {/* ///////////here   trying to get uploaded image*/}
                <img
                  src={getUploadedTemplateImage() || ""}
                  alt="Uploaded image"
                  className="w-full h-auto"
                />
                <div className="absolute top-0 left-0 w-full p-4 text-center">
                  <p
                    style={{
                      fontSize: `${fontSize}px`,
                      color: textColor,
                      textShadow:
                        textOutline !== "transparent"
                          ? `2px 2px 0 ${textOutline}, -2px -2px 0 ${textOutline}, 2px -2px 0 ${textOutline}, -2px 2px 0 ${textOutline}`
                          : "none",
                      fontFamily: "Impact, sans-serif",
                    }}
                    className="font-bold uppercase break-words px-4 select-none"
                  >
                    {topText || (previewMode ? "" : "TOP TEXT")}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 text-center">
                  <p
                    style={{
                      fontSize: `${fontSize}px`,
                      color: textColor,
                      textShadow:
                        textOutline !== "transparent"
                          ? `2px 2px 0 ${textOutline}, -2px -2px 0 ${textOutline}, 2px -2px 0 ${textOutline}, -2px 2px 0 ${textOutline}`
                          : "none",
                      fontFamily: "Impact, sans-serif",
                    }}
                    className="font-bold uppercase break-words px-4 select-none"
                  >
                    {bottomText || (previewMode ? "" : "BOTTOM TEXT")}
                  </p>
                </div>
              </div>
            ) : (
              <div className="py-20 px-6 text-center">
                <i className="fas fa-image text-4xl text-gray-300 mb-3"></i>
                <p className="text-gray-500">
                  Select a template to start creating
                </p>
              </div>
            )}
          </div>

          {/* Text editing controls */}
          {!previewMode && (
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="top-text"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Top Text
                </label>
                <input
                  id="top-text"
                  type="text"
                  value={topText}
                  onChange={(e) => setTopText(e.target.value)}
                  placeholder="Enter top text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label
                  htmlFor="bottom-text"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Bottom Text
                </label>
                <input
                  id="bottom-text"
                  type="text"
                  value={bottomText}
                  onChange={(e) => setBottomText(e.target.value)}
                  placeholder="Enter bottom text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Font Size
                  </label>
                  <div className="flex items-center">
                    <button
                      onClick={() => setFontSize(Math.max(16, fontSize - 2))}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-600 h-9 w-9 rounded-l-md flex items-center justify-center cursor-pointer !rounded-button whitespace-nowrap"
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <input
                      type="number"
                      value={fontSize}
                      onChange={(e) =>
                        setFontSize(
                          Math.max(
                            16,
                            Math.min(72, parseInt(e.target.value) || 36)
                          )
                        )
                      }
                      className="h-9 w-full text-center border-y border-gray-300 text-sm border-none"
                      min="16"
                      max="72"
                    />
                    <button
                      onClick={() => setFontSize(Math.min(72, fontSize + 2))}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-600 h-9 w-9 rounded-r-md flex items-center justify-center cursor-pointer !rounded-button whitespace-nowrap"
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Text Color
                  </label>
                  <div className="flex space-x-2">
                    {[
                      "#FFFFFF",
                      "#000000",
                      "#FF6B6B",
                      "#4ECDC4",
                      "#FFD166",
                      "#8A2BE2",
                    ].map((color) => (
                      <div
                        key={color}
                        onClick={() => setTextColor(color)}
                        className={`h-9 w-9 rounded-full cursor-pointer ${
                          textColor === color
                            ? "ring-2 ring-offset-2 ring-purple-500"
                            : ""
                        }`}
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Text Outline
                </label>
                <div className="flex space-x-2">
                  {[
                    "#000000",
                    "#FFFFFF",
                    "#FF6B6B",
                    "#4ECDC4",
                    "#FFD166",
                    "transparent",
                  ].map((color) => (
                    <div
                      key={color}
                      onClick={() => setTextOutline(color)}
                      className={`h-9 w-9 rounded-full cursor-pointer ${
                        textOutline === color
                          ? "ring-2 ring-offset-2 ring-purple-500"
                          : ""
                      }`}
                      style={{
                        backgroundColor: color,
                        border:
                          color === "transparent" ? "2px dashed #ccc" : "none",
                      }}
                    >
                      {color === "transparent" && (
                        <i className="fas fa-ban text-gray-400 flex items-center justify-center h-full"></i>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right column - Publishing options */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <i className="fas fa-share-alt text-purple-500 mr-2"></i>
            Publish Your Meme
          </h2>

          <div className="space-y-5">
            <div>
              <label
                htmlFor="meme-title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Meme Title <span className="text-red-500">*</span>
              </label>
              <input
                id="meme-title"
                type="text"
                value={memeTitle}
                onChange={(e) => setMemeTitle(e.target.value)}
                placeholder="Give your meme a catchy title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label
                htmlFor="tags-input"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tags
              </label>
              <div className="flex">
                <input
                  id="tags-input"
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleTagKeyDown}
                  placeholder="Add tags (press Enter)"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  onClick={handleAddTag}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-md text-sm !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Add
                </button>
              </div>

              {/* Added tags */}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full flex items-center"
                    >
                      #{tag}
                      <button
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-1.5 text-purple-600 hover:text-purple-800 cursor-pointer"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </span>
                  ))}
                </div>
              )}

              {/* Popular tags */}
              <div className="mt-3">
                <p className="text-xs text-gray-500 mb-2">Popular tags:</p>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (!tags.includes(tag)) {
                          setTags([...tags, tag]);
                        }
                      }}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full cursor-pointer !rounded-button whitespace-nowrap"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Privacy Settings
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="public"
                    name="privacy"
                    value="public"
                    checked={privacy === "public"}
                    onChange={() => setPrivacy("public")}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded cursor-pointer"
                  />
                  <label
                    htmlFor="public"
                    className="ml-2 text-sm text-gray-700 cursor-pointer"
                  >
                    Public{" "}
                    <span className="text-xs text-gray-500">
                      (Visible to everyone)
                    </span>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="followers"
                    name="privacy"
                    value="followers"
                    checked={privacy === "followers"}
                    onChange={() => setPrivacy("followers")}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded cursor-pointer"
                  />
                  <label
                    htmlFor="followers"
                    className="ml-2 text-sm text-gray-700 cursor-pointer"
                  >
                    Followers Only{" "}
                    <span className="text-xs text-gray-500">
                      (Only visible to your followers)
                    </span>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="private"
                    name="privacy"
                    value="private"
                    checked={privacy === "private"}
                    onChange={() => setPrivacy("private")}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded cursor-pointer"
                  />
                  <label
                    htmlFor="private"
                    className="ml-2 text-sm text-gray-700 cursor-pointer"
                  >
                    Private{" "}
                    <span className="text-xs text-gray-500">
                      (Only visible to you)
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center mb-5">
                <input
                  type="checkbox"
                  id="contest-submit"
                  checked={submitToContest}
                  onChange={() => setSubmitToContest(!submitToContest)}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded cursor-pointer"
                />
                <label
                  htmlFor="contest-submit"
                  className="ml-2 text-sm text-gray-700 cursor-pointer"
                >
                  Submit to "Friday Work Mood" contest
                </label>
              </div>

              <div className="space-y-3">
                <a className="block w-full bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold py-3 px-4 rounded-lg text-center transition-colors shadow-md !rounded-button whitespace-nowrap cursor-pointer">
                  Publish Meme
                </a>

                <a className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg text-center transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                  Save as Draft
                </a>
              </div>

              <div className="mt-5 text-center">
                <p className="text-xs text-gray-500">
                  By publishing, you agree to our{" "}
                  <a href="#" className="text-purple-600 hover:text-purple-800">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-purple-600 hover:text-purple-800">
                    Community Guidelines
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateMeme;
