import { paths } from "paths";
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"
import { isUserLogin } from "redux/auth/auth-selector"

const PrivateRoute = () => {
    const isLogin = useSelector(isUserLogin);

    if(!isLogin) {
        return <Navigate to={paths.login}/>
    }
    <Outlet/>
}

export default PrivateRoute