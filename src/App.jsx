import {Routes,Route} from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar1";
import Dashboard from "./pages/Dashboard";
import {Feed }from "./pages/Feed";
import { Learningpath } from "./components/Learningpath";
import  Feedback from "./components/Feedback"

import Learning from "./pages/Learning";






function App() {
  return (
    <div id="container">
      
      <Navbar/>
      <div className="kognics-image">
         <img className="logo-image" src="logokognics.png" alt="" /> 
      </div>
      
    <Routes >
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/Learningpath" element={<Learningpath/>}/>
        <Route path="/Feedback"element={<Feedback/>}/>
        <Route path="/Learning"element={<Learning/>}/>

        
       

    </Routes>

     
     
      
     
      </div>
  );
}

export default App;
