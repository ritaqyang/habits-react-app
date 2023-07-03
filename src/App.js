import HomeDirectory from "./components/home-directory/home-directory.component";


function App() {

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
  return (
    <div>
      <HomeDirectory categories={categories} />
    </div>

  );
}

export default App;
