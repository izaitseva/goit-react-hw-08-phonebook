import useForm from "features/hooks/useForm";
import initialState from "./initialState";
import styles from "./RegisterForm.module.css";
import fields from "./fields";
import TextField from "features/SharedComponents/TextField/TextField";
import Button from "features/SharedComponents/Button/Button";

const RegisterForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
    const { name, email, password } = state;

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <TextField value={name} handleChange={handleChange} {...fields.name} />
            <TextField value={email} handleChange={handleChange} {...fields.email} />
            <TextField value={password} handleChange={handleChange} {...fields.password} />
            <div className={styles.btn_div}>
                <Button>Register</Button>
            </div>
        </form>
    )
}

export default RegisterForm;