import React from 'react';
import { Outlet, Link } from "react-router-dom";

function Navigate() {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
        <li class="nav-item active">
        <Link to="/" class="nav-item nav-link active"><h5><u><b>Home</b></u></h5></Link>
        </li>
        <li class="nav-item">
        <Link to="/login" class="nav-item nav-link"><h5><u><b>Login</b></u></h5></Link>
        </li>
        <li class="nav-item">
        <Link to="/register" class="nav-item nav-link"><h5><u><b>Register</b></u></h5></Link>
        </li>
       </ul>
  </div>
</nav>

            <Outlet />
        </div>
    );
}

export default Navigate;