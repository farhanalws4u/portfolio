import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";

interface Props {}

const About: React.FC<Props> = ({}) => {
  const navigate = useNavigate();
  return (
    <section className="home">
      <div className="home__main_wrapper">
        <section className="home__main">
          {/* logo and social icons section  */}
          <div className="home__logo_container">
            <img src={logo} alt="logo" className="home__logo" />
            <div className="home__hero_buttons_container">
              <div className="home__hero_btn_wrapper">
                <button
                  onClick={() => navigate("/projects")}
                  className="home__hero_btn"
                >
                  Projects
                </button>
              </div>
              <div className="home__hero_btn_wrapper">
                <button
                  onClick={() => navigate("/experience")}
                  className="home__hero_btn"
                >
                  Experience
                </button>
              </div>
              <div className="home__hero_btn_wrapper">
                <button
                  onClick={() => navigate("/about")}
                  className="home__hero_btn"
                >
                  About
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
