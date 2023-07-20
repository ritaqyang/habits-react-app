import { useSelector } from "react-redux";
import HomeDirectory from "../../components/home-directory/home-directory.component";
import { selectHabitsMap } from "../../store/habit/habit.selector";




function Home() {

  const categories = [
    {
      "id": 1,
      "title": "Habit Tracker",
    },
    {
      "id": 2,
      "title": "Reading Journal",
    },
    {
      "id": 3,
      "title": "Budget Planner",
    },
    {
      "id": 4,
      "title": "5-year Goals",
    },
    {
      "id": 5,
      "title": "Daily affirmations and gratitude ",
    }
  ]

  const habitsArray = useSelector(selectHabitsMap); 
  
  
  return (
    <div>
      
     
      {Object.keys(habitsArray).map((title) => {return <div>{title}</div>})}; 
      
     
    </div>

  );
}

export default Home;
