import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { paths } from "paths";
import { getUser } from "redux/auth/auth-selector";

import styles from "./UserMenu.module.css"
import Button from "features/Shared Components/Button/Button";

export const UserMenu = () => {

    const { name } = useSelector(getUser);

    const handlerLogOut = () => {
        
    }

    return (
        <div>
            <div className={styles.user_menu}>
                <NavLink className={styles.link} to={paths.main}>Contacts</NavLink>
                <p>{name}</p>
                <Button onClick={handlerLogOut}>Logout</Button>
            </div>
        </div>
    )
}