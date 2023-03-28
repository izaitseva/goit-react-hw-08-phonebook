const { useState } = require("react")

const useForm = ({ initialState, onSubmit }) => {

    const [state, setState] = useState({ ...initialState });

    const handleChange = ({ target }) => {
        setState(prevState => {
            const { name, value, checked, type } = target;
            const newValue = type === "checkbox" ? checked : value;
            console.log(newValue);
            return { ...prevState, [name]: newValue }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...state });
        setState({ ...initialState })
    }
    return { state, setState, handleChange, handleSubmit };
}

export default useForm;