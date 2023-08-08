import React, { useState } from 'react';

const ImageUploadForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'image/jpeg') {
      setSelectedImage(file);
    } else {
      alert('Please select a valid JPG image.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedImage) {
      // Here you can implement logic to upload the selectedImage to a server or cloud storage.
      // For this example, let's assume you're just displaying the selected image.
    } else {
      alert('Please select an image to upload.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/jpeg" onChange={handleImageChange} />
        <button type="submit">Upload</button>
      </form>
      {selectedImage && (
        <div>
          <h2>Selected Image:</h2>
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
        </div>
      )}
    </div>
  );
};

export default ImageUploadForm;
