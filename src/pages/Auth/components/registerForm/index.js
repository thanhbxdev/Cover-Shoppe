import React from "react";
import InputField from "../../../../components/Form/InputField";
import PropTypes from 'prop-types';
import * as yup from "yup"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Avatar, Button, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles"
import {LockOutlined} from "@mui/icons-material";

RegisterForm.prototype = {
    onSubmit: PropTypes.func
}
const useStyles = makeStyles(theme => ({
    root: {
        // paddingTop: theme.spacing(2)
    },
    avatar: {},
    title: {},
}))

function RegisterForm({onSubmit}) {
    const classes = useStyles()
    const schema = yup.object().shape({
        fullName: yup.string()
            .required('Nhập tên đầy đủ !')
            .min(5, 'Tên tối thiểu 5 kí tự !'),

    })
    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(schema)
    })
    const handleSubmit = (values) => {
        onSubmit(values)
        form.reset()
    }
    return (
        <div className={classes.root}>
            <Avatar className={classes.avatar}>
                <LockOutlined/>
            </Avatar>
            <Typography component="h3" variant="h5" className={classes.title}>
                Tạo tài khoản
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField form={form} name="fullName" label="Họ và tên"/>
                <InputField form={form} name="email" label="Email"/>
                <InputField form={form} name="password" label="Mật khẩu"/>
                <InputField form={form} name="retypePassword" label="Nhập lại mật khẩu"/>
                <Button variant="contained" color="primary">
                    Đăng kí
                </Button>
            </form>
        </div>
    )
}

export default RegisterForm