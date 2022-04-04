import React from "react";
import RegisterForm from "../registerForm";

function Register() {
    const handleSubmit = (values) => {
        console.log('Form Submit', values)
    }
    return (
        <RegisterForm onSubmit={handleSubmit}/>
    )
}

export default Register