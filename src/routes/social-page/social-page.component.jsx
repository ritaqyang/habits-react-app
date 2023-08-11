
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useState, useEffect } from "react";

import ProfilePictureCropper from "../../components/profile-image/profile-image-cropper.component";
const SocialPage = () => {

    const currentUser = useSelector(selectCurrentUser); 
    return (
        
        <div>
          <h2>image from firestore storage :</h2>

          <ProfilePictureCropper /> 
        </div>
     
    )
}; 

export default SocialPage; 