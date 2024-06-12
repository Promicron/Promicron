import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../assets/animation.json";
const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg">
      <Navbar />
      <header className="container header-box d-flex align-items-center">
        <div className="row align-items-center mt-5">
          <div className="col-12 col-md-7">
            <div className="d-block">
              <div
                className="welcome"
                data-aos="zoom-out"
                data-aos-duration="2000"
              >
                <h1 className="fw-bold">
                  {" "}
                  Hi,👋<br></br>My Name is<br></br>
                </h1>
                <h1 className="name fw-bold">ILERI</h1>
                <h1 className="fw-bold">I love to build cool things.</h1>
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
