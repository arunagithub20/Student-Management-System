import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home.jsx";
import StudentProfile from "./StudentProfile.jsx";
import StudentResult  from "./StudentResult.jsx";
import StudentNav from "./StudentNav";

const IndexStudent = ()=>{

const router = createBrowserRouter([
      {path: "/",element: <StudentNav />,
        
children: [
          { path: "/",         element: <Home />,},
          {path: "sprofile",   element: <StudentProfile/>},
          {path: "sresult",    element: <StudentResult/>},
          
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
export default IndexStudent;