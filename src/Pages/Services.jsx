import Navbar from "../components/Navbar";
import html from "../assets/techstack/html.png";
import css from "../assets/techstack/css.png";
import js from "../assets/techstack/js.png";
import reactPng from "../assets/techstack/react.png";
import bootstrap from "../assets/techstack/bootstrap.png";
import reduxPng from "../assets/techstack/redux.png";
import vscode from "../assets/techstack/vscode.png";
import git from "../assets/techstack/git.png";
import gitHub from "../assets/techstack/github.png";
import postman from "../assets/techstack/postman.png";
import figma from "../assets/techstack/figma.png";
const Services = () => {
  return (
    <section className="container-fluid tech-container">
      <Navbar />
      <section className="container">
        <h1 className="display-4 fw-bold">Tech Stack</h1>
        <p className="py-2">Technologies I've been working with recently</p>
      </section>
      <section className="container tech-stack">
        <div className="row row-cols-3 row-cols-md-4 row-cols-lg-6">
          <div className="col">
            <img src={html} alt="" />
          </div>
          <div className="col">
            <img src={css} alt="" />
          </div>
          <div className="col">
            <img src={js} alt="" />
          </div>
          <div className="col">
            <img src={reactPng} alt="" />
          </div>
          <div className="col">
            <img src={reduxPng} alt="" />
          </div>
          <div className="col">
            <img src={bootstrap} alt="" />
          </div>
        </div>
      </section>
      <div className="container mt-4 tech-stack">
        <h1 className="fw-bold display-4">Tools</h1>
        <div className="row row-cols-3 row-cols-md-4 row-cols-lg-6">
          <div className="col">
            <img src={vscode} alt="" />
          </div>
          <div className="col">
            <img src={git} alt="" />
          </div>
          <div className="col">
            <img src={gitHub} alt="" />
          </div>
          <div className="col">
            <img src={figma} alt="" />
          </div>
          <div className="col">
            <img src={postman} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
