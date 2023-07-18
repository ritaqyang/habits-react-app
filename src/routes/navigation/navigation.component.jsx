
import { Outlet, Link } from 'react-router-dom';
//yarn add react-router-dom@6
import { Fragment, useContext } from 'react';
import { useSelector } from 'react-redux';

import './navigation.styles.jsx'; 
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { selectCurrentUser } from '../../store/user/user.selector';
import SmileyIcon from '../../components/smiley-face-icon/smiley-face-icon.component';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';


const Navigation = () => {

    const currentUser = useSelector(selectCurrentUser);

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
            <SmileyIcon /> 
          </NavLinks>  
          

        </NavigationContainer>
        <Outlet />
      </Fragment>
  
    )
  }


export default Navigation; 