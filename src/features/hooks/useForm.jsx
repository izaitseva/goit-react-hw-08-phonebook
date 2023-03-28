const { useState } = require("react")

const useForm = ({ initialState, onsubmit }) => {

    const [state, setState] = useState({ ...initialState });

    const handleChange = ({ target }) => {
        setState(prevState => {
            const { name, value, checked, type } = target;
            const newValue = type === "checkbox" ? checked : value;

            return { ...prevState, [name]: newValue }
        })
    }

    const handleSubmit = (e) => {
        e.prevent.default();
        onsubmit({ ...state });
        setState({ ...initialState })
    }
    return { state, setState, handleChange, handleSubmit };
}

export default useForm;