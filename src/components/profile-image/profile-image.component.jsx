import { useEffect } from "react";
import { getImageFromStorage } from "../../utils/firebase/firebase.storage";
import styled from 'styled-components'; 

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 60%;
`;
export const ProfileImage = () => {
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

      return (
        <>

            <ProfileImg
            id="myimg"
            src=""
            alt="Profile Picture"
            />
            
        </>
      )


}