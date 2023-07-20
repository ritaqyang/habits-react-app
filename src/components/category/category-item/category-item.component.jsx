import './category-item.styles.scss'; 

const CategoryItem = ({category}) => {
    const { title, info } = category;  
    return (
        <div className='category-container'>
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>{info}</p>
            </div>
        </div>
    )
}

export default CategoryItem; 