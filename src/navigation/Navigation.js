// import styles from "./Navigation.module.css"
import { useSelector } from "react-redux"
import { isUserLogin } from "redux/auth/auth-selector"
import { UserMenu } from "features/usermenu/UserMenu"
import Navbar from "./NavigationAuth/NavigationAuth"

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