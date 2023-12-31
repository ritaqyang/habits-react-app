
import React, { useState,useEffect } from 'react';
import moment from 'moment';
import { MdCheck } from 'react-icons/md';
import './calendar.styles.css';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../store/user/user.selector';
import { retrieveCompletedDays, updateCompletedHabit } from '../../../utils/firebase/firebase.utils';
import { selectIsHabitChanged } from '../../../store/habit/habit.selector';

const Calendar = ({habitName}) => {
  const [completedDays, setCompletedDays] = useState([]);
  const today = moment();
  // const month = today.month(); 
  const month = today.format('MMM'); 
  console.log("todary is : " + month); 

  const isHabitAdded = useSelector(selectIsHabitChanged); 

  const currentUser = useSelector(selectCurrentUser); 
  
  const handleDayClick = (day) => {

    const isAdding =  !completedDays.includes(day); 
    const newCompletedDays = completedDays.includes(day)
      ? completedDays.filter((completedDay) => completedDay !== day)
      : [...completedDays, day];

      

    setCompletedDays(newCompletedDays);
    //update to firebase 
    updateCompletedHabit(currentUser,habitName,newCompletedDays,isAdding);

  };

  useEffect(() => {
    //retrieve completd days from firebase 
    if (currentUser) {

      const email = currentUser.email;
      const func = async() => {
        const arrayObj = await retrieveCompletedDays(email,habitName);
        const valuesArray = Object.values(arrayObj);
        console.log("values aray :   "+ valuesArray) ;
        setCompletedDays(valuesArray); 
      }
      func(); 
      
    }
  }, [currentUser]);

  const renderCalendar = (isHabitAdded) => {
    
    const firstDayOfMonth = today.clone().startOf('month');
    const daysInMonth = today.clone().endOf('month').date();
    const firstDayOfWeek = firstDayOfMonth.day();
    console.log(isHabitAdded); 

    const calendarDays = [];
    const daysOfWeek = moment.weekdaysShort();
    daysOfWeek.forEach((day) => {
      calendarDays.push(<div key={day} className="day day-of-week">{day}</div>);
    });

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDays.push(<div key={i} className="empty-day"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isCompleted = completedDays.includes(day);

      calendarDays.push(
        <div
          //key={day}
          className={`day ${isCompleted ? 'completed' : ''}`}
          onClick={() => handleDayClick(day)}
        >
          {day}
          {isCompleted && <MdCheck className="check-icon" />}
        </div>
      );
    }

    return calendarDays;
  };


  const reportCompletedDays = () => {
    const array = []; 
    
    completedDays.forEach((day)=>{
      array.push(<div>{month} {day}</div>)
    }); 
    return array; 
  }; 



  return (
    <>
    <div className="calendar">
      {renderCalendar(isHabitAdded)}
    </div>
      
    {/* <div> {habitName} completed days: {reportCompletedDays()}</div> */}
    </>
  );
};

export default Calendar;
