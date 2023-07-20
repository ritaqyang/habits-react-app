
import { Outlet, Link } from 'react-router-dom';
//yarn add react-router-dom@6
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CartDropdown from '../../components/cart/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart/cart-icon/cart-icon.component';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import './navigation.styles.jsx'; 
import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';


const Navigation = () => {

    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    return (
      <Fragment>
        <NavigationContainer>


          <NavLinks>
            <NavLink className='nav-link' to='/'>
              Home
            </NavLink>
            <NavLink className='nav-link' to='/dashboard'>
              Vision Board
            </NavLink>
            <NavLink className='nav-link' to="/user-page">
              My Page
            </NavLink>
            <NavLink className='nav-link' to="/social-page">
              Social
            </NavLink>
            {currentUser ? (
              <span className='nav-link'onClick={signOutUser}>
                {' '}
                SIGN OUT{' '}
              </span>
            ) : (
              <NavLink className='nav-link' to='/sign-in'>
                SIGN IN
              </NavLink>
            )}
            <CartIcon /> 
          </NavLinks>  
          {isCartOpen && <CartDropdown />}
          

        </NavigationContainer>
        <Outlet />
      </Fragment>
  
    )
  }


export default Navigation; 