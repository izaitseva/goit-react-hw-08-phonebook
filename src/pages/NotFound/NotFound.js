import { NavLink } from "react-router-dom";
import { paths } from "paths";
import styles from "./NotFound.module.css";
import notfound from "./notfound.svg"
import Button from "features/SharedComponents/Button/Button";

export default function NotFound() {

    return (
        <>
            <div className={styles.bg}>
                <NavLink className={styles.gohome_link} to={paths.contacts}>
                    <Button className={styles.gohome_btn}>
                        На головну
                    </Button>
                </NavLink>
                <img className={styles.img} src={notfound} alt="what?"></img>
            </div >
        </>
    )
}