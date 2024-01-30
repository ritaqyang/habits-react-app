import React from 'react';
import { Card , Heading} from './card.styles';


const CardComponent = ({ title, children }) => {
    return (

        <Card>
            <Heading>{title}</Heading>
            {children}
        </Card>
        
    );
};


export default CardComponent;
