import React, { useContext, useState } from "react";
import classes from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import WebContext from "../Context Container/WebContext";

const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const contxt = useContext(WebContext);

  const emailOnchangeHandler = (e) => {
    setEmailInput(e.target.value);
  };

  const passwordOnchangeHandler = (e) => {
    setPasswordInput(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await contxt.userLogin(emailInput, passwordInput);
      navigate("/courses");
    } catch (err) {
      setError(err.code);
    }
    console.log(emailInput);
    console.log(passwordInput);
  };
  return (
    <React.Fragment>
      <form onSubmit={submitHandler} action="" className={classes.form}>
        <h1>Login</h1>
        {error && <h4 className={classes.auth_error}>{error}</h4>}
        <label htmlFor="email">Email</label>
        <input
          onChange={emailOnchangeHandler}
          value={emailInput}
          type="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={passwordOnchangeHandler}
          value={passwordInput}
          type="password"
          name="password"
        />
        <button type="submit">Login</button>

        <div className={classes["have-account"]}>
          <p>
            Forgotten password? <Link to="/password-reset">Reset</Link>
          </p>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Login;
