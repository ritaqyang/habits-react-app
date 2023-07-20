import {useState} from 'react';
import Calendar from 'react-calendar'; 
import { selectCurrentUser } from '../../store/user/user.selector';
import { useSelector } from 'react-redux';
import { selectHabitsMap } from '../../store/habit/habit.selector';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { addCollectionAndDocuments, getUserDocuments } from '../../utils/firebase/firebase.utils';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import HABIT_DATA from '../../habit-data';
import { setHabits } from '../../store/habit/habit.reducer';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import HabitForm from '../../components/forms/habits-form/habit-form.component';


const UserPage = () => {
    const [date, setDate] = useState(new Date()); 
    const currentUser = useSelector(selectCurrentUser); 


    useEffect(() => {
        addCollectionAndDocuments('habits', HABIT_DATA )
    }, []); 


//     const dispatch = useDispatch(); 
//     useEffect(() => {
//     const getHabitsMap = async () => {
//       const habitsArray = await getCategoriesAndDocuments('habits');
//       dispatch(setHabits(habitsArray));
//     };

//     getHabitsMap();
//   }, []);


   
    return (
        <div>
            this is the user page {currentUser && currentUser.email}


            {/* {Object.keys(habitsArray).map((title) => {
                const userDoc= habitsArray[title]; 
                return <div>title </div>; 
            })} */}

            <HabitForm /> 
            
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
