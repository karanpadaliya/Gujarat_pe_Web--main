import React, { useState, useEffect } from "react";
// css 
import "../assets/css/Navbar.css";
import logo from '../assets/logo/Gujarat_pe_Logo.png'


function Navbar() {
  const [navbarBackground, setNavbarBackground] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <div>
     <div className="container">
            <nav className={`navbar navbar-expand-lg m-0 p-0 ${navbarBackground ? "scrolled" : ""}`}>
              
                <a className="navbar-brand ps-3 " href="#">
                  <img src={logo} alt="" width={'100px'}  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-3">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#about">
                       About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#services">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#service_provider">
                        Service Provider
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#contact">
                        ContactUs
                      </a>
                    </li>
                  </ul>
                </div>
            </nav>
            </div>
    </div>
  );
}

export default Navbar;
