import { BigContainer } from "./category-item.styles";


const CategoryItem = ({category}) => {
    const { title, info } = category;  
    return (
        <>
        <BigContainer>
             <h2>{title}</h2>
                <p>{info}</p>
        </BigContainer>
               
                </>
           
    )
}

export default CategoryItem; 