import React, {useRef} from "react";
import classes from "./About.module.css";
import my_image from "../Assets/0d6c85d1d0043171b69f448797d77b2f.0.jpg";
import Typical from 'react-typical';
import { Link } from 'react-router-dom';
import SignUp from "../Forms/SignUp";
import Login from "../Forms/Login";

import Services from "./Services";

const About = () => {

  const scrollToServices = useRef();

  const scrollToServicesHandler = () =>{
    return window.scrollTo({top: scrollToServices.current.offsetTop, behavior: 'smooth'})
  }

  
  return (
    <>
    <div className={classes.about_banner}>

    <div className={classes.caption_container}>
        <p className={classes.para}>
        At Tech101, we provide services to different kinds of people to help solve various technical problems. {<p className={classes.scrollToServices} onClick={scrollToServicesHandler}>View our Services</p>}
          </p>
          <Link to="/courses" className={classes.capbtn_container}>
          <button type="button">Checkout our courses</button>
        </Link>
    </div>

    </div>


        




      <div ref={scrollToServices}>
      <Services   />

      </div>
      <h2 className={classes.header} style={{marginTop: '7rem'}}>Our Tutors</h2>
      <div className={classes.about_container}>
        <div className={classes.profile_container}>
      <div className={classes.profile}>
          <img src={my_image} alt="" />
          <p>Alie Kalokoh <span>(tutor)</span></p>
          <a href="https://portfolio-70237.web.app/" target="_blank" className={classes.portfolio_link} >View portfolio</a>
      </div>
      
      <div className={classes.subjects}>
          <Typical steps={["Computer Basics", 2000, "MS Word", 2000, "Powerpoint", 2000, "Excel", 2000, "HTML", 2000, "CSS", 2000, "Javascript", 2000, "SQL", 2000, "A+", 2000]} loop={ Infinity} wrapper='h4' />
          </div>
        </div>
        <div className={classes.about}>
          <p>
            Hello, my name is Alie Kalokoh. I am computer enthusiast who is
            passionate about diseminating technical knowledge to interested
            members. Helping others acquire knowledge in different areas like
            Chemistry, Computer Science, Physics, Mathematics has always been
            part of me since I was a high school student. After my West Africa
            Senior Secondary Certificate Examination (WASSCE), I decided to
            explore more about computers and teach others with the little
            knowledge I had. Eventually I got an opportunity to serve as a
            science teacher at Al-furqan Secondary School and later became a
            staff at Nurr Islamic Secondary School and Tusakay High School as
            well. But I was not that excited with the job because I wanted to learn
            about computers especailly programming. After some months, I got an
            admission to the University of the People to study Computer Science
            and later started studying hardware and networking at Bluecrest
            College. With the wide range of resources available in the internet, I started learning some concepts on my own. At this point, diseminating knowledge was a pirority. 
          </p>
        </div>
        <Link to="/courses" className={classes.btn_container}>
          <button type="button">Our Courses</button>
        </Link>
      </div>

    </>
  );
};

export default About;
