const regexForEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validator = (data) => {
    let err = {};

    //email validation
    if (!data.email.trim()) {
        err.email = "Email is required!";

    } else if (!regexForEmail.test(data.email)) {
        err.email = "Email is not in valid format!"
    }

    //password validation
    if (!data.password.trim()) {
        err.password = "Password is required!";

    } else if (data.password.length < 8) {
        err.password = "Password is to short, less than 8 charecters!"
    }

    return err;
}

export default validator;