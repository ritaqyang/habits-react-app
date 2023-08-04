
import React, { useState } from 'react';
import moment from 'moment';
import { MdCheck } from 'react-icons/md';
import './calendar.styles.css';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../store/user/user.selector';
import { updateCompletedHabit } from '../../../utils/firebase/firebase.utils';

const Calendar = ({habitName}) => {
  const [completedDays, setCompletedDays] = useState([]);
  const today = moment();
  // const month = today.month(); 
  const month = today.format('MMM'); 
  console.log("todary is : " + month); 

  const currentUser = useSelector(selectCurrentUser); 

  const handleDayClick = (day) => {
    const newCompletedDays = completedDays.includes(day)
      ? completedDays.filter((completedDay) => completedDay !== day)
      : [...completedDays, day];

    setCompletedDays(newCompletedDays);
    updateCompletedHabit(currentUser,habitName,newCompletedDays);
  };

  const renderCalendar = () => {
    
    const firstDayOfMonth = today.clone().startOf('month');
    const daysInMonth = today.clone().endOf('month').date();
    const firstDayOfWeek = firstDayOfMonth.day();

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
          key={day}
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
    console.log(completedDays);
    completedDays.forEach((day)=>{
      array.push(<div>{month} {day}</div>)
    }); 
    return array; 
  }; 



  return (
    <>
    <div>hi  </div>
    <div className="calendar">
      
      {renderCalendar()}
    </div>
      
    <div> completed days: {reportCompletedDays()}</div>
    </>
  );
};

export default Calendar;
