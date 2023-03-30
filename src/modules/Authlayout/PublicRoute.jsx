import { paths } from "paths";
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"
import { getAuth } from "redux/auth/auth-selector"

const PublicRoute = () => {
    const { isLogin, token } = useSelector(getAuth);

    if (!isLogin && token) {
        return <p>...Loading</p>
    }

    if (isLogin) {
        return <Navigate to={paths.contacts} />
    }
    return <Outlet />
}

export default PublicRoute;