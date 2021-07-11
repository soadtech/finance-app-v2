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
            }
            setSubmitForm(false)
        }
    }, [errors]);

    const handleChange = (name, value) => {
        const errorsValidations = validate(values);
        const noErrors = Object.keys(errorsValidations).length === 0;
        if (noErrors) {
            setSubmitForm(true)
        } else {
            setSubmitForm(false)
        }
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