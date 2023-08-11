import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { getImageFromStorage } from '../../utils/firebase/firebase.storage';

const CropContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const CropOverlay = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border: 2px dashed rgba(255, 255, 255, 0.7);
  cursor: grab;
`;

function ProfilePictureCropper() {
    const [isDragging, setIsDragging] = useState(false);
    const [overlayPosition, setOverlayPosition] = useState({ left: 0, top: 0 });
    const containerRef = useRef(null);
  


  useEffect (() => {
    const myfunc = async () =>{
      console.log("my func is called in social page component "); 
      const email = 'ritaqyang@gmail.com'; 
      const img = await getImageFromStorage(email); 
      console.log("image is " + img); 
      //setImage(img); 
    }
    myfunc();
  },[]); 

  
  const handleOverlayMouseDown = (e) => {
    setIsDragging(true);
    e.currentTarget.style.cursor = 'grabbing';
  };

  const handleDocumentMouseMove = (e) => {
    // if (!isDragging) return;

    // //const containerRect = e.currentTarget.getBoundingClientRect();
    // const containerRect = document.getElementById('crop-container').getBoundingClientRect();
    // const x = e.clientX - containerRect.left;
    // const y = e.clientY - containerRect.top;
    // const radius = containerRect.width / 2;

    // const distance = Math.sqrt((x - radius) ** 2 + (y - radius) ** 2);
    // if (distance <= radius) {
    //   setOverlayPosition({ left: x, top: y });

      if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;
    const radius = containerRect.width / 2;

    const distance = Math.sqrt((x - radius) ** 2 + (y - radius) ** 2);
    if (distance <= radius) {
      setOverlayPosition({ left: x, top: y });
    }
  };

  

  const handleDocumentMouseUp = () => {
    setIsDragging(false);
    document.body.style.cursor = 'default';
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleDocumentMouseMove);
      document.addEventListener('mouseup', handleDocumentMouseUp);
    } else {
      document.removeEventListener('mousemove', handleDocumentMouseMove);
      document.removeEventListener('mouseup', handleDocumentMouseUp);
    }
  }, [isDragging]);

  return (
    <CropContainer>
          
        
      <ProfileImg
        id="myimg"
        src=""
        alt="Profile Picture"
      />
      <CropOverlay
        style={{
          left: overlayPosition.left,
          top: overlayPosition.top,
        }}
        onMouseDown={handleOverlayMouseDown}
      ></CropOverlay>
    </CropContainer>
  );
}

export default ProfilePictureCropper;
