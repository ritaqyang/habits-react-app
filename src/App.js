import Home from "./routes/home/home.component";
import Dashboard from "./routes/dashboard/dashboard.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Navigation from "./routes/navigation/navigation.component";
import { UserContext } from "./context/user.context";
import { useContext } from "react";
import { Routes, Route } from 'react-router-dom';
import './sass/main.scss'; 


function App() {
  const { currentUser } = useContext(UserContext);
  
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
