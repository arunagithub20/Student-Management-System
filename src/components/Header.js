import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import './Header.css'


function Header(){
    return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <Link to="/" class="nav-item nav-link active">Home</Link>
      </li>
      <li class="nav-item">
      <Link to="/login" class="nav-item nav-link">Login</Link>
      </li>
      <li class="nav-item">
      <Link to="/register" class="nav-item nav-link">Register</Link>
      </li>
      <li class="nav-item">
      <Link to="/logout" class="nav-item nav-link">Logout</Link>
      </li>
    </ul>
  </div>
</nav>
</div>
    )
}
export default Header;