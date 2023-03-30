import { Outlet } from "react-router"
import { Navigation } from "../../navigation/Navigation"
import styles from "./Main.module.css"

import { useSelector } from "react-redux"
import { getUser, isUserLogin } from "redux/auth/auth-selector"

export const Main = () => {

    const { name } = useSelector(getUser);
    const isLogin = useSelector(isUserLogin)

    return (
        <>
            {!isLogin &&
                <h1 className={`${styles.header} ${styles.auth_header}`}>Your phonebook</h1>
            }

            {isLogin &&
                <h1 className={styles.header}>
                    <span className={styles.user_name}>{name}'s </span>
                    phonebook
                </h1>
            }
            <Navigation />
            <Outlet />
        </>
    )
}