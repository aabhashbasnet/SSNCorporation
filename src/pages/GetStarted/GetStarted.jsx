import React, { useState } from "react";
import "./GetStarted.css"; // You can create a separate CSS file for styling

const GetStarted = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle file upload logic here
    if (file) {
      console.log("File ready for upload:", file);
      // You can add your upload logic here
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div className="get-started-content">
      <h1 className="get-started-headline">Get Started with Drawing Analysis</h1>
      <p className="get-started-description">
        Upload your drawings in PDF or image format to begin extracting key elements and generating material estimates.
      </p>

      <form onSubmit={handleSubmit} className="upload-form">
        <input
          type="file"
          accept=".pdf, .jpg, .jpeg, .png"
          onChange={handleFileChange}
          className="file-input"
        />
        <button type="submit" className="button upload-button">Upload Drawing</button>
      </form>
    </div>
  );
};

export default GetStarted;