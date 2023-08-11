
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useState, useEffect } from "react";
import { ProfileImage } from "../../components/profile-image/profile-image.component";
import ProfilePictureCropper from "../../components/profile-image/profile-image-cropper.component";
const SocialPage = () => {

    const currentUser = useSelector(selectCurrentUser); 
    return (
        
        <div>
          <h2>image from firestore storage :</h2>


          <ProfileImage />
        </div>
     
    )
}; 

export default SocialPage; 