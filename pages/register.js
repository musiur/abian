import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import validator from "../formValidators/registerFormValidation";
import FormStyles from "../styles/modules/form.module.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(formData);

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
          const res = await axios.post(
            `http://localhost:9000/auth/${adminReg ? "admin-" : ""}register`,
            userdata
          );
          if (res.status === 200) {
            alert("Registration successfull! Let log in.");
            router.push("/login");
          }
        };
        try {
          fetchAPI();
        } catch (err) {
          console.log(err);
        }
      } else {
        console.log("Password issue!");
      }
    }
  }, [errorMessage]);
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

        {/* <br />
        <input
          type="checkbox"
          id="adminReg"
          onChange={() => setAdminReg(!adminReg)}
        />
        <label htmlFor="adminReg">Admin registration</label> */}

        <button onClick={handleOnSubmit} className="btn-primary">
          Sign Up
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
