import "./App.css";

import { Route, Routes, Link, Navigate, useNavigate } from "react-router-dom";
import AddAirport from "./Components/AddAirport";
import AddFlight from "./Components/AddFlight";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Navbar from "./Components/NavBar";

const PrivateRoute = ({ isAuthenticate, children }) => {
  return isAuthenticate ? children : <Navigate to={"/login"} />;
};

function App() {
  const navigate = useNavigate();
  const isAuthenticate = true;

  return (
    <div className="App">
      {/* <AddAirport/>
      <AddFlight/>
      <Login/>
      <Home/> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route
          path="/addFlight"
          element={
            <PrivateRoute isAuthenticate={isAuthenticate}>
              <AddFlight />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/addAirport"
          element={
            <PrivateRoute isAuthenticate={isAuthenticate}>
              <AddAirport />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
