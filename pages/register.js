import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import validator from "../formValidators/registerFormValidation";
import FormStyles from "../styles/modules/form.module.scss";

const Register = () => {
  // form handler
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(formData);
  // message handler
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState(false);
  const [regBtnText, setRegBtnText] = useState("Register");
  // route handler
  const [adminReg, setAdminReg] = useState(false);
  const router = useRouter();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(validator(formData));
  };

  useEffect(() => {
    if (Object.keys(errorMessage).length === 0) {
      //api
      const { username, email, password, confirm_password } = formData;
      const userdata = { username, email, password, confirm_password };

      if (password === confirm_password && password.length >= 8) {
        const fetchAPI = async () => {
          console.log("Click porse");
          try {
            const res = await axios.post(
              `http://localhost:9000/auth/${adminReg ? "admin-" : ""}register`,
              userdata
            );
            if (res.status === 200) {
              setMessage("You have successfully registered an account!");
              setMessageType(true);
              setShowMessage(true);
              router.push("/login");
            } else {
              SomethingWentWrong();
            }
          } catch (err) {
            SomethingWentWrong(err);
          }
        };
        fetchAPI();
      } else {
        SomethingWentWrong("Recheck your password!");
      }
    } else {
      console.log("Shomossha boss!");
    }
  }, [errorMessage]);

  const SomethingWentWrong = (message) => {
    setMessage(message ? message : "Something went wrong!");
    setMessageType(false);
    setShowMessage(true);
  };

  return (
    <div className={FormStyles.formContainer}>
      <h2>Register</h2>

      <form className={FormStyles.formBox}>
        <input
          onChange={handleOnChange}
          name="username"
          type="text"
          placeholder="Username"
          className={FormStyles.inputBox}
        />
        {errorMessage.username && (
          <div className="errorStyle">{errorMessage.username}</div>
        )}

        <input
          onChange={handleOnChange}
          name="email"
          type="email"
          placeholder="Email address"
          className={FormStyles.inputBox}
        />
        {errorMessage.email && (
          <div className="errorStyle">{errorMessage.email}</div>
        )}

        <input
          onChange={handleOnChange}
          name="password"
          type="password"
          placeholder="Password"
          className={FormStyles.inputBox}
        />
        {errorMessage.password && (
          <div className="errorStyle">{errorMessage.password}</div>
        )}

        <input
          onChange={handleOnChange}
          name="confirm_password"
          type="password"
          placeholder="Confirm password"
          className={FormStyles.inputBox}
        />
        {errorMessage.confirm_password && (
          <div className="errorStyle">{errorMessage.confirm_password}</div>
        )}

        {showMessage ? (
          <div className={messageType ? "successStyle" : "errorStyle"}>
            {message}
          </div>
        ) : null}
        <br />
        <input
          type="checkbox"
          id="adminReg"
          onChange={() => setAdminReg(!adminReg)}
        />
        <label htmlFor="adminReg">Admin registration</label>

        <button onClick={handleOnSubmit} className="btn-primary">
          {regBtnText === "Register" ? (
            "Sign up"
          ) : (
            <div className="btn-loading">{regBtnText}</div>
          )}
        </button>
      </form>

      <p>
        Already have account?{" "}
        <Link href="/login" passHref>
          Login now!
        </Link>
      </p>
    </div>
  );
};

export default Register;
