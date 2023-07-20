
import { CartIconContainer, ItemCount } from './invest-icon.styles';
import { ReactComponent as Icon } from '../../../assets/savings-svgrepo-com.svg';
import { Link } from 'react-router-dom';

const InvestIcon = () => {

  return (
    <CartIconContainer >
        <Link to="/invest-page">
            <Icon className='invest-icon' />         
        </Link> 
      
    </CartIconContainer>
  );
};

export default InvestIcon;
