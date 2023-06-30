
import CategoryItem from "./components/category-item/category-item.component";

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
      "title": "3-month and 5-year Goals",
    },
    {
      "id": 5,
      "title": "daily affirmations and gratitude ",
    }
  ]
  return (
    <div>
      <h1>hello</h1>
      {categories.map((category) => <CategoryItem key={category.id} category={category}/>)}
    </div>

  );
}

export default App;
