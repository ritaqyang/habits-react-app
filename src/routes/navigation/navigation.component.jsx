
import { Outlet, Link } from 'react-router-dom';
//yarn add react-router-dom@6
import { Fragment, useContext } from 'react';
import './navigation.styles.scss'; 
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import SmileyIcon from '../../components/smiley-face-icon/smiley-face-icon.component';


const Navigation = () => {

    const { currentUser, setCurrentUser} = useContext(UserContext); 
    const signOutHandler = async () => {
      await signOutUser();
      setCurrentUser(null);
    };

    return (
      <Fragment>
        <div className='navigation'>
          
          <div className='nav-links-container'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
            <Link className='nav-link' to='/dashboard'>
              My Dashboard
            </Link>
            {currentUser ? (
              <span className='nav-link'onClick={signOutHandler}>
                {' '}
                SIGN OUT{' '}
              </span>
            ) : (
              <Link className='nav-link' to='/sign-in'>
                SIGN IN
              </Link>
            )}
          </div>  
          <SmileyIcon /> 

        </div>
        <Outlet />
      </Fragment>
  
    )
  }


export default Navigation; 