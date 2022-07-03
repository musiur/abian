import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import validator from "../formValidators/loginPageFormValidator";
import FormStyles from "../styles/modules/form.module.scss";
import { UserContext } from "./_app";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(formData);
  const [user, setUser] = useContext(UserContext);
  const router = useRouter();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(validator(formData));
  };

  const redirectToDashboard = () => {
    // typeof window !== "undefined" && window.location.replace("/dashboard");
    router.push("/dashboard")
  };

  useEffect(() => {
    if (Object.keys(errorMessage).length === 0) {
      //api
      const { email, password } = formData;
      const userdata = { email, password };

      const fetchAPI = async () => {
        const res = await axios.post(
          "http://localhost:9000/auth/login",
          userdata
        );

        res.status === 200 && setUser({ ...user, login: true, details: res.data.result });
      };
      try {
        fetchAPI();
      } catch (err) {
        console.log(err);
      }
    }
  }, [errorMessage]);

  useEffect(() => {
    console.log(user)
    user.login === true && redirectToDashboard();
  }, [user]);
  return (
    <div className={FormStyles.formContainer}>
      <h2>Login</h2>

      <form className={FormStyles.formBox}>
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

        <button onClick={handleOnSubmit} className="btn-primary">
          Login
        </button>
      </form>

      <p>
        {`Don't `}have account?{" "}
        <Link href="/register" passHref>
          Create now!
        </Link>
      </p>
    </div>
  );
};

export default Login;
