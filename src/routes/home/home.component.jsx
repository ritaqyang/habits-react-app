import { useSelector } from "react-redux";
import HomeDirectory from "../../components/home-directory/home-directory.component";
import { selectHabitsMap } from "../../store/habit/habit.selector";
import { CategoryContainer, Container } from "./home.styles";

import CardComponent from "../../components/card/card.component";

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

      <Container>
        
          <CardComponent title="Another Title">
            <p>This is the main content of the card.</p>
            <p>Additional content line.</p>
            <p>Special Info Highlight</p>
          </CardComponent>

          <CardComponent title="Another Title">
            <p>This is the main content of the card.</p>
            <p>Additional content line.</p>
            <p>Special Info Highlight</p>
          </CardComponent>



        

      </Container>
      

     
     
      {/* {Object.keys(habitsArray).map((title) => {return <div>{title}</div>})};  */}
      
     
    </div>

  );
}

export default Home;
