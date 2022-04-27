import logo from './logo.svg';
import './App.css';

import {Route, Routes, Link, Navigate, useNavigate} from "react-router-dom";
import AddAirport from './Components/AddAirport';
import AddFlight from './Components/AddFlight';
import Login from './Components/Login';
import Home from './Components/Home';


const PrivateRoute = ({isAuthenticate, children}) => {
  return isAuthenticate ? children : <Navigate to={"/login"}/> 
}

function App() {
  const navigate = useNavigate()
  const isAuthenticate = true

  return (
    <div className="App">
      {/* <AddAirport/>
      <AddFlight/>
      <Login/>
      <Home/> */}

<Routes>
<Route path='/login' element={<Login/>}></Route>

<Route path='/' element={<Home/>}></Route>

{/* <Route path='/' element={
  <PrivateRoute isAuthenticate={isAuthenticate}><Home/></PrivateRoute>
}></Route> */}

<Route path='/addFlight' element={
  <PrivateRoute isAuthenticate={isAuthenticate}><AddFlight/></PrivateRoute>
}></Route>

<Route path='/addAirport' element={
  <PrivateRoute isAuthenticate={isAuthenticate}><AddAirport/></PrivateRoute>
}></Route>  

</Routes>
      
    </div>
  );
}

export default App;
