import {BrowserRouter as Router} from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import AllRoutes  from "./components/AllRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllQuestion } from "./actions/questions";
import { fetchAllUsers } from "./actions/users";
function App() {
  const dispatch= useDispatch();
  useEffect(() => {
    dispatch(fetchAllQuestion())
    dispatch(fetchAllUsers());
  }, [dispatch]);
  return (
    <div className="App">
    <Router> 
    <Navbar/>
    <AllRoutes/>
    </Router>   
    </div>
  );
}

export default App;
