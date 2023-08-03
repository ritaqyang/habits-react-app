import {useState} from 'react';
import Calendar from 'react-calendar'; 
import { selectCurrentUser } from '../../store/user/user.selector';
import { useSelector } from 'react-redux';
import { selectHabits, selectHabitsMap } from '../../store/habit/habit.selector';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { addCollectionAndDocuments, getHabitsfromDatabase, getUserDocuments } from '../../utils/firebase/firebase.utils';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import HABIT_DATA from '../../habit-data';
import { setHabits } from '../../store/habit/habit.reducer';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import HabitForm from '../../components/forms/habits-form/habit-form.component';

import AllCalendars from '../../components/tracker-box/AllCalendars/AllCalendars.component';

const UserPage = () => {
    const [date, setDate] = useState(new Date()); 
   const currentUser = useSelector(selectCurrentUser); 
   const dispatch = useDispatch();
   const getHabitsMap = async () => {

            console.log("get habgits map function"); 
        
          const habitsArray = await getHabitsfromDatabase(currentUser.email);
          console.log(habitsArray);
          dispatch(setHabits(habitsArray));
        };

    useEffect(()=> {

        currentUser && getHabitsMap();


    },[]); 

    const arr = useSelector(selectHabitsMap); 
   


    // useEffect(() => {
    //     addCollectionAndDocuments('habits', HABIT_DATA )
    // }, []); 


//     const dispatch = useDispatch(); 
    
//     useEffect(() => {
//     const getHabitsMap = async () => {
        
//         if (!currentUser) return; 
//       const habitsArray = await getCategoriesAndDocuments('user-habit',currentUser.email,'Habits');
//       console.log(habitsArray);
//       dispatch(setHabits(habitsArray));
//     };

//     getHabitsMap();
//   });

//      const arr = useSelector(selectHabits); 
//      console.log('usselect array is ' + arr);


   
    return (
        <div>
            this is the user page {currentUser && currentUser.email}


            <HabitForm /> 
            {arr}




            <AllCalendars /> 
            
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
