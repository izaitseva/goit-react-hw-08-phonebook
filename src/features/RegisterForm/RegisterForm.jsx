import useForm from "features/hooks/useForm";
import initialState from "./initialState";
import fields from "./fields";
import TextField from "features/Shared Components/TextField/TextField";
import Button from "features/Shared Components/Button/Button";

const RegisterForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
    const { name, email, password } = state;
    return (
        <form onSubmit={handleSubmit}>
            <TextField value={name} handleChange={handleChange} {...fields.name} />
            <TextField value={email} handleChange={handleChange} {...fields.email} />
            <TextField value={password} handleChange={handleChange} {...fields.password} />
            <Button>Register</Button>
        </form>
    )
}

export default RegisterForm;