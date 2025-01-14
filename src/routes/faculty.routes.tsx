import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferedCource from "../pages/faculty/OfferedCource";

export const facultyRoutes=[
    {
        name:'dashboard',
        path: "dashboard",
        element: <FacultyDashboard/>,
    },
    {
        name:'Offered Cource',
        path: "offered-Cource",
        element: <OfferedCource/>,  
    }
       
 
   
]