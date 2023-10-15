import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/common/Loading";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
   const {user,isLoading}=useAuth()
   const location=useLocation()
   console.log(location);
   if (isLoading) {
    return <Loading/>
   }
   if (user) {
    return children
   }
   return <Navigate to={'/signin'} state={{from:location}} replace></Navigate>
};

export default PrivateRoute;