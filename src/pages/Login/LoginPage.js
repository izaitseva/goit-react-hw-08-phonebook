import { useDispatch, useSelector } from "react-redux";
import { login } from "redux/auth/auth-operations";
import { isUserLogin } from "redux/auth/auth-selector";
import { Navigate } from "react-router-dom";
import { paths } from "paths";
import LoginForm from "features/LoginForm/LoginForm";

function Login() {

    const isLogin = useSelector(isUserLogin);
    const dispatch = useDispatch();

    const handleLogin = (data) => {
        console.log(data);
        dispatch(login(data));
    }

    if (isLogin) {
        return <Navigate to={paths.contacts} />
    }

    return (
        <div>
            <LoginForm onSubmit={handleLogin} />
        </div>
    );
}

export default Login;