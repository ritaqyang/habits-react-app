import {useState} from 'react';
import Calendar from 'react-calendar'; 
import { selectCurrentUser } from '../../store/user/user.selector';
import { useSelector } from 'react-redux';
import { selectHabitsMap } from '../../store/habit/habit.selector';
import { useEffect } from 'react';
import {  useDispatch } from 'react-redux';
import {getHabitsfromDatabase } from '../../utils/firebase/firebase.utils';
import { setHabits } from '../../store/habit/habit.reducer';
import HabitForm from '../../components/forms/habits-form/habit-form.component';
import UserHabitsBoard from '../../components/habits/user-habits-board/user-habits-board.component';

import { GreetingsContainer } from './user-page.styles';

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


    },[currentUser]); 

    const arr = useSelector(selectHabitsMap); 
   


    // useEffect(() => {
    //     addCollectionAndDocuments('habits', HABIT_DATA )
    // }, []); 

   
    return (
        <div>
            this is the user page {currentUser && currentUser.email}


            <HabitForm /> 
            <UserHabitsBoard /> 

            
            {/* <h1 className="header">React Calendar</h1>
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date}/>
            </div>
            <div className="text-center">
                Selected date: {date.toDateString()}
            </div> */}
        </div>
    )
}; 

export default UserPage; 
