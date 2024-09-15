import React from 'react'
import { Link } from 'react-router-dom';
import classes from './EnrollButton.module.css';

const EnrollButton = () => {
  return (
    <div className={classes.btn_container}>
          <button>
            <a className={classes.link} target='_blank' href="https://wa.me/qr/EFN7P5TUVJC2D1">Enroll Now</a>
          </button>
        </div>
  )
}

export default EnrollButton