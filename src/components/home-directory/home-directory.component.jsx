
import CategoryItem from '../category-item/category-item.component';
import './home-directory.styles.scss'; 

function HomeDirectory({categories}) {

 
  return (
    <div>
      <div className="header">hi </div>
      <div className="categories-container">

        {categories.map((category) => (
          <CategoryItem key={category.id} category={category}/>
          ))
          }
      </div>

      <a href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a>
  </div>

  );
}

export default HomeDirectory;
