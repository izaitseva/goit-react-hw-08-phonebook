import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { paths } from "paths";
import { getUser } from "redux/auth/auth-selector";
import { logout } from "redux/auth/auth-operations";
import styles from "./UserMenu.module.css";

export const UserMenu = () => {

    const { name } = useSelector(getUser);
    const dispatch = useDispatch();

    const onLogOut = () => {
        dispatch(logout());
    }

    return (
        <div>
            <div className={styles.user_menu}>
                <NavLink className={styles.link} to={paths.contacts}>Contacts</NavLink>
                <p className={styles.user_name}>{name}</p>
                <NavLink to={paths.main}>
                    <button className={styles.logout_btn} onClick={onLogOut}>Logout</button>
                </NavLink>
            </div>
        </div>
    )
}