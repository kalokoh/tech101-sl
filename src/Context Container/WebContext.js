import React, {useEffect, useState} from "react";

import ms_word from "../Assets/Ms Word.png";
import excel from "../Assets/excel.png";
import power_point from "../Assets/powerpoint logo (2).png";
import computer_fundamentals from "../Assets/fundamenta_computer.png"
import advanced_excel from "../Assets/advanced_excel.png";
import html_logo from "../Assets/html.png";
import css_logo from "../Assets/css_logo.png";
import javascript_logo from "../Assets/javascript_logo.png";
import programming_fundamental from "../Assets/programming_fundamental.png";
import sql_logo from "../Assets/sql_logo.png";


import { auth } from '../Firebase';
import { createUserWithEmailAndPassword, signUpWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, GoggleAuthProvider, onAuthStateChanged, signInWithPopUp } from "firebase/auth";



const courses = [
  {
    id: "1",
    title: "Computer Fundamentals",
    description:
      "This course teaches all you need to know to get started with computing and serves as a prerequisite for other computer",
    photo: computer_fundamentals,
    link: "fundamentals",
  },
  
  {
    id: "2",
    title: "Microsoft Word",
    description:
      "This course is focused on basic and advance concepts in Microsoft Word for creating documents like a pro...",
    photo: ms_word,
    link: "ms-word",
  },
  {
    id: "3",
    title: "PowerPoint",
    description:
      "The PowerPoint course is created to enable the students utilize PowerPoint efficiently and make outstanding... ",
    photo: power_point,
    link: "powerpoint",
  },

  {
    id: "4",
    title: "Basic Excel",
    description:
      "This course introduces basic excel concepts including formulas and fundamentals concepts for advance excel...",
    photo: excel,
    link: "basic-excel",
  },

  {
    id: "5",
    title: "Advanced Excel",
    description:
      "This course teaches advanced concepts in Excel with real-world projects. Topics such as formulas, data integrity, data analysis etc. ",
    photo: advanced_excel,
    link: "advance-excel",
  },

  {
    id: "6",
    title: "Pgrm Fundamentals",
    description:
      "The Programming Fundamental course teaches you all have to know to start programming in different languages.",
    photo: programming_fundamental,
    link: "programming-fundamental",
  },

  {
    id: "7",
    title: "HTML",
    description:
      "Do you want to learn about the structure of websites? Our HTML course is the best for u. Both basic and advance concepts are taught.",
    photo: html_logo,
    link: "html",
  },

  {
    id: "8",
    title: "CSS",
    description:
      "Do you want to learn about the design of websites? Our CSS course is the best. Both basic and advance concepts are taught...",
    photo: css_logo,
    link: "css",
  },

  {
    id: "9",
    title: "Javascript",
    description:
      "Javascript is one most popular programming languages used in web development today, and it used in both forntend and backend ",
    photo: javascript_logo,
    link: "javascript",
  },

  {
    id: "10",
    title: "RDBMS & SQL",
    description:
      "Data is everywhere, for this reason, it is very important to learn how to create, store, and manage data in databases. ",
    photo: sql_logo,
    link: "sql",
  },

  
];

const WebContext = React.createContext({
  myName: "",
  myAge: null,
  my_courses: "",
  userSignUp: (email, password) => {},
  userLogin: (email, password) => { },
  resetPassword: (email) =>{},
  users: "",
  logoutUser: () => {},
  
});


export const ContextProvider = ({ children }) => {
const [user, setUser] = useState();



  const signUp = (email, password) => {
    
    return createUserWithEmailAndPassword(auth, email, password);  
  }

  const login = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    return signOut(auth);
} 


  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  }
  

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser){
        console.log(currentUser.email)
      }
      else {
        console.log("user is not signed")
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])
  

  
  return (
    <WebContext.Provider
      value={{
        my_courses: courses,
        userSignUp: signUp,
        userLogin: login,
        resetPassword: passwordReset,
        users: user,
        logoutUser: logout,
      }}
    >
      {children}
    </WebContext.Provider>
  );
};

export default WebContext;
