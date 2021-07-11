import React, { useEffect, useState } from 'react';

const useValidate = (stateInitial, validate, fn) => {
    const [values, setValues] = useState(stateInitial);
    const [errors, setErrors] = useState({});
    const [submitForm, setSubmitForm] = useState(false);

    useEffect(() => {
        if (submitForm) {
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                fn()
                return
            }
            setSubmitForm(false)
        }
    }, [errors]);

    const handleChange = (name, value) => {
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = () => {
        const errorsValidations = validate(values);
        setErrors(errorsValidations);
        setSubmitForm(true)
    }

    return {
        values,
        errors,
        submitForm,
        handleSubmit,
        handleChange
    };
}

export default useValidate;