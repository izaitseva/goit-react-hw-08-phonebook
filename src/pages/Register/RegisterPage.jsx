import axios from "axios";
import { paths } from "paths";
import { useNavigate } from "react-router";
import RegisterForm from "features/RegisterForm/RegisterForm";
import Button from "features/Shared Components/Button/Button";

export const Register = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const {
            elements: { email, password, name },
        } = e.target
        console.log(email, password, name);
        axios.post('/users/signup', {
            name: name.value,
            email: email.value,
            password: password.value,
        }).then(res => {
            navigate(paths.login);
            // alert(res.data.user.name)
            localStorage.setItem('jwt', res.data.token)
        }).catch((er) => {
            const { data } = er.response
            console.log(data);
        })
    };

    return (
        <div>
            <RegisterForm />
            <Button>Register</Button>
            {/* <button className={styles.register_btn} type="submit">Register</button> */}
        </div>
    )

}