import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';
import Dashboard from './routes/dashboard/dashboard.component';
import UserPage from './routes/userpage/user-page.component';
import SocialPage from './routes/social-page/social-page.component';
import Invest  from './routes/invest/invest.component';
import { setCurrentUser } from './store/user/user.reducer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      const pickedUser =
        user && (({ accessToken, email }) => ({ accessToken, email }))(user);

      console.log(setCurrentUser(pickedUser));
      dispatch(setCurrentUser(pickedUser));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path="user-page" element={<UserPage />} />
        <Route path="social-page" element={<SocialPage />} />
        <Route path="invest-page" element={<Invest />} />

      </Route>
    </Routes>
  );
};

export default App;
