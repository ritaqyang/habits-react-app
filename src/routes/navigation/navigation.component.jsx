
import { Outlet, Link } from 'react-router-dom';
//yarn add react-router-dom@6
import { Fragment, useContext } from 'react';
import './navigation.styles.jsx'; 
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import SmileyIcon from '../../components/smiley-face-icon/smiley-face-icon.component';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';


const Navigation = () => {

    const { currentUser, setCurrentUser} = useContext(UserContext); 
    const signOutHandler = async () => {
      await signOutUser();
      setCurrentUser(null);
    };

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
            {currentUser ? (
              <span className='nav-link'onClick={signOutHandler}>
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