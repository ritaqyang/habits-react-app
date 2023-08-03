import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectHabitsMap } from '../../../store/habit/habit.selector';
import Box from '../../tracker-box/box/Box.component';


const UserHabitsBoard = () => {
  const habitsMap = useSelector(selectHabitsMap); 

  return (
    <Fragment>
      {Object.keys(habitsMap).map((habitName) => {
        const count = habitsMap[habitName];
        const componentsArray = Array.from({ length: count }, (_, index) => (
            <Box key={index} index={index} />
          ));
        return (
            <>
          <div>{habitName} </div>
          <div> count : {count}</div>
          {componentsArray}
          </>
        );
      })}
    </Fragment>
  );
};

export default UserHabitsBoard;
