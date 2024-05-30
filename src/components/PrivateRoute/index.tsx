import { Navigate } from "react-router-dom";
import * as authService from "../../services/auth-service";

type Props = {
    children: JSX.Element;
}

export function PrivateRoute({children}: Props){
    return !authService.isAuthenticated() ? <Navigate to="/login"/> : children;
}

