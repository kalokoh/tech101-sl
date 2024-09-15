import React, {useState, useCOntext, useContext} from 'react';
import WebContext from '../Context Container/WebContext';
import classes from './PasswordReset.module.css';

const PasswordReset = () => {
    const [emailInput, setEmailInput] = useState('');
  const [error, setError] = useState('');
  
  const contxt = useContext(WebContext);

    const emailOnchangeHandler = (e) => {
        setEmailInput(e.target.value);
    }
    const submitHandler = async (e) => {
      e.preventDefault();
      setError("");

      try {
        await contxt.resetPassword(emailInput);
      }
      catch (err) {
        setError(err.message);
      }

      console.log(emailInput);
      console.log(error);
    }
  return (
    <React.Fragment>
            <div>
                
              <form className={classes.form} action="" onSubmit={submitHandler}>
              <h1 className={classes.title}>Password Reset</h1>
                    <label htmlFor="">Email</label>
                    <input onChange={emailOnchangeHandler} type="email" value={emailInput} />
                    <button type='submit'>Submit Email</button>
                </form>
            </div>
         </React.Fragment>
  )
}

export default PasswordReset