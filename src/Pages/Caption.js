import React from 'react';
import classes from './Caption.module.css';
import logo from '../Assets/logo-no-background.png';
import { Link } from 'react-router-dom';

const Caption = () =>{
    return (
        <div className={classes.caption_container}>
        <p className={classes.para}>
            Learn fundamental and advance concepts in computing at
          </p>

          <img src={logo} alt="website logo" className={classes.logo} style={{marginLeft: 'auto', marginRight: 'auto'}} />
        
          <Link to="/courses" className={classes.btn_container}>
          <button type="button">Checkout our courses</button>
        </Link>
        </div>
    )
}

export default Caption