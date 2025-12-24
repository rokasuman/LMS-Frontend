export const validator = (password = '', confirmPassword = '') => {
    const error = []

    // Validating the password
    password.length < 6 && error.push("At least 6 characters required")
    !/[A-Z]/.test(password) && error.push("Password must contain at least one UpperCase Letter")
    !/[a-z]/.test(password) && error.push("Password must contain at least one LowerCase Letter")
    !/[0-9]/.test(password) && error.push("Password must contain at least one Number")
    !/[!@#$%^&*(){}[]]/.test(password) && error.push("Password must contain at least one Special character !@#$%^&*(){}[]")

    password !== confirmPassword && error.push("Passwords do not match")

    return error
};
