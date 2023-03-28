import { useDispatch } from "react-redux";
import { signup } from "redux/auth/auth-operations";
import RegisterForm from "features/RegisterForm/RegisterForm";

export const Register = () => {

    const dispatch = useDispatch();

    const handleSignup = (data) => {
        console.log(data);
        dispatch(signup(data));
    }

    return (
        <div>
            <RegisterForm onSubmit={handleSignup} />
        </div>
    )

}