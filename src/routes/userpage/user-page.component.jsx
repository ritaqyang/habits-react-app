import {useState, useEffect} from 'react';
import { selectCurrentUser } from '../../store/user/user.selector';
import { useSelector, useDispatch} from 'react-redux';
import { selectHabits, selectHabitsMap } from '../../store/habit/habit.selector';
import {getHabitsfromDatabase } from '../../utils/firebase/firebase.utils';
import { setHabits } from '../../store/habit/habit.reducer';
import HabitForm from '../../components/forms/habits-form/habit-form.component';
import UserHabitsBoard from '../../components/habits/user-habits-board/user-habits-board.component';
import { selectIsHabitChanged } from '../../store/habit/habit.selector';
import { GreetingsContainer } from './user-page.styles';

const UserPage = () => {
    const [date, setDate] = useState(new Date()); 
   const currentUser = useSelector(selectCurrentUser); 
   const dispatch = useDispatch();
   const isHabitschanged = useSelector(selectIsHabitChanged); 
   const getHabitsMap = async () => {

            console.log("get habgits map function"); 
        
          const habitsArray = await getHabitsfromDatabase(currentUser.email);
          console.log(habitsArray);
          dispatch(setHabits(habitsArray));
        };

    useEffect(()=> {

        currentUser && getHabitsMap();


    },[isHabitschanged, currentUser]); // in habit form submission, habits array changes 

    const arr = useSelector(selectHabitsMap); 
   


    // useEffect(() => {
    //     addCollectionAndDocuments('habits', HABIT_DATA )
    // }, []); 

   
    return (
        <div>
            this is the user page {currentUser && currentUser.email}


            <HabitForm /> 
            <UserHabitsBoard /> 

    
        </div>
    )
}; 

export default UserPage; 
