import React from "react";
import classes from './SideBar.module.css';
import Caption from "../Pages/Caption";

const SideBar = () =>{


    return(
      <React.Fragment>
        <div className={classes.container}>
           <Caption />
        </div>
      </React.Fragment>

    )
}

export default SideBar;

