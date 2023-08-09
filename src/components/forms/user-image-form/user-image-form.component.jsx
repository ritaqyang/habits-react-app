import React, { useState } from 'react';
import { uploadImageToStorage, uploadUserProfileImageURL } from '../../../utils/firebase/firebase.utils';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../store/user/user.selector';

const ImageUploadForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
    const currentUser = useSelector(selectCurrentUser); 
  
  
    const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("etartget files " +e.target.files); 
    if (file && file.type === 'image/jpeg') {
      setSelectedImage(file);
    } else {
      alert('Please select a valid JPG image.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((selectedImage) && currentUser){
        //upload image to firebase database 
        uploadImageToStorage(selectedImage,currentUser.email); 

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
          <h2>{selectedImage.name}</h2>
          {/* <img src={URL.createObjectURL(selectedImage)} alt="Selected" /> */}
        </div>
      )}
    </div>
  );
};

export default ImageUploadForm;
