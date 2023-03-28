const fields = {

    name: {
        type: "text",
        required: true,
        name: "name",
        placeholder: "create your username",
        label: "User name:",
    },

    email: {
        type: "email",
        required: true,
        name: "email",
        placeholder: "type your email",
        label: "Email:",
    },

    password: {
        type: "password",
        required: true,
        name: "password",
        placeholder: "create your password",
        label: "Password:",
    }
 }

export default fields;