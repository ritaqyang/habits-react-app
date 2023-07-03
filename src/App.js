import Home from "./routes/home/home.component";
import Dashboard from "./routes/dashboard/dashboard.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Navigation from "./routes/navigation/navigation.component";

import { Routes, Route, Outlet, Link } from 'react-router-dom';


function App() {

  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='sign-in' element={<SignIn />} />

      </Route>
  </Routes>
  );
}

export default App;
