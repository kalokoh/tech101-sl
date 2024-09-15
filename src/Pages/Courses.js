import React, { useContext, useState } from "react";
import classes from "./Courses.module.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import WebContext from "../Context Container/WebContext";

const Courses = () => {
  
  const navigate = useNavigate();
  const contxt = useContext(WebContext);
  const [error, setError] = useState("");

 

  


  return (
    <>
    
      <h2 className={classes.header}>Develop your IT skills today!</h2>
      
      <div className={classes.courses_container}>
        {contxt.my_courses.map((course) => (
          <>
            <div className={classes.course_details} onClick={() => navigate(course.link)}>
              <img src={course.photo} alt="course_image" />

              <div className={classes.course_details2}>
                <p className={classes.title}>{course.title}</p>
                <p className={classes.description}>{course.description}</p>
                <Link className={classes.course_link} to={course.link}>Read more</Link>
              </div>
            </div>
          </>
        ))}
      </div>
      
      <Outlet />
    </>
  );
};

export default Courses;
