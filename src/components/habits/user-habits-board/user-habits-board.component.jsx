import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectHabitsMap } from '../../../store/habit/habit.selector';
import Box from '../../tracker-box/box/Box.component';
import Calendar from '../calendar/calendar.component';
import { BigContainer, CalendarContainer, CalendarsContainer, NameContainer } from './user-habits-board.styles';

const UserHabitsBoard = () => {
  const habitsMap = useSelector(selectHabitsMap); 

  return (
    <Fragment>
      <BigContainer>
        <CalendarsContainer>
          {habitsMap && Object.keys(habitsMap).map((habitName) => {
        
        return (
            <CalendarContainer>
          <NameContainer>{habitName} </NameContainer>
          <Calendar habitName={habitName}/>
          </CalendarContainer>
        );
      })}
        </CalendarsContainer>
        
      </BigContainer>

      
    </Fragment>
  );
};

export default UserHabitsBoard;
