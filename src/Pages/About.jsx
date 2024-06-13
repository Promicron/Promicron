import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="container-fluid">
      <Navbar />
      <div className="container">
        <div className="mb-3">
          <h1 className="fw-bold">About Me </h1>
          <p>
            Hello ! I'm Ileri, a passionate developer with a knack for building
            and creating effective and cool web apps and softwares. I also
            specialize in data analytics and machine learning. With over 3 years
            of experience in the industry, I've honed my skills in HTML, CSS,
            JavaScript, Python, and modern frontend frameworks like React,
            Vue.js.
          </p>
        </div>
        <div className="mb-3">
          <h1 className="fw-bold">Education </h1>
          <div className="edu-item">
            <div className="d-flex align-items-center">
              <h3>Bachelor of Science in Computer Science</h3>
              <span className="ms-auto edu-period">Full Time</span>
            </div>
            <div className="d-flex">
              <div className="d-block d-md-flex">
                <div className="d-flex">
                  <i className="bi bi-building pe-1"></i>
                  <span className="pe-3 edu-uni">Redeemers University</span>
                </div>
                <div className="d-flex edu-loc">
                  <i className="bi bi-geo-alt pe-1"></i>
                  <span>Osun, Nigeria</span>
                </div>
              </div>
              <span className="ms-auto edu-date">Sep 2018 - Aug 2022</span>
            </div>
          </div>
          <hr />
          <div className="edu-item">
            <div className="d-flex align-items-center">
              <h3>Master of Science in Artificial Intelligence</h3>
              <span className="ms-auto edu-period">Full Time</span>
            </div>
            <div className="d-flex">
              <div className="d-block d-md-flex">
                <div className="d-flex">
                  <i className="bi bi-building pe-1"></i>
                  <span className="pe-3 edu-uni">Aston University</span>
                </div>
                <div className="d-flex edu-loc">
                  <i className="bi bi-geo-alt pe-1"></i>
                  <span>Birmingham, UK</span>
                </div>
              </div>
              <span className="ms-auto edu-date">Jan 2024 - Jan 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
