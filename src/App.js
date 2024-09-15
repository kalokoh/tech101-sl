import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Pages/Courses";
import Articles from "./Pages/Articles";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";
import Footer from "./FooterContainer/Footer";
import NavBar from "./Header Components/NavBar";

import ComputerFundamental from "./Course Container/ComputerFundamental";
import PowerPoint from "./Course Container/PowerPoint";
import BasicExcel from "./Course Container/BasicExcel";
import MS_Word from "./Course Container/MsWord";
import Advance_Excel from "./Course Container/Advance_Excel";
import Programming_fundamental from "./Course Container/Programming_Fundamental";
import Html from "./Course Container/Html";
import Css from "./Course Container/Css";
import Javascript from "./Course Container/Javascript";
import Sql from "./Course Container/Sql";

import ComputerFunFacts from "./Articles/ComputerFunFacts";
import { ContextProvider } from "./Context Container/WebContext";



import SignUp from "./Forms/SignUp";
import Login from "./Forms/Login";
import PasswordReset from "./Forms/PasswordReset";
import FiveRunCommands from "./Articles/FiveRunCommands";




function App() {
  
  return (
   <ContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="courses" element={<Courses />} />
            <Route path="articles" element={<Articles />} />
            <Route path="about-us" element={<About />} />
            <Route path="contact-us" element={<Contact />} />
          
            <Route path="/courses/basic-excel" element={<BasicExcel />} />
            <Route path="/courses/fundamentals" element={<ComputerFundamental />} />
            <Route path="/courses/ms-word" element={<MS_Word />} />
            <Route path="/courses/powerpoint" element={<PowerPoint />} />
            <Route path="/courses/advance-excel" element={<Advance_Excel />} />
            <Route path="/courses/programming-fundamental" element={<Programming_fundamental />} />
            <Route path="/courses/html" element={<Html />} />
            <Route path="/courses/css" element={<Css />} />
            <Route path="/courses/javascript" element={<Javascript />} />
            <Route path="/courses/sql" element={<Sql />} />





            
            <Route path="/articles/computer-facts" element={<ComputerFunFacts />} />
            <Route path="/articles/run-commands" element={<FiveRunCommands />} />


          
            <Route path="/fundamentals" element={<Navigate to="/courses/fundamentals" />} />
            <Route path="/basic-excel" element={<Navigate to="/courses/basic-excel" />} />
            <Route path="/ms-word" element={<Navigate to="/courses/ms-word" />} />
            <Route path="/powerpoint" element={<Navigate to="/courses/powerpoint" />} />
            <Route path="/advance-excel" element={<Navigate to="/courses/advance-excel" />} />
            <Route path="/programming-fundamental" element={<Navigate to="/courses/programming-fundamental" />} />
            <Route path="/html" element={<Navigate to="/courses/html" />} />
            <Route path="/css" element={<Navigate to="/courses/css" />} />
            <Route path="/javascript" element={<Navigate to="/courses/javascript" />} />
            <Route path="/sql" element={<Navigate to="/courses/ms-word" />} />


          
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="*" element={<ErrorPage />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
      </ContextProvider>
  );
}

export default App;
