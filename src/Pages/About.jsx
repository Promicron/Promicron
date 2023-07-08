import Navbar from "../components/Navbar";
import img from "../assets/img1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGit,
  faJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg">
      <Navbar />
      <div className="container">
        <div className="row g-4">
          <div className="col-md-7">
            <h1 className="text-white fw-bold">
              A brief introduction of myself
            </h1>
            <p className="text-white fs-4">
              I'm a Computer Science graduate from Redeemers' University. Aside
              from developing softwares, I love Football, Music, Anime and most
              importantly, learning new things.
            </p>
            <button className="resume-btn">Download Resume</button>
          </div>
          <div className="col-md-5">
            <div className="d-block">
              <img
                src={img}
                alt=""
                className="shadow-lg bg-white p-3  me-img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-2 pb-5">
        <h1 className="text-white text-center display-3 fw-bold">
          Professional <span className="text-purple">Skillset</span>
          <div
            className="row row-cols-3 row-cols-md-4 row-cols-md-5 justify-content-center mt-4"
            data-aos="zoom-out"
            data-aos-duration="2000"
          >
            <div className="col">
              <div className="card skill-card mb-4">
                <FontAwesomeIcon icon={faJs} className="text-purple" />
              </div>
            </div>
            <div className="col">
              <div className="card skill-card mb-4">
                <FontAwesomeIcon icon={faCss3} className="text-purple" />
              </div>
            </div>
            <div className="col">
              <div className="card skill-card mb-4">
                <FontAwesomeIcon icon={faReact} className="text-purple" />
              </div>
            </div>
            <div className="col">
              <div className="card skill-card mb-4">
                <FontAwesomeIcon icon={faPython} className="text-purple" />
              </div>
            </div>
            <div className="col">
              <div className="card skill-card mb-4">
                <FontAwesomeIcon icon={faGit} className="text-purple" />
              </div>
            </div>
          </div>
        </h1>
      </div>
    </section>
  );
};

export default About;
