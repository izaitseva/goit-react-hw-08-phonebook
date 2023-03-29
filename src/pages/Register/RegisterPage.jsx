import { useDispatch, useSelector } from "react-redux";
import { signup } from "redux/auth/auth-operations";
import { Navigate } from "react-router-dom";
import { isUserLogin } from "redux/auth/auth-selector";
import RegisterForm from "features/RegisterForm/RegisterForm";
import { paths } from "paths";
import styles from "./RegisterPage.module.css";

export const Register = () => {

    const isLogin = useSelector(isUserLogin);

    const dispatch = useDispatch();

    const handleSignup = (data) => {
        console.log(data);
        dispatch(signup(data));
    }

    if (isLogin) {
        return <Navigate to={paths.main} />
    }
    
    return (
        <div className={styles.container}>
            <RegisterForm onSubmit={handleSignup} />
        </div>
    )

}