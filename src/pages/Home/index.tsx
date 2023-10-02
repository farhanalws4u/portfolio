import "./styles.css";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import whatsapp from "../../assets/whatsapp.png";
import TemplateContainer from "../../components/Template Container";

const Home = () => {
  return (
    <TemplateContainer>
      <div className="home__hero_container">
        <div className="home__hero_text_container">
          <p className="home__hero_text_heading">
            Hi there 👋, I'm <span className="home__name">Farhan Khan</span>
            <br />A <span className="home__js">Javascript</span> Developer
          </p>
          <p className="home__hero_text_para">
            Passionate JavaScript developer skilled in React & React Native.
            Crafting efficient frontend experiences. Building interactive web
            and mobile applications.
          </p>
        </div>
        <div className="home__social_container">
          <a
            href="https://github.com/farhanalws4u"
            className="home__social_icon_link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="" className="home__social_icon_img" />
          </a>
          <a
            href="https://www.linkedin.com/in/farhan-khan2109"
            className="home__social_icon_link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="" className="home__social_icon_img" />
          </a>
          <a
            href="https://instagram.com/farhan.alws4u"
            className="home__social_icon_link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="" className="home__social_icon_img" />
          </a>
          <a
            href="https://wa.me/+917905233021"
            className="home__social_icon_link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="" className="home__social_icon_img" />
          </a>
        </div>
      </div>
    </TemplateContainer>
  );
};

export default Home;
