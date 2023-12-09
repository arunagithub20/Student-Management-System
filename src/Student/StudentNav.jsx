import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";


const StudentNav = () => {
  const logout = () => {
    axios
      .post("http://localhost/project/20it0494/backend/logout.php")
      .then(function (response) {
        console.log(response.data);
        if (response.data === "fine") {
          document.cookie = "";
          localStorage.clear();
          window.location = "http://localhost:3000/";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
    
    <li class="nav-item">
    <Link  class="nav-item nav-link" to="/sresult"><b><u>MY PROGRESS</u></b></Link>
    </li>
    <li class="nav-item">
    <Link  class="nav-item nav-link" to="/sprofile"><b><u>MY PROFILE</u></b></Link>
    </li>
    <li class="nav-item">
    
    <Link class="nav-item nav-link " onClick={()=>logout()} ><b><u>LOGOUT</u></b></Link>
    </li>
     <li class="nav-item ">
    <span  style={{fontSize:"25px", marginLeft: "350px" }} ><b>Helllo My Student</b> {localStorage.getItem('Name')}!</span>
    </li>
   </ul>
</div>
</nav>

        <Outlet />
    </div>
);
}

export default StudentNav;