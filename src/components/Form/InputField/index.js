import React from "react";
import {TextField} from "@mui/material";
import {Controller} from "react-hook-form"
import PropTypes from 'prop-types';

InputField.prototype = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool
}

function InputField({name, label, form, disabled}) {
    const {errors} = form
    const hasError = errors[name]
    return (
        <Controller
            name={name}
            control={form.control}
            as={TextField}

            variant="outlined"
            margin="normal"
            fullWidth
            label={label}
            disabled={disabled}

            error={!!hasError}
            helperText={hasError?.message}
        />
    )
}

export default InputField