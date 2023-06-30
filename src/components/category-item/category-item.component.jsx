import './category-item.css'; 

const CategoryItem = ({category}) => {
    const { title } = category;  
    return (
        <div className='category-container'>
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>hi there :3</p>
            </div>
        </div>
    )
}

export default CategoryItem; 