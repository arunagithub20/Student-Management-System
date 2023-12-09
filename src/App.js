import './App.css';

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigate from "./components/Navigate";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Student from "./Student/Student.jsx";
import IndexTeacher from "./Teacher/Teacher.jsx";
import Welcome from './components/Welcome';

function App() {
  
  if (localStorage.getItem("Role") === "student" && document.cookie) {
    return (
      <div>
        {console.log(localStorage.getItem('Role'))}
        <Student />
      </div>
    );
  } else if (localStorage.getItem("Role") === "teacher" && document.cookie) {
    return (
      <div>
        {console.log(localStorage.getItem('Role'))}
        <IndexTeacher />
      </div>
    );
  } else {
    const router = createBrowserRouter([
    {
      path: "/",element: <Navigate />,
      children: [
        {
          path: "/",
          element: <Welcome />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
  ]);
  return (
    <div>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
  }


}

export default App;
