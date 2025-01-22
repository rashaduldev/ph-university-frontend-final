import { createBrowserRouter } from "react-router-dom";
import { routeGenerator } from "../utils/routesGenerator";
import { adminRoutes } from "./Admin.routes";
import { facultyRoutes } from "./faculty.routes";
import { studentsRoutes } from "./student.routes";
import Login from "../pages/login/Login";
import App from "../App";

export const router= createBrowserRouter([
    {
        path: "/",
        element: <App/>,
      },
      {
        path: "/login",
        element: <Login/>, 
    },
      {
        path: "/admin",
        element: <App/>,
        children:routeGenerator(adminRoutes)
      },
      {
        path: "/faculty",
        element: <App/>,
        children:routeGenerator(facultyRoutes)
      },
      {
        path: "/student",
        element: <App/>,
        children:routeGenerator(studentsRoutes)
      },
])