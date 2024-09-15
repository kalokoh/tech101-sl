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

const Javascript = () => {
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
        <h1 className={classes.title}>Javascript</h1>
      </div>
      <div className={classes.course_details}>
        <h2 className={classes.introduction}>INTRODUCTION</h2>

      <p>To be honest, HTML and CSS are not enough for web development. We need to find a way to control the functionality of websites and make it interactive for users. For example;  what happens when a button is clicked or what happens when an item is dragged from one location to another location in the web page. This means, as developers, we need to provide actions for certain events that occur within the website and this is where Javascript comes into play.</p>
      <br />
      <p>While HTML is used to code the structure of websites and CSS used in designing the websites, Javascript as a programming language is used to append interactive features to websites we create or view everyday. Javascript makes our websites interactive or functional and in the end good user experience is achieved. In other words, we can say that Javascript is used to control the behavior of websites. </p>

      <br />

      <p>Not only that, Javascript can also be used in the backend. Therefore, it is both front-end and backend programming language. Javascript also has libraries and frameworks like React, Angular, Jquery, Vue which make it possible to combine HTML, CSS, and Javascript. Lastly, Javascript is also used in mobile app development. </p>
        
        <p>It is very important to note that, this Javascript course is largely focused on practicals, for this reason, practical assignments and tests will be conducted during the course.</p>

        <p className={classes.table_title}>Course Details</p>
          <table style={{border: '1px solid black' , paddingLeft: '1rem'}}>
            <tr style={{border: '1px solid black' , paddingLeft: '1rem'}}>
              <th style={{border: '1px solid black' , paddingLeft: '1rem'}}>Course Name</th>
              <th style={{border: '1px solid black' , paddingLeft: '1rem'}}>Prerequisite</th>
              <th style={{border: '1px solid black' , paddingLeft: '1rem'}}>Duration</th>
            </tr>
            <tr>
            <td style={{border: '1px solid black', paddingLeft: '1rem'}} >Javascript</td>
            <td style={{border: '1px solid black' , paddingLeft: '1rem'}}>HTML & CSS</td>
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

export default Javascript;
