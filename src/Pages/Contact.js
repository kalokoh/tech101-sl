import React from "react";
import Form from "../Forms/ContactForm";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <React.Fragment>
      <div className={classes.contact_section1}>
        <div className={classes.call}>
          <div className={classes.txt}>
            <h4 className={classes.txt1}>Call us directly on</h4>
            <p className={classes.txt2}>+232 31565446</p>
          </div>
        </div>

        <div className={classes.address}>
          <div>
            <h4 className={classes.txt1}>Visit us at</h4>
            <p className={classes.txt2}>5 Pipe Line Calaba Town</p>
          </div>
        </div>
      </div>
      
      <Form />
    </React.Fragment>
  );
};

export default Contact;
