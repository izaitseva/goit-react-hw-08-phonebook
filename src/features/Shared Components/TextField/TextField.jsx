import { useMemo } from "react";
import { nanoid } from "@reduxjs/toolkit";
import styles from "./TextField.module.css";

const TextField = ({ label, handleChange, ...props }) => {

    const id = useMemo(() => nanoid(), [])

    return (
        <div>
            <label htmlFor={id} className={styles.form_text}>{label}</label>
            <input className={styles.input} onChange={handleChange} {...props} />
        </div>
    )
}

export default TextField;