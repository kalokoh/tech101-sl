import React from 'react';
import classes from './Style.module.css';
import {Link} from 'react-router-dom';
import SideBar from './SideBar';
import ReadComment from './ArticleFeatures/ReadComment';
import CommentButton from './ArticleFeatures/CommentButton';


const FiveRunCommands = () => {
  return (
    <React.Fragment>
    <div className={classes.main_container}>
      <div className={classes.article_container}>
        <div className={classes.title_container}>
          <h1 className={classes.title}>Five (5) useful run commands You Must Know in Windows</h1>
        </div>
        <div className={classes.section_one}>
          <p>
          Microsoft Windows operating system is GUI based, that is users interact with the operating system (OS) by clicking and dragging files presented graphically. This makes the Window OS relatively simple to use as compared to the Linux operating system. Like in Linux operating system, Windows OS allows users to run certain commands in the run environment or command prompt to improve the efficiency of the operating system. Below are five (5) run commands that makes your work easier with Windows OS.
          </p>
          <div className={classes.content}>
            <h4>1. timedate</h4>
            <p>This command used to change the time and date of your computer. With this command you can change your time zone and set whether to synchronize your system's time with time internet. To implement this command, press Windows key + R to open Run. Type the following command in the text box that appears </p>
 <p className={classes.code}>timedate.cpl</p>
          </div>

          <div className={classes.content}>
          <h4>2. appwiz</h4>
 <p>The appwiz command is a control panel file indicated by the extension (.cpl). With this command, you can view programs installed on your computer and gives you ability to change or uninstall the programs. To implement this command, press Windows key + R to open Run. Type the following command in the text box that appears </p>
 <p className={classes.code}>appwiz.cpl</p>
          </div>

          <div className={classes.content}>
          <h4>3. msinfo32</h4>
 <p>This run command is crucial in the Windows operating system. It gives users full information about their computer system. Information such as capacity of the RAM, hardware resources, software environment, components and many others. To implement this command, press Windows key + R to open Run. Type the following command in the text box that appears </p>
 <p className={classes.code}>msinfo32.exe</p>
          </div>

          <div className={classes.content}>
          <h4>4. msconfig</h4>
 <p>The msconfig run command is an executable file indicated by the extension (.exe). This is a system utility that gives users the platform to troubleshoot Windows start up processes. For example slow boot up might be caused by so many applications running at start up, and we utilize msconfig command to troubleshoot this issue. We can launch other programs like event viewer, command prompt, services (running and stopped). To implement this command, press Windows key + R to open Run. Type the following command in the text box that appears </p>
 <p className={classes.code}>msconfig.exe</p>
          </div>

          <div className={classes.content}>
          <h4>5. osk</h4>
 <p>osk is the short form for On-Screen Keyboard. This command enables users to type without a physical keyboard using a mouse or touchpad. If your keyboard is damaged and you haven't got the time to replace, you can utilize the On-Screen Keyboard for the main time.  To implement this command, press Windows key + R to open Run. Type the following command in the text box that appears </p>
 <p className={classes.code}>osk</p>
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
  )
}

export default FiveRunCommands