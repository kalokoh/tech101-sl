import React, { useContext, useState } from 'react';
import WebContext from '../Context Container/WebContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { RiUserLocationLine } from "react-icons/ri";
import { BsCodeSlash } from "react-icons/bs";
import { BsBarChartFill } from "react-icons/bs";
import { TbCertificate } from "react-icons/tb";
import { SiGoogleclassroom } from "react-icons/si";
import classes from "./Computer_fundamental.module.css";
import background from "../Assets/computer fundamental background cover.jpg";
import EnrollButton from "./EnrollButton";

const Programming_Fundamental = () => {
  const navigate = useNavigate('');
  const [error, setError] = useState("");
  const contxt = useContext(WebContext);
  const isLogin = contxt.users;
  if (!isLogin) {
    return <Navigate to='/sign-up' />
  }

  

  return (
    <React.Fragment>
      <div className={classes.title_container}>
        <h1 className={classes.title}>Programming Fundamentals</h1>
      </div>
      <div className={classes.course_details}>
        <h2 className={classes.introduction}>INTRODUCTION</h2>

        <p>
          What is computer programming? How do people even program? Can a normal person become a programer? I can become a programmer too? The answer to last question is YES.
        </p>

        <p>Computer Programming is process of writing and designing efficient programs for computers to execute. Programming is a wide area in computer science, and as a result of this fact, one can decide to specialize in programming. Off course people with programming skills that is, people that write and design efficient and productive programs are in high demand as they're needed by almost every company with a very salary about $ 102,000 according to indeed.</p>
        <br />
        <p>There are numerous programming languages out there, this is because as a programmer you will have to utilize two or more programming languages to build efficient and productive applications. Being able to program in two or different programming langages is not considered an easy task. In this programming fundamental course, we teach you everything you need to know to start programming in different languages. All the other questions will be answered during the course.</p>
         <br />
        <p>It is very important to note that, this course (Programming Fundamentals) is largely focused on practicals, for this reason, practical assignments and tests will be conducted during the course.</p>

        <p className={classes.table_title}>Course Details</p>
          <table style={{border: '1px solid black' , paddingLeft: '1rem'}}>
            <tr style={{border: '1px solid black' , paddingLeft: '1rem'}}>
              <th style={{border: '1px solid black' , paddingLeft: '1rem'}}>Course Name</th>
              <th style={{border: '1px solid black' , paddingLeft: '1rem'}}>Prerequisite</th>
              <th style={{border: '1px solid black' , paddingLeft: '1rem'}}>Duration</th>
            </tr>
            <tr>
            <td style={{border: '1px solid black', paddingLeft: '1rem'}} >Microsoft Word</td>
            <td style={{border: '1px solid black' , paddingLeft: '1rem'}}>Computer Fundamentals</td>
            <td style={{border: '1px solid black' , paddingLeft: '1rem'}}>2-3 Months</td>
            </tr>
            
          </table>



          <p className={classes.table_title}>Grades Details</p>
          <table style={{border: '1px solid black' , paddingLeft: '1rem'}}>
            <tr style={{border: '1px solid black' , paddingLeft: '1rem'}}>
              <th style={{border: '1px solid black' , paddingLeft: '1rem'}}>Assessment</th>
              <th style={{border: '1px solid black' , paddingLeft: '1rem'}}>Total(%)</th>
             
            </tr>
            <tr>
            <td style={{border: '1px solid black', paddingLeft: '1rem'}} >Assignments</td>
            <td style={{border: '1px solid black' , paddingLeft: '1rem'}}>10%</td>
            </tr>
            
            <tr>
            <td style={{border: '1px solid black', paddingLeft: '1rem'}} >Graded Quizzes</td>
            <td style={{border: '1px solid black' , paddingLeft: '1rem'}}>10%</td>
            </tr>

            <tr>
            <td style={{border: '1px solid black', paddingLeft: '1rem'}} >Practicals</td>
            <td style={{border: '1px solid black' , paddingLeft: '1rem'}}>50%</td>
            </tr>

            <tr>
            <td style={{border: '1px solid black', paddingLeft: '1rem'}} >Final Exam</td>
            <td style={{border: '1px solid black' , paddingLeft: '1rem'}}>30%</td>
            </tr>
          </table>
      
      
        <div className={classes.topics_container}>
          <h2>Topics</h2>
          <ol className={classes.topics}>
            <li>topic one</li>
            <li>topic two</li>
            <li>topic three</li>
            <li>topic four</li>
            <li>topic five</li>
            <li>topic six</li>
            <li>topic seven</li>
            <li>topic eight</li>
            <li>topic nine</li>
            <li>topic ten</li>
            <li>topic eleven</li>
            <li>topic twelve</li>
          </ol>
        </div>
      </div>

      <h1 className={classes.features_header}>What's included</h1>

      <div className={classes.features}>
        <div>
        <BsCodeSlash className={classes.icon}/>
          <h3>Focuses on practical </h3>
          <p>
            People acquire knowledge through different methods such as by reading, listening, observation, and many others. But, it is also crucial to know that most people learn and retain new ideas by doing (kinesthetic learners). For this reason, our courses are largely focused on practicals.
          </p>
        </div>

        <div>
        <SiGoogleclassroom className={classes.icon}/>
          <h3>Online and physical class available</h3>
          <p>
            We deliver our courses both offline and online effectively. This is to ensure that different people from different geographic locations are able to benefit from our services we render. Approved learning materials are utlized during our classes.  
          </p>
        </div>

        <div>
          <BsBarChartFill className={classes.icon} />
          <h3>Beginners friendly</h3>
          <p>
            You do not have to be a computer literate to take some of our courses. Our courses are beginners friendly. We also have courses one can take as a prerequisite to other courses. As a result, one cannot face challenges while learning marketable skills
          </p>
        </div>

        <div>
          <TbCertificate className={classes.icon}/>
          <h3>Certificate of completion</h3>
          <p>
            After successfully completing a course at Tech101, we offer certificate to our students which they can present to employers for employment. Students are only certified if all conditions are met ( presentation one big project, tests, and exams) 
          </p>
        </div>
        
      </div>
      <EnrollButton />

     
    </React.Fragment>
  );
};

export default Programming_Fundamental;
