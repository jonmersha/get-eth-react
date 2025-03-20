import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Get the selected file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file); // Append the file with the field name "image"

    try {
      const response = await fetch("http://localhost:3000/upload/2/2", {
        method: "POST",
        body: formData, // Send the form data
      });

      if (response.ok) {
        const result = await response.json();
        if (result.Data[0].status === "success") {
          navigate("/success"); // Navigate to the success page
        } else {
          setMessage("File upload failed.");
        }
      } else {
        setMessage("File upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setMessage("An error occurred while uploading the file.");
    }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>

      {/* Display error message */}
      {message && <p style={{ color: "red" }}>{message}</p>}
    </div>
  );
};

export default ImageUpload;