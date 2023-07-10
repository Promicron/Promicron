import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import face from "../assets/face.png";
import promicle from "../assets/promicle2.png";
import etc from "../assets/etc.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg">
      <Navbar />
      <div className="container">
        <h1 className="text-white text-center fw-bold mb-2">My Recent Works</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 p-4">
          <div className="col">
            <div
              className="card project-card border-0"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img src={face} alt="" className="card-img-top project-img" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Age Prediction App</h5>
                <p>
                  This is an age prediction system built with Python. It uses a
                  custom pretrained CNN model to predict the age of a user,
                  based on the face detected in the image uploaded by the user.
                </p>
              </div>
              <div className="card-buttons p-3 text-center d-flex justify-content-center">
                <Link to="https://github.com/Promicron/estmage">
                  <button type="button" className="project-button mx-2">
                    GitHub
                  </button>
                </Link>
                {/* <button type="button" className="project-button mx-2">
                  Demo
                </button> */}
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card project-card border-0"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src={promicle} alt="" className="card-img-top project-img" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Quiz Website</h5>
                <p>
                  The quiz website is a platform that provides customized
                  questions on various Categories. It was built with HTML, CSS,
                  JavaScript and Bootstrap. AOS library was also used for on
                  scroll animations.
                </p>
              </div>
              <div className="card-buttons p-3 text-center d-flex justify-content-center">
                <button type="button" className="project-button mx-2">
                  GitHub
                </button>
                <Link to="https://promicle.vercel.app/">
                  <button type="button" className="project-button mx-2">
                    Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card project-card border-0"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src={etc} alt="" className="card-img-top project-img" />
              <div className="card-body">
                <h5 className="card-title fw-bold">ETC Vibes</h5>
                <p>
                  ETC Vibes is a web app that provides tailored educational
                  resources to undergraduates. The frontend is built with React
                  and communiticates with the backend through REST API.
                </p>
              </div>
              <div className="card-buttons p-3 text-center d-flex justify-content-center">
                <button type="button" className="project-button mx-2">
                  GitHub
                </button>
                <Link to="https://etcvibes.com">
                  <button type="button" className="project-button mx-2">
                    Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="col" data-aos="fade-in" data-aos-duration="2000">
            <div className="card project-card border-0">
              <img src={promicle} alt="" className="card-img-top project-img" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Quiz Website</h5>
                <p>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-buttons p-3 text-center d-flex justify-content-center">
                <Link to>
                  <button type="button" className="project-button mx-2">
                    GitHub
                  </button>
                </Link>
                <button type="button" className="project-button mx-2">
                  Demo
                </button>
              </div>
            </div>
          </div> */}
          {/* <div className="col" data-aos="fade-in" data-aos-duration="2000">
            <div className="card project-card border-0">
              <img src={promicle} alt="" className="card-img-top project-img" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Quiz Website</h5>
                <p>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-buttons p-3 text-center d-flex justify-content-center">
                <button type="button" className="project-button mx-2">
                  GitHub
                </button>
                <button type="button" className="project-button mx-2">
                  Demo
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
