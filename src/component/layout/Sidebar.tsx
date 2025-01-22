import { Layout, Menu } from 'antd';
import { sideberGenerator } from '../../utils/sideberGenerator';
import { adminRoutes } from '../../routes/Admin.routes';
import { facultyRoutes } from '../../routes/faculty.routes';
import { studentsRoutes } from '../../routes/student.routes';
import { useAppSelector } from '../../redux/features/hooks';
import { useCurrentUser } from '../../redux/features/auth/authSlice';
const { Sider } = Layout;

const UserRole={
    ADMIN: 'admin',
    FACULTY:'faculty',
    STUDENT:'student'
}
const Sidebar = () => {
    const users =useAppSelector(useCurrentUser);    
    let sideberItems;
    switch (users!.user!.role) {
        case UserRole.ADMIN:
            sideberItems =sideberGenerator(adminRoutes,UserRole.ADMIN)
            break;
            case UserRole.FACULTY:
            sideberItems =sideberGenerator(facultyRoutes,UserRole.FACULTY)
            break;
            case UserRole.STUDENT:
            sideberItems =sideberGenerator(studentsRoutes,UserRole.STUDENT)
            break;
    
        default:
            break;
    }
    return (
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div style={{ 
            color:'white',
            textAlign:'center',
            height:'4rem',
            display:'flex',
            justifyContent:'center',
            alignItems: 'center',
             }}>
            <h1>Uni logo</h1>
        </div>
        <Menu theme="dark" 
        mode="inline" 
        defaultSelectedKeys={['4']} 
        items={sideberItems} 
        />
      </Sider>
    );
};

export default Sidebar;