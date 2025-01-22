import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/features/hooks";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../../utils/verifyToken";
import { toast } from "sonner";

const Login = () => {
    const navigate=useNavigate();

    const dispatch= useAppDispatch();
    const { register, handleSubmit } = useForm({
        defaultValues:{
            id:'A-0001',
            password:'admin123'
        }
    });
    const [login]=useLoginMutation();
    const onSubmit = async(data:FieldValues) => {
       const toastId= toast.loading("Loging in")
       try {
        const userInfo={
            id:data.id,
            password:data.password,
        };
      const res= await login(userInfo).unwrap();    
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({user:{user},token:res.data.accessToken}));
      navigate(`/${user.role}/dashboard`);
      toast.success("Login Success",{id:toastId , duration:2000}); 
       } catch (err) {
        toast.error(`${err},Something went wrong`,{id:toastId , duration:2000})
       }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Login
                </h2>
                <div className="mb-4">
                    <label
                        htmlFor="id"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        ID
                    </label>
                    <input
                        type="text"
                        id="id"
                        {...register("id")}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter your ID"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Password
                    </label>
                    <input
                        type="text"
                        id="password"
                        {...register("password")}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter your password"
                    />
                </div>
                <Button
                    htmlType="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
                >
                    Login
                </Button>
            </form>
        </div>
    );
};

export default Login;
