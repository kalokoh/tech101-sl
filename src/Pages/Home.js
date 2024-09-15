import React, { useContext, useRef } from "react";
import classes from "./Home.module.css";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import Form from "../Forms/ContactForm";
import Courses from "./Courses";
import WebContext from "../Context Container/WebContext";
import logo from '../Assets/logo-no-background.png';
import Services from './Services';

import {AiOutlineArrowUp} from 'react-icons/ai';


const Home = () => {

  const scrollRef = useRef(null);
  const contxt = useContext(WebContext);
  const navigate = useNavigate('');
  const isLogin = contxt.users;


  const scrollToTop = () =>{
    return window.scrollTo({top: scrollRef.current.offsetTop, behavior: 'smooth'})
  }

  
  return (
    <React.Fragment >
      <div className={classes.banner} ref={scrollRef}>
        <div className={classes.caption_container}>
        <p className={classes.para}>
            Learn fundamental and advance concepts in computing at
          </p>

          <img src={logo} alt="website logo" className={classes.logo} style={{marginLeft: 'auto', marginRight: 'auto'}} />
        
          <Link to="/courses" className={classes.btn_container}>
          <button type="button">Checkout our courses</button>
        </Link>
        </div>
          

        
      </div>
      <Courses />
      <Services />
      <Outlet />
      <Form />
     <div className={classes.scroll_container} >
     <AiOutlineArrowUp onClick={scrollToTop} className={classes.scroll}/>

     </div>
    </React.Fragment>
  );
};

export default Home;
