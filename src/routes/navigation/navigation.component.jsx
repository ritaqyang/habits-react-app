
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
import InvestIcon from '../../components/investment/invest-icon/invest-icon.component';
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  NavLinkOut,
} from './navigation.styles';


const Navigation = () => {

    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    return (
      <Fragment>
        <NavigationContainer>

        <InvestIcon />


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
            <NavLink className='nav-link' to="/invest-page">
              Invest
            </NavLink>

            
            {currentUser ? (
              <NavLinkOut className='nav-link'onClick={signOutUser}>
                {' '}
                SIGN OUT{' '}
              </NavLinkOut>
            ) : (
              <NavLink className='nav-link' to='/sign-in'>
                SIGN IN
              </NavLink>
            )}

             
           
            
          </NavLinks>  
          <CartIcon /> 
        {isCartOpen && <CartDropdown />}


        </NavigationContainer>
        <Outlet />


      </Fragment>
  
    )
  }


export default Navigation; 