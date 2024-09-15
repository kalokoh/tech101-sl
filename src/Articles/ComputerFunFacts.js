import React from "react";
import SideBar from "./SideBar";
import classes from "./Style.module.css";
import { Link } from 'react-router-dom';
import CommentButton from "./ArticleFeatures/CommentButton";
import ReadComment from "./ArticleFeatures/ReadComment";


const ComputerFunFacts = () => {
  
  return (
    <React.Fragment>
      <div className={classes.main_container}>
      <div className={classes.article_container}>
        <div className={classes.title_container}>
          <h1 className={classes.title}>10 FUN FACTS ABOUT COMPUTERS</h1>
        </div>
        <div className={classes.section_one}>
          <p>
            A computer is an electronic device that is capable of taking data as
            input, process the data, and display the result. Nowadays, computers
            are widely use in almost every field of study such as banking,
            education, transportation, business, entertainment, medical field,
            and many others fields. The evolution of computers has greatly
            changed the way people live nowadays. In this article, we will
            discuss ten (10) fun facts about computers since the beginning of computing.
          </p>
          <div className={classes.content}>
            <h4>1.</h4>
            <p>
              Although some people argue that the first computer was an abacus, the first modern computer invented was enormous, it occupied an entire room. Because of this, It took computer scientists a whole lot of time maintain and troubleshoot.
            </p>
          </div>

          <div className={classes.content}>
            <h4>2.</h4>
            <p>
              The first digital and programmable general-purpose computer was developed in 1945 by United States of America. It was called ENIAC, which stands for Electronic Numerical Integrator and Computer.
                          </p>
          </div>

          <div className={classes.content}>
            <h4>3.</h4>
            <p>
              The first computer programmer was a female by the name of Ada Lovelace. She wrote the first program for computers to execute while working in collaboration with Charles Barbbage (father of computers) on the Analytical Engine. 
            </p>
          </div>

          <div className={classes.content}>
            <h4>4.</h4>
            <p>
              The first computer programming language was an assembly language which was capable of simplifying machine code used to communicate commands to computers or tell computers what to do.
            </p>
          </div>

          <div className={classes.content}>
            <h4>5.</h4>
            <p>
             The Creeper program, is regarded as the first computer virus, which was created in 1971 by Bob Thomas of BBN. Creeper was actually designed as a security test to see if a self-replicating program was possible.
            </p>
          </div>

          <div className={classes.content}>
            <h4>6.</h4>
            <p>
              The US's Frontier supercomputer is considered the world fastest computer. According to TOP500 rankings, it is said to be the first exascale supercomputer, this means it is capable of performing billions and billions of tasks in one second. 
            </p>
          </div>

          <div className={classes.content}>
            <h4>7.</h4>
            <p>
              Devices such as mobile phones, tablets, games consolers, smart watches, and laptops are all computers because they take data as input, process the data, and display the output.
            </p>
          </div>

          <div className={classes.content}>
            <h4>8.</h4>
            <p>
              Normally, the human eye blinks 20 times per minute, but sitting infront of a computer the human eye blinks about 7 times per minute.
            </p>
          </div>

          <div className={classes.content}>
            <h4>9.</h4>
            <p>
              ILOVEYOU is a computer worm that affected or destroyed all kinds of computer files including personal documents, music files, video files, and photographs as well. It is capable of replicating and propagating itself without human interaction.
                          </p>
          </div>

          <div className={classes.content}>
            <h4>10.</h4>
            <p>
              With all the numerous processes performed by computers, it interesting to know that it can only comprehend two numbers, that is 0 and 1. They are called binary numbers.
              
             </p>
          </div>
          <CommentButton />
          <ReadComment />
          
        

      <Link className={classes.button_link} to="/articles">
     <button className={classes.btn}>More Articles</button>
    </Link>

      </div>
      </div>
      <div className={classes.side_bar}>
      <SideBar /> 
      </div>
      </div>
    </React.Fragment>
  );
};

export default ComputerFunFacts;
