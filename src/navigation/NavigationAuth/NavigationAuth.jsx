import { paths } from "paths"
import { NavLink } from "react-router-dom"
import styles from "./NavigationAuth.module.css"

const Navbar = () => {

    return (
        <div className={styles.navAuth}>
            <NavLink to={paths.register} className={styles.link}>Register</NavLink>
            <NavLink to={paths.login} className={styles.link}>Login</NavLink>
        </div>
    )
}

export default Navbar