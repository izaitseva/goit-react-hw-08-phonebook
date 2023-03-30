import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "redux/auth/auth-operations";
import styles from "./AuthLayout.module.css"

const AuthLayout = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(current())
    }, [dispatch])

    return (
        <div className={styles.layout}>{children}</div>
    )
}

export default AuthLayout;