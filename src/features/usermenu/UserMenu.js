import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { paths } from "paths";
import { getUser } from "redux/auth/auth-selector";

import styles from "./UserMenu.module.css"

export const UserMenu = () => {

    const { name } = useSelector(getUser);

    return (
        <div>
            <div className={styles.user_menu}>
                <NavLink className={styles.link} to={paths.main}>Contacts</NavLink>
                <p>{name}</p>
                <button className={styles.logout_btn}>Logout</button>
            </div>
        </div>
    )
}