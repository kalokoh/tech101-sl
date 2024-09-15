import React from 'react'
import classes from './Services.module.css';
import { BsCodeSlash } from "react-icons/bs";
import { GiComputing } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { BsPersonLinesFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { GrTroubleshoot } from "react-icons/gr";



const Services = () => {
  return (
    <>
    <h2 className={classes.header} style={{marginTop: '12rem'}}>Our Services</h2>
       <div className={classes.services_container}>
      <div className={classes.details}>
        <BsCodeSlash className={classes.icon} />
        <p className={classes.title}>Web Development</p>
        <p className={classes.content}>We build responsive and easily accessible website using standard web technologies.</p>
      </div>
      <div className={classes.details}>
        <GiComputing className={classes.icon}  />
        <p className={classes.title}>IT Training</p>
        <p className={classes.content}>We train different people to development or improve their IT skills at their own pace.</p>
        
      </div>
      <div className={classes.details}>
        
        <GrTroubleshoot className={classes.icon} />
        <p className={classes.title}> Troubleshooting & Maintainance</p>
        <p className={classes.content}>We also troubleshoot and maintain different kinds of computers. </p>
        
      </div>
      
      <div className={classes.details}>
        <SiGoogleclassroom className={classes.icon} />
        <p className={classes.title} >Physical Classes</p>
        <p className={classes.content}>Conduct physical classes on demandable courses with face-to-face teaching and approved learning materials.</p>
      </div>
      <div className={classes.details}>
         <BsPersonLinesFill className={classes.icon}/>
         <p className={classes.title} >Online Classes</p>
         <p className={classes.content}>We also diseminate highly demandable IT skills online using our website. </p>
      </div>
      <div className={classes.details}>
        <MdGroups className={classes.icon}  />
        <p className={classes.title}>Cooperate Training </p>
        <p className={classes.content}>We provide standard trainings to groups of people  in order to development or improve their IT skills.</p>
        
      </div>
      
    </div>
    </>
  )
}

export default Services