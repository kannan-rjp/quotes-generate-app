import { Navigate } from "react-router-dom";
import { useAuth } from "../service/AuthProvider";

const ProtectedRoute = ({children})=> {
    const auth = useAuth();
    if(!auth.user){
        return <Navigate to='/' />
    }
    return children;
}
export default ProtectedRoute;