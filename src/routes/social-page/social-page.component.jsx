
import Calendar from "../../components/habits/calendar/calendar.component";
import { retrieveProfilePic } from "../../utils/firebase/firebase.utils";
import { getImageFromStorage } from "../../utils/firebase/firebase.storage";
import ImageUploadForm from "../../components/forms/user-image-form/user-image-form.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useState, useEffect } from "react";
const SocialPage = () => {

    const currentUser = useSelector(selectCurrentUser); 
    const [image, setImage] = useState(); 


    useEffect (() => {
      const myfunc = async () =>{
        const email = 'ritaqyang@gmail.com'; 
        
        const img = await getImageFromStorage(email); 
        console.log("image is " + img); 
        setImage(img); 
      }
      myfunc();
    },[]); 
    


    return (
        
        <div>
          <h2>image from firestore storage :</h2>
          <h2>{image}</h2>
          
        </div>
     
    )
}; 

export default SocialPage; 