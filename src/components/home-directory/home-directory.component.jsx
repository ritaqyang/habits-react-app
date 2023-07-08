
import CategoryItem from '../category-item/category-item.component';
import './home-directory.styles.scss'; 

function HomeDirectory({categories}) {

 
  return (
    <div>
      <div className="header">

        <div className="header__text-box">
          <div className="header--primary">Slayyyyy</div>
          <div className="header--secondary">One day at a time</div>
        </div>
        
        
      </div>
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
