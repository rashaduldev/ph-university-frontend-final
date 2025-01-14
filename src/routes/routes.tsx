import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/layout/MainLayout";
import About from "../pages/About";
import { routeGenerator } from "../utils/routesGenerator";
import { adminRoutes } from "./Admin.routes";
import { facultyRoutes } from "./faculty.routes";
import { studentsRoutes } from "./student.routes";

export const router= createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                path: "about",
                element: <About/>, 
            },
        ]
      },
      {
        path: "/admin",
        element: <MainLayout/>,
        children:routeGenerator(adminRoutes)
      },
      {
        path: "/faculty",
        element: <MainLayout/>,
        children:routeGenerator(facultyRoutes)
      },
      {
        path: "/student",
        element: <MainLayout/>,
        children:routeGenerator(studentsRoutes)
      },
])