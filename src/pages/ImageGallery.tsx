import React, { useState } from "react";
import { Modal } from "react-bootstrap"; // Import Bootstrap Modal

const ImageGallery = () => {
  // Images with metadata (e.g., type)
  const images = [
    {
      url: "https://whc.unesco.org/uploads/thumbs/site_0009_0006-360-360-20151104173701.jpg",
      type: "nature",
    },
    {
      url: "https://whc.unesco.org/uploads/thumbs/site_0009_0002-360-360-20151104173659.jpg",
      type: "nature",
    },
    {
      url: "https://whc.unesco.org/uploads/thumbs/site_0009_0053-360-360-20170227184356.jpg",
      type: "culture",
    },
    {
      url: "https://whc.unesco.org/uploads/thumbs/site_0009_0024-1000-669-20250109111159.jpg",
      type: "culture",
    },
    {
      url: "https://whc.unesco.org/uploads/thumbs/site_1333_0001-1000-750-20230116123537.jpg",
      type: "history",
    },
    {
      url: "https://whc.unesco.org/uploads/thumbs/site_0012_0011-360-360-20131009172229.jpg",
      type: "history",
    },
  ];

  // State for selected filters
  const [selectedTypes, setSelectedTypes] = useState([]);

  // State for the full-size image modal
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Handle checkbox changes
  const handleCheckboxChange = (type) => {
    setSelectedTypes((prevSelected) =>
      prevSelected.includes(type)
        ? prevSelected.filter((t) => t !== type) // Remove type if already selected
        : [...prevSelected, type] // Add type if not selected
    );
  };

  // Handle "Select All" checkbox
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedTypes(types); // Select all types
    } else {
      setSelectedTypes([]); // Deselect all types
    }
  };

  // Get unique types for filtering options
  const types = [...new Set(images.map((image) => image.type))];

  // Filter images based on selected types
  const filteredImages =
    selectedTypes.length === 0
      ? images // Show all images if no filters are selected
      : images.filter((image) => selectedTypes.includes(image.type));

  // Handle image click to show full-size image
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Image Gallery</h1>

      {/* Filtering checkboxes */}
      <div className="mb-4">
        <h5>Filter by Type:</h5>
        <div className="form-check form-check-inline">
          <input
            type="checkbox"
            id="select-all"
            className="form-check-input"
            checked={selectedTypes.length === types.length}
            onChange={handleSelectAll}
          />
          <label htmlFor="select-all" className="form-check-label">
            Select All
          </label>
        </div>
        {types.map((type) => (
          <div key={type} className="form-check form-check-inline">
            <input
              type="checkbox"
              id={type}
              className="form-check-input"
              checked={selectedTypes.includes(type)}
              onChange={() => handleCheckboxChange(type)}
            />
            <label htmlFor={type} className="form-check-label">
              {type.charAt(0).toUpperCase() + type.slice(1)} {/* Capitalize type */}
            </label>
          </div>
        ))}
      </div>

      {/* Display filtered images */}
      <div className="row">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="col-md-4 col-lg-3 mb-4"
            style={{ transition: "transform 0.3s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              className="card h-100"
              style={{ cursor: "pointer" }}
              onClick={() => handleImageClick(image.url)}
            >
              <img
                src={image.url}
                alt={`Gallery item ${index + 1}`}
                className="card-img-top"
                style={{
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <div className="card-body">
                <p className="card-text">Image {index + 1}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full-size image modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Full-Size Image</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={selectedImage}
            alt="Full-size"
            style={{ width: "100%", height: "auto" }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ImageGallery;