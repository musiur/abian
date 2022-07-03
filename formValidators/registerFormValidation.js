
//all regex's
const regexForEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexForName = /^[a-zA-Z ]{2,30}$/;


//main validator
const validator = (data) => {
    let err = {};

    //name validation
    if (!data.username.trim()) {
        err.username = "Username is required!";
    } else if (!regexForName.test(data.username)) {
        err.username = "Username is in invalid format"
    }

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