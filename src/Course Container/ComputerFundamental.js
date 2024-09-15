import React, { useContext, useState } from 'react';
import WebContext from '../Context Container/WebContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { RiUserLocationLine } from "react-icons/ri";
import { BsCodeSlash } from "react-icons/bs";
import { BsBarChartFill } from "react-icons/bs";
import { TbCertificate } from "react-icons/tb";
import { SiGoogleclassroom } from "react-icons/si";
import classes from "./Computer_fundamental.module.css";
import EnrollButton from "./EnrollButton";

const ComputerFundamental = () => {
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
        <h1 className={classes.title}>Computer Fundamentals</h1>
      </div>
      <div className={classes.course_details}>
        <h2 className={classes.introduction}>INTRODUCTION</h2>

        <p>
          Microsoft Word commonly known as MS word is an application software developed and published by <a href='#' target='_blank'> Microsoft </a> company. MS Word is the most commonly used word processor for creating fantastic and high quality documents like curriculum vitae (CV), resume, letters, assigments, question papers and many other documents. Microsoft Word is used in almost every office today, and as a result of this fact, it is very crucial for one looking for employment to learn MS word and add it to their resume and increase their probability of getting hired by a company. In this Microsoft Word course, both basic and advanced concepts are taught with real world examples
        </p>

        <p>It is very important to note that, this course (Microsoft Word) is largely focused on practicals, for this reason, practical assignments and tests will be conducted during the course.</p>

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

export default ComputerFundamental;
