import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import WebContext from "../Context Container/WebContext";
import MyDropdown from "./MyDropdown";
import logo from '../Assets/logo-no-background.png';

const NavBar = () => {
  const [error, setError] = useState("");
  const contxt = useContext(WebContext);
  const navigate = useNavigate("");

  const logoutHandler = async () => {
    try {
      await contxt.logoutUser();
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="nav_bar">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        id="header"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            <img src={logo} alt="Website logo" className="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span>
              <AiOutlineMenu />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0" id="man">
              <li className="nav-item" id="navItem">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item" id="navItem">
                <Link className="nav-link" aria-current="page" to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item" id="navItem">
                <Link className="nav-link" aria-current="page" to="/articles">
                  Blogs
                </Link>
              </li>

              <li className="nav-item" id="navItem">
                <Link className="nav-link" aria-current="page" to="/about-us">
                  About Us
                </Link>
              </li>

              <li className="nav-item" id="navItem">
                <Link className="nav-link" aria-current="page" to="/contact-us">
                  Contact Us
                </Link>
              </li>

              <li  className="dropdown" id="navItem" >
                {contxt.users ? (
                 <MyDropdown />
                ) : (
                  <Link className="nav-link " aria-current="page" to="/sign-up">
                    <button onClick={contxt.greet} className="signUp_btn">
                      Sign up
                    </button>
                  </Link>
                )}
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
