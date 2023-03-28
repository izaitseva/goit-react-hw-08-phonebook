import useForm from "features/hooks/useForm";
import initialState from "./initialState";
import fields from "./fields";
import TextField from "features/Shared Components/TextField/TextField";

const RegisterForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });

    return (
        <form onSubmit={handleSubmit}>
            <TextField handleChange={handleChange} {...fields.name} />
            <TextField {...fields.email} />
            <TextField {...fields.password} />
        </form>
    )
}

export default RegisterForm;