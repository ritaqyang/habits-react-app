
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useState, useEffect } from "react";
import { ProfileImage } from "../../components/profile-image/profile-image.component";
import ProfilePictureCropper from "../../components/profile-image/profile-image-cropper.component";
const SocialPage = () => {

    const currentUser = useSelector(selectCurrentUser); 
    return (
        
      <div >
        <div className="text-3xl underline">image from firestore storage :</div>


         
        </div>
     
    )
}; 

export default SocialPage; 