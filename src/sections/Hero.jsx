import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
  FaTicketAlt,
  FaBook,
  FaShoppingCart,
  FaChartBar,
  FaRobot,
} from "react-icons/fa";
import { TbBriefcase2 } from "react-icons/tb";
import { TypeAnimation } from "react-type-animation";
import { _ } from "../languages/i18n";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero_container container">
        <div className="hero_content">
          <span className="hero_badge">SOFTWARE ENGINEER</span>

          <h1>
            {_("hello")}
            <br />
            <span>Onur Solmaz.</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Software Engineer",
              2000,
              "React Developer",
              2000,
              "FullStack Developer",
              2000,
            ]}
            wrapper="h2"
            repeat={Infinity}
          />

          <p>{_("hero_description")}</p>

          <div className="hero_buttons">
            <a href="#projects" className="btn btn-primary">
              <TbBriefcase2 />
              {_("view_projects")}
            </a>

            {/* <a href="/cv.pdf" className="btn btn-secondary">
              <HiOutlineDownload />
              {_("download_cv")}
            </a> */}
          </div>

          <div className="hero_socials">
            <a
              href="https://github.com/onursolmazz"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/onur-solmaz-907971243/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:onursolmazzz2003@mail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero_preview">
          <span className="preview_text">{_("recent_work")}</span>

          <div className="preview_card">
            <div className="preview_icons">
              <div className="icon">
                <FaTicketAlt />
              </div>

              <div className="icon">
                <FaBook />
              </div>

              <div className="icon">
                <FaShoppingCart />
              </div>

              <div className="icon">
                <FaChartBar />
              </div>

              <div className="icon">
                <FaRobot />
              </div>
            </div>

            <h3>{_("featured_projects")}</h3>

            <ul className="preview_list">
              <li>
                <FaTicketAlt />
                {_("project_vidipass")}
              </li>

              <li>
                <FaBook />
                {_("project_library")}
              </li>

              <li>
                <FaShoppingCart />
                {_("project_ecommerce")}
              </li>

              <li>
                <FaChartBar />
                {_("project_dashboard")}
              </li>

              <li>
                <FaRobot />
                {_("project_chat")}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="scroll_down">
        <FaArrowDown />
      </div>
    </section>
  );
}

export default Hero;
