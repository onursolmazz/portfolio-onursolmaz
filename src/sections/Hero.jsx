import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

import { HiOutlineDownload } from "react-icons/hi";
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
              "React Developer",
              2000,
              "Laravel Developer",
              2000,
              "Backend Developer",
              2000,
              "Computer Engineer",
              2000,
            ]}
            wrapper="h2"
            repeat={Infinity}
          />

          <p>
            {_("hero_description")}
          </p>

          <div className="hero_buttons">
            <a href="#projects" className="btn btn-primary">
              <TbBriefcase2 />
              {_("view_projects")}
            </a>

            <a href="/cv.pdf" className="btn btn-secondary">
              <HiOutlineDownload />
              {_("download_cv")}
            </a>
          </div>

          <div className="hero_socials">
            <a href="">
              <FaGithub />
            </a>

            <a href="">
              <FaLinkedin />
            </a>

            <a href="mailto:mail@mail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero_preview">
          <span className="preview_text">{_("recent_work")}</span>

          <div className="preview_card">
            <div className="preview_icons">
              <div className="icon">🎟️</div>
              <div className="icon">📚</div>
              <div className="icon">🛒</div>
              <div className="icon">📊</div>
              <div className="icon">🤖</div>
            </div>

            <h3>{_("featured_projects")}</h3>

            <ul className="preview_list">
              <li>🎟️ {_("project_vidipass")}</li>
              <li>📚 {_("project_library")}</li>
              <li>🛒 {_("project_ecommerce")}</li>
              <li>📊 {_("project_dashboard")}</li>
              <li>💬 {_("project_chat")}</li>
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
