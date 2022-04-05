import React from "react";
import RegisterForm from "../registerForm";
import {useDispatch} from "react-redux";
import {register} from "../../../../redux/slice/userSlice";
import {unwrapResult} from "@reduxjs/toolkit";

function Register() {
    const dispatch = useDispatch()
    const handleSubmit = async (values) => {
        values.username = values.email
        try {
            const actions = register(values)
            const resultAction = await dispatch(actions)
            const user = unwrapResult(resultAction)
            console.log(user)
        }catch (error){
            console.log('error',error)
        }
    }
    return (
        <RegisterForm onSubmit={handleSubmit}/>
    )
}

export default Register