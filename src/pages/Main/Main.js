import { Outlet } from "react-router"
import { Navigation } from "../../navigation/Navigation"
import styles from "./Main.modules.css"

import AuthLayout from "modules/Authlayout/AuthLayout"

export const Main = () => {

    return (
        <AuthLayout className={styles.main_container}>
            <Navigation />
            <Outlet />
        </AuthLayout>
    )
}