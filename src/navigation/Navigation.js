// import styles from "./Navigation.module.css"
import { useSelector } from "react-redux"
import { UserMenu } from "features/usermenu/UserMenu"
import Navbar from "./NavigationAuth/NavigationAuth"
import { isUserLogin } from "redux/auth/auth-selector"

export const Navigation = () => {

    const isLogin = useSelector(isUserLogin)

    return (

        <>
            {!isLogin &&
                <Navbar />
            }
            {isLogin &&
                <UserMenu />
            }
        </>
    )
}