import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/layout/MainLayout";
import About from "../pages/About";
import { adminpaths } from "./Admin.routes";

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
        children:adminpaths
      },
      {
        path: "/faculty",
        element: <MainLayout/>,
        children:adminpaths
      },
      {
        path: "/student",
        element: <MainLayout/>,
        children:adminpaths
      },
])