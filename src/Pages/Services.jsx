import React from "react";
import Navbar from "../components/Navbar";

const Services = () => {
  return (
    <section className="bg">
      <Navbar />
      <div className="container">
        <h1 className="text-center text-white fw-bold">Services I Offer</h1>
        <div className="card-group p-3" data-aos="zoom-in">
          <div
            className="card p-3 m-2 rounded"
            data-aos="fade"
            data-aos-delay="0"
          >
            <div className="card-body">
              <div className="card-title text-center">
                <i className="bi bi-code-square sev-icon"></i>
              </div>
              <h3 className="card-title text-center">WEB DEVELOPMENT</h3>
              <p className="card-text">
                I can develop functional web pages from scratch using HTML, CSS,
                JavaScript or React. I can also implement an existing design to
                a webpage.
              </p>
            </div>
          </div>
          <div
            className="card p-3 m-2 rounded"
            data-aos="fade"
            data-aos-delay="200"
          >
            <div className="card-body">
              <div className="card-head text-center">
                <i className="bi bi-ui-checks sev-icon"></i>
              </div>
              <h3 className="card-title text-center">USABILITY TESTING</h3>
              <p className="card-text">
                Applications and softwares need to be tested from a User's
                perspective, during or after implementation. I can conduct
                effective tests and provide a detailed documentation.
              </p>
            </div>
          </div>
          <div
            className="card p-3 m-2 rounded"
            data-aos="fade"
            data-aos-delay="300"
          >
            <div className="card-body">
              <div className="card-head text-center">
                <i className="bi bi-star sev-icon"></i>
              </div>
              <h3 className="card-title text-center">
                DEPLOYMENT OF A MACHINE LEARNING MODEL
              </h3>
              <p className="card-text">
                Some machine learning classification models require user input
                so as to perform predictions or classification on user's data. I
                can build a fully functional webpage that houses the ML model,
                accepts user's input and display the result.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
