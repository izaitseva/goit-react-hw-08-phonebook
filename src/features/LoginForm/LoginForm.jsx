import useForm from "features/hooks/useForm";
import initialState from "./initialState";
import fields from "./fields";
import styles from "./LoginForm.module.css";
import TextField from "features/SharedComponents/TextField/TextField";
import Button from "features/SharedComponents/Button/Button";

const LoginForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
    const { email, password } = state;

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <TextField value={email} handleChange={handleChange} {...fields.email} />
            <TextField value={password} handleChange={handleChange} {...fields.password} />
            <div className={styles.btn_div}>
                <Button>Login</Button>
            </div>
        </form>
    )
}

export default LoginForm;