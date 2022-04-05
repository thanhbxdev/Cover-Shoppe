import React, {useState} from "react";
import {FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import {Controller} from "react-hook-form"
import PropTypes from 'prop-types';
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";

PasswordField.prototype = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool
}

function PasswordField({name, label, form, disabled}) {
    const {errors} = form
    const hasError = errors[name]
    const [show, setShow] = useState(false);


    const handleClickShowPassword = () => {
        setShow(prev => !prev);
    };

    return (
        <FormControl variant="outlined" fullWidth margin="normal" error={!!hasError}>
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Controller
                name={name}
                control={form.control}
                as={OutlinedInput}
                id={name}
                type={show ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {show ? <VisibilityOff/> : <Visibility/>}
                        </IconButton>
                    </InputAdornment>
                }
                label={label}
                disabled={disabled}
            />
            <FormHelperText>
                {hasError?.message}
            </FormHelperText>
        </FormControl>
    )
}

export default PasswordField