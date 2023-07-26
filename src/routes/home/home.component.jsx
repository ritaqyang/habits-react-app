import { useSelector } from "react-redux";
import HomeDirectory from "../../components/home-directory/home-directory.component";
import { selectHabitsMap } from "../../store/habit/habit.selector";

import House from "../../components/spline/house.component";


function Home() {

  const categories = [
    {
      "id": 1,
      "title": "Habit Tracker",
      "info": "Go to \"my visionboard \" to see a demo on how you can check in daily with your goals and see visual result of your progress", 
    },
    {
      "id": 2,
      "title": "Reading Journal",
      "info": "Go to \"my visionboard \" to see a demo on how you can check in daily with your goals and see visual result of your progress",
    },
    {
      "id": 3,
      "title": "Budget Planner",
      "info": "Go to \"my visionboard \" to see a demo on how you can check in daily with your goals and see visual result of your progress",
    },
    {
      "id": 4,
      "title": "5-year Goals",
      "info": "Go to \"my visionboard \" to see a demo on how you can check in daily with your goals and see visual result of your progress",
    },
    {
      "id": 5,
      "title": "Daily affirmations and gratitude ",
      "info": "Go to \"my visionboard \" to see a demo on how you can check in daily with your goals and see visual result of your progress",
    }
  ]

  // const habitsArray = useSelector(selectHabitsMap); 
  
  
  return (
    <div>
      

      <HomeDirectory categories={categories}/> 
     
      {/* {Object.keys(habitsArray).map((title) => {return <div>{title}</div>})};  */}
      
     
    </div>

  );
}

export default Home;
