import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo2.jpeg";
const Navbar = () => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg px-1 px-md-5 ${
        navbarScrolled ? "navbar-scrolled fixed-top" : "navbar"
      }`}
    >
      <div className="container-fluid">
        <div className="navbar-brand fs-3 fw-bold">
          <img src={logo} className="logo" alt="" />
        </div>
        <button
          className="navbar-toggler me-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-5">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link">
                Technologies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <div className="d-flex social-container nav-link">
                <Link to="https://twitter.com/AllenProms" className="socials">
                  <i className="bi bi-twitter-x text-dark"></i>
                </Link>
                <Link to="" className="socials">
                  <i className="bi bi-github text-dark"></i>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/ileri-odusanya"
                  className="socials"
                >
                  <i className="bi bi-linkedin"></i>
                </Link>
                <Link to="mailto:ileriodus@gmail.com" className="socials">
                  <i className="bi bi-envelope text-purple"></i>
                </Link>
                {/* <Link to="https://wa.me/qr/N2AOZFJUFENHN1" className="socials">
                  <i className="bi bi-whatsapp text-success"></i>
                </Link> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
