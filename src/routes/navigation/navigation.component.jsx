
import { Outlet, Link } from 'react-router-dom';
//yarn add react-router-dom@6
import { Fragment } from 'react';
import './navigation.styles.css'; 



const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
          
          <div className='nav-links-container'>
            <Link className='nav-link' to='/dashboard'>
              My Dashboard
            </Link>
          </div>
          <div className='nav-links-container'>
            <Link className='sign-in-link' to='/sign-in'>
              Sign In
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
  
    )
  }


export default Navigation; 