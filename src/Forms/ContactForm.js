import React from "react";
import classes from "./Form.module.css";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Form = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [error, setError] = useState(false);
  const [isSubmitted, setisSubmitted] = useState(false);

  const form = useRef();

  const nameValidity = enteredName.trim().length !== 0;
  const emailValidity =
    enteredEmail.trim().includes("@") && enteredEmail.trim().length !== 0;
  const messageValidity = enteredMessage.trim().length !== 0;

  const nameIsInValid = !nameValidity && error;
  const emailIsInValid = !emailValidity && error;
  const messageIsInValid = !messageValidity && error;

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const messageChangeHandler = (e) => {
    setEnteredMessage(e.target.value);
  };

  const showForm = () =>{
    setisSubmitted(false);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setError(true);

    if (!nameValidity) {
      return;
    } else if (!emailValidity) {
      return;
    } else if (!messageValidity) {
      return;
    } else {

      emailjs.sendForm('service_lqf9oyf', 'template_y4rqv9a', form.current, 'iXKpm0Q5gBIm-w630')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  

      console.log(enteredName);
      console.log(enteredEmail);
      console.log(enteredMessage);

      setEnteredEmail("");
      setEnteredName("");
      setEnteredMessage("");
      setError(false);
    }

    setisSubmitted(true);
  };

  return (
    <React.Fragment>
      {!isSubmitted && (
        <form onSubmit={submitHandler} ref={form} className={classes.form}>
          <h2>Send a Message</h2>
          <label htmlFor="name">Name</label>
          <input
            value={enteredName}
            type="text"
            placeholder="Enter your name"
            name="to_name"
            id="name"
            onChange={nameChangeHandler}
          />
          {nameIsInValid && <p>please enter your name</p>}

          <label htmlFor="email">Email</label>
          <input
            value={enteredEmail}
            type="email"
            placeholder="Enter your email"
            name="from_name"
            id="email"
            onChange={emailChangeHandler}
          />
          {emailIsInValid && <p>please enter your correct email</p>}

          <label htmlFor="message">Send a message</label>
          <textarea
            name="message"
            placeholder="Message"
            id="message"
            cols="30"
            rows="10"
            onChange={messageChangeHandler}
            value={enteredMessage}
            className={classes.message}
          ></textarea>
          {messageIsInValid && <p>please enter your message</p>}

          <button type="submit">Submit</button>
        </form>
      )}
      {isSubmitted && (
      <div className={classes["submitted-container"]}>
      <p className={classes.submitted}>
        Thank you for contacting us at Tech101! We will get on to you shortly. You can
        also call us directly on +232 31 565446
      </p>
      <button onClick={showForm}>Back To form</button>
    </div>
      )}
    </React.Fragment>
  );
};

export default Form;
