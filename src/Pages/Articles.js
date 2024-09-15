import React from "react";
import ComputerFunFacts from "../Articles/ComputerFunFacts";
import classes from "./Article.module.css";
import my_image from "../Assets/0d6c85d1d0043171b69f448797d77b2f.0.jpg";
import computer_facts from "../Assets/computer_fun_facts.jpg";
import { ArticleContextProvider } from "../Context Container/ArticleContext";

import Typical from "react-typical";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const Articles = () => {

 
  return (
    
    <React.Fragment>
      <articleContextProvider>
      <div className={classes.article_container}>
        <div className={classes.profile}>
          <img src={my_image} alt="" />
          <p>Alie Kalokoh</p>
          <Typical
            steps={[
              "Computer Basics",
              2000,
              "MS Word",
              2000,
              "Powerpoint",
              2000,
              "Excel",
              2000,
              "HTML",
              2000,
              "CSS",
              2000,
              "Javascript",
              2000,
              "SQL",
              2000,
              "A+",
              2000,
            ]}
            loop={Infinity}
            wrapper="h4"
          />
        </div>
        <div className={classes.content_container}>
          <Link className={classes.article_link} to="computer-facts">
            <h1> Ten (10) Computer Fun Facts You Must Know</h1>
            <img src={computer_facts} alt="computer fun facts" />
          </Link>
          <div className={classes.descript_container}>
            <p className={classes.desp}>
            A computer is an electronic device that is capable of taking data as
            input, process the data, and display the result. Nowadays, computers
            are widely use in almost every field of study such as banking,
            education, transportation, business, entertainment, medical field,
            and many others fields...
              {
                <Link className={classes.read_more} to="computer-facts">
                  Read More...
                </Link>
              }
            </p>
          </div>
        </div>

        <div className={classes.content_container}>
          <Link className={classes.article_link} to="run-commands">
            <h1> Five (5) useful run commands You Must Know in Windows</h1>
            <img src='https://www.maketecheasier.com/assets/uploads/2018/06/windows-run-commands-featured.jpg' alt="computer fun facts" />
          </Link>
          <div className={classes.descript_container}>
            <p className={classes.desp}>
            Microsoft Windows operating system is GUI based, that is users interact with the operating system (OS) by clicking and dragging files presented graphically. This makes the Window OS relatively simple to use as compared to the Linux operating system
              {
                <Link className={classes.read_more} to="run-commands">
                  Read More...
                </Link>
              }
            </p>
          </div>
          <Link to="/courses" className={classes.btn_container}>
          <button type="button">Checkout our courses</button>
        </Link>
        </div>

        
        
      </div>
      </articleContextProvider>
    </React.Fragment>
  );
};

export default Articles;
