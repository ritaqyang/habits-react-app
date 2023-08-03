import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectHabitsMap } from '../../../store/habit/habit.selector';


const UserHabitsBoard = () => {
  const habitsMap = useSelector(selectHabitsMap); 

  return (
    <Fragment>
      {Object.keys(habitsMap).map((habitName) => {
        const count = habitsMap[habitName];
        return (
            <>
          <div>{habitName} </div>
          <div>"count : {count}</div>
          </>
        );
      })}
    </Fragment>
  );
};

export default UserHabitsBoard;
