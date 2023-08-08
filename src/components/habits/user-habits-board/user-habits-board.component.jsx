import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectHabitsMap } from '../../../store/habit/habit.selector';
import Box from '../../tracker-box/box/Box.component';
import Calendar from '../calendar/calendar.component';

const UserHabitsBoard = () => {
  const habitsMap = useSelector(selectHabitsMap); 

  return (
    <Fragment>

      {habitsMap && Object.keys(habitsMap).map((habitName) => {
        
        return (
            <>
          <div>{habitName} </div>
          <Calendar habitName={habitName}/>
          </>
        );
      })}
    </Fragment>
  );
};

export default UserHabitsBoard;
