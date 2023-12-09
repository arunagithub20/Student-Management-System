import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './Welcome.css';
const Welcome=()=>{
    return(
    <div>
        <div class="Mhead">
            
        <h1><u>STUDENT MANAGEMENT SYSTEM</u></h1>
        </div>
    <div class="main">
        <div class="content">
        <h2><b>WELCOME HOME!..</b></h2>
        <Link to="/login" class="btn">Login</Link><br/>
        <Link to="/register" class="btn">Register</Link> 

       
          
    </div>
    </div>  <h3><center><b><u>“A little progress of each day adds up to big results.”</u></b></center></h3>
    </div>
    
    )
}
export default Welcome;

//  <Link to="/logout" class="btn">Logout</Link>  