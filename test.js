const adminRoutes2=[
    {
        name:'Dashboard',
        path: "/admin/dashboard",
        element: "<AdminDashboard/>", 
        children:[
            {   
                name:'CreateAdmin',
                path: "/admin/create-admin",
                element: "<CreateAdmin/>", 
            },
            {
                name:'CreateFaculty',
                path: "/admin/create-faculty",
                element: "<CreateFaculty/>", 
            },
            {
                name:'CreateStudent',
                path: "/admin/create-student",
                element: "<CreateStudent/>", 
            },
        ]
    },
   
]

const newArray= adminRoutes2.reduce((acc,item)=>{
    if (item.path && item.element) {
        acc.push({
            path: item.path,
            element: item.element,
        })
        
    }
    if (item.children) {
       item.children.forEach(child=>{
        acc.push({
            path: child.path,
            element: child.element,
        })
       })
    }
    return acc;
},[])

console.log(newArray)