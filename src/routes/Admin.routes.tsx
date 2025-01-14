import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminRoutes=[
    {
        name:'adminDashboard',
        path: "admindashboard",
        element: <AdminDashboard/>,
    },
    {
        name:'usermanagement',
        element: <AdminDashboard/>,
        children:[
            {
                name:'CreateAdmin',
                path: "create-admin",
                element: <CreateAdmin/>, 
            },
            {
                name:'CreateFaculty',
                path: "create-faculty",
                element: <CreateFaculty/>, 
            },
            {
                name:'CreateStudent',
                path: "create-student",
                element: <CreateStudent/>, 
            },
            {
                name:'CreateMember',
                path: "create-member",
                element: <CreateStudent/>, 
            },
        ]
    } 
       
 
   
]

// export const adminSideberItems=adminRoutes.reduce((acc:TsideberItem[],item)=>{
//     if (item.path && item.element) {
//         acc.push({
//             key: item.name,
//             label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//         }) 
//     }
//     if (item.children) {
//         acc.push({
//             key: item.name,
//             label: item.name,
//             children: item.children.map(child => ({
//                 key: child.name,
//                 label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//             }))
//         })
//     }
//     return acc;
// },[])

// export const adminpaths= adminRoutes.reduce((acc:Troutes[],item)=>{
//     if (item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element: item.element,
//         })
        
//     }
//     if (item.children) {
//        item.children.forEach(child=>{
//         acc.push({
//             path: child.path,
//             element: child.element,
//         })
//        })
//     }
//     return acc;
// },[])
