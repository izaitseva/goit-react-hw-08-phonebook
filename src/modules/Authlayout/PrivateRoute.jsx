import { paths } from "paths";
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"
import { getAuth } from "redux/auth/auth-selector"

const PrivateRoute = () => {
    const { isLogin, token } = useSelector(getAuth);

    if (!isLogin && token) {
        return <p>...Loading...</p>
    }

    if (!isLogin && !token) {
        return <Navigate to={paths.login} />
    }

    return <Outlet />
}

export default PrivateRoute