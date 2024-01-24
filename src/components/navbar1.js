import { NavLink } from "react-router-dom"


function Navbar(){

  
    return(<>
    <div className="navbar">

<div id="leftbar">
  <img src="Kognics.png" alt="" />
  {/* <img
    src="https://kognics.ai/wp-content/themes/spark-multipurpose/assets/images/Homepage/kognics-icon.svg"
    alt=""
  />  */}
</div>

<div id="middlebar">
  <ul>

    <li><NavLink to="/dashboard" >Dashboard</NavLink></li>
    <li><NavLink to="/feed"> Feed</NavLink></li>
      <li><a href="#">Assests</a></li>
    <li><a href="#">Courses</a></li> 
    <li><NavLink to="/Learningpath" >Learning path</NavLink></li>

    

     <li><a href="#">Insights</a></li>
     <li><NavLink to="/Feedback" >Feedback</NavLink></li> 

     {/* <NavLink to="/Learning">on going Learning</NavLink> */}
    
  </ul>
</div>


<div id="rightbar">
  <ul>
    <li><img src="icon1.png" alt="" /></li>
    <li><img src="icon2.png" alt="" /></li>
    <li><img src="icon3.png" alt="" /></li>
    <li><img src="icon4.png" alt="" /></li>
  </ul>
</div>




</div>

    </>)

}
export default Navbar
