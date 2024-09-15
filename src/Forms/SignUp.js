import React, { useState, useContext } from "react";
import classes from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import WebContext from "../Context Container/WebContext";



const SignUp = () => {
  const [email, setEamil] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const contxt = useContext(WebContext);

  const emailChangeHandler = (e) => {
    setEamil(e.target.value);
  }

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  }

  

  const submitHandler = async(e) => {
    e.preventDefault();
    setError("");

    try {
      await contxt.userSignUp(email, password);
      navigate('/login');
      
    } catch (err) {
      setError(err.code);
      
    }
    console.log(email);
    console.log(password);
    

    setEamil("");
    setPassword("");
   
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler} action="" className={classes.form}>
        <h1>Sign up</h1>
        {error && <h4 className={classes.auth_error}>{error}</h4>}
        <label htmlFor="email">Email</label>
        <input value={email} onChange={emailChangeHandler} type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={password} onChange={passwordChangeHandler} type="password" name="password" />
        <button type="submit">Sign Up</button>
        
        <div className={classes["have-account"]}>
          <p>
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SignUp;
