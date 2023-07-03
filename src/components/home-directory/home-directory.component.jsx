
import CategoryItem from '../category-item/category-item.component';
import './home-directory.styles.css'; 

function HomeDirectory({categories}) {

 
  return (
    <div className="categories-container">

      {categories.map((category) => (
        <CategoryItem key={category.id} category={category}/>
        ))
        }
    </div>

  );
}

export default HomeDirectory;
