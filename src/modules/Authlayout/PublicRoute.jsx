import { paths } from "paths";
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"
import { isUserLogin } from "redux/auth/auth-selector"

const PublicRoute = () => {
    const isLogin = useSelector(isUserLogin);

    if (isLogin) {
        return <Navigate to={paths.contacts} />
    }
    return <Outlet />
}

export default PublicRoute