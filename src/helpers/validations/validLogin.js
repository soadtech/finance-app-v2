export default function validateLogin (values) {
    let errors = {}

    if (!values.email) {
        errors.email = 'El email es obligatorio';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Email no valido'
    }

    if (!values.password) {
        errors.password = 'La password es obligatoria'
    }

    return errors
}