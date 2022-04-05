import React from "react";
import InputField from "../../../../components/Form/InputField";
import PropTypes from 'prop-types';
import * as yup from "yup"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Avatar, Button, LinearProgress, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles"
import {LockOutlined} from "@mui/icons-material";
import PasswordField from "../../../../components/Form/PasswordField";

RegisterForm.prototype = {
    onSubmit: PropTypes.func
}
const useStyles = makeStyles({
    root: {
        position: "relative",
        paddingTop: "5% !important",
    },
    avatar: {
        margin: "0 auto !important",
        backgroundColor: "rgb(252,87,49) !important"
    },
    title: {
        marginTop: "1% !important",
        textAlign: "center !important",
        textTransform: "capitalize !important"
    },
    btnSubmit: {
        marginTop: "2% !important"
    }

});

function RegisterForm({onSubmit}) {
    const classes = useStyles();
    const schema = yup.object().shape({
        fullName: yup.string()
            .required('Nhập tên đầy đủ !')
            .test('Sử dụng hàm ', 'Tên của bạn ít nhất 2 từ', (values) => {
                return values.split(' ').length >= 2
            }),
        email: yup.string()
            .required('Nhập Email !')
            .email('Email không hợp lệ !'),
        password: yup.string()
            .required('Mật khẩu không được để trống !')
            .min(6, 'Mật khẩu tối thiểu 6 kí tự'),
        retypePassword: yup.string()
            .required('Bạn chưa nhập lại mật khẩu')
            .oneOf([yup.ref('password')], 'Mật khẩu nhập lại không đúng !')
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
    const {isSubmitting} = form.formState
    const handleSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values)
        }
        form.reset()
    }
    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress/>}
            <Avatar className={classes.avatar}>
                <LockOutlined/>
            </Avatar>
            <Typography component="h3" variant="h5" className={classes.title}>
                Đăng ký
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField form={form} name="fullName" label="Họ và tên"/>
                <InputField form={form} name="email" label="Email"/>
                <PasswordField form={form} name="password" label="Mật khẩu"/>
                <PasswordField form={form} name="retypePassword" label="Nhập lại mật khẩu"/>
                <Button variant="contained" color="primary" fullWidth className={classes.btnSubmit} type={"submit"}
                        disabled={isSubmitting}>
                    Đăng kí
                </Button>
            </form>
        </div>
    )
}

export default RegisterForm