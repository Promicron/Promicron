import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../assets/animation.json";
const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg">
      <Navbar />
      <header className="container header-box d-flex text-white align-items-center">
        <div className="row align-items-center mt-5">
          <div className="col-12 col-md-7">
            <div className="d-block">
              <div
                className="welcome"
                data-aos="zoom-out"
                data-aos-duration="2000"
              >
                <h1>Hi, </h1>
                <h1 className="name fw-bold">I'm Ileri Odusanya</h1>
                <h3 className="fw-bold">
                  Software Developer - Machine Learning Engineer
                </h3>
              </div>
              <div
                className="d-flex social-container"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <Link to="https://twitter.com/AllenProms" className="socials">
                  <i className="bi bi-twitter"></i>
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
                <Link to="https://wa.me/qr/N2AOZFJUFENHN1" className="socials">
                  <i className="bi bi-whatsapp text-success"></i>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-5"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <Player
              autoplay
              loop
              src={animation}
              style={{ height: "500px", width: "600px" }}
            ></Player>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
