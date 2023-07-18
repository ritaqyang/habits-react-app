import {useState} from 'react';
import Calendar from 'react-calendar'; 
import { selectCurrentUser, selectCurUserId} from '../../store/user/user.selector';
import { useSelector } from 'react-redux';

import { useEffect } from 'react';
import { addCollectionAndDocuments  } from '../../utils/firebase/firebase.utils';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.reducer';

const UserPage = () => {
    const [date, setDate] = useState(new Date()); 
    const currentUser = useSelector(selectCurrentUser); 
    

   
    return (
        <div>
            this is the user page {currentUser && currentUser.email}
            
            <h1 className="header">React Calendar</h1>
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date}/>
            </div>
            <div className="text-center">
                Selected date: {date.toDateString()}
            </div>
        </div>
    )
}; 

export default UserPage; 
