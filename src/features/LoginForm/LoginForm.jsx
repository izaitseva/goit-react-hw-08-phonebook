import useForm from "features/hooks/useForm";
import TextField from "features/Shared Components/TextField/TextField";
import Button from "features/Shared Components/Button/Button";
import initialState from "./initialState";
import fields from "./fields";

const LoginForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
    const { email, password } = state;

    return (
        <form onSubmit={handleSubmit}>
            <TextField value={email} handleChange={handleChange} {...fields.email} />
            <TextField value={password} handleChange={handleChange} {...fields.password} />
            <Button>Login</Button>
        </form>
    )
}

export default LoginForm;