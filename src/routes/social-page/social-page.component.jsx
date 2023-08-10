
import Calendar from "../../components/habits/calendar/calendar.component";
import { retrieveProfilePic } from "../../utils/firebase/firebase.utils";

import ImageUploadForm from "../../components/forms/user-image-form/user-image-form.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useState, useEffect } from "react";
const SocialPage = () => {

    const currentUser = useSelector(selectCurrentUser); 
    const [image, setImage] = useState(); 


    return (
        <div>
            this is the social page under construction :3
            
            
            <ImageUploadForm /> 

            {image && (
        <div>
          <h2>Selected Image:</h2>
          <h2>{image}</h2>
          
        </div>
      )}
        </div>
    )
}; 

export default SocialPage; 