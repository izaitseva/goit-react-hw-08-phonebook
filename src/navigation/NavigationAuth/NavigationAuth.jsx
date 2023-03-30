import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { paths } from "paths"

import { NavLink } from "react-router-dom"
import styles from "./NavigationAuth.module.css"

import { isUserLogin } from "redux/auth/auth-selector"
import { useState } from 'react';

const Navbar = () => {

    const isLogin = useSelector(isUserLogin);
    // const [showNotification, setShowNotification] = useState(false);

    const handleLinkClick = () => {
        if (!isLogin) {
            // setShowNotification(true);
            Notiflix.Notify.info('Вам треба залогінитись або зареєструватись');
        }
    }

    return (
        <div className={styles.navAuth}>
            {!isLogin && (
                <NavLink onClick={handleLinkClick} to={paths.contacts} className={styles.link}>Contacts</NavLink>
            )
            }
            <>
                <NavLink to={paths.login} className={styles.link}>Login</NavLink>
                <NavLink to={paths.register} className={styles.link}>Register</NavLink>
            </>
        </div >
    )
}

export default Navbar