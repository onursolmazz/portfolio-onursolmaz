import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaTicketAlt,
  FaBook,
  FaShoppingCart,
  FaChartBar,
  FaRobot,
} from "react-icons/fa";

import { TbBriefcase2, TbWorld } from "react-icons/tb";
import { TypeAnimation } from "react-type-animation";
import { _ } from "../languages/i18n";

function Hero() {
  const projects = [
    {
      icon: <FaTicketAlt />,
      name: _("project_vidipass"),
      className: "blue",
    },
    {
      icon: <FaBook />,
      name: _("project_library"),
      className: "purple",
    },
    {
      icon: <FaShoppingCart />,
      name: _("project_ecommerce"),
      className: "yellow",
    },
    {
      icon: <FaChartBar />,
      name: _("project_dashboard"),
      className: "cyan",
    },
    {
      icon: <FaRobot />,
      name: _("project_chat"),
      className: "pink",
    },
  ];

  return (
    <section className="hero" id="hero">
      <div className="container hero_container">
        <div className="hero_content">
          <div className="hero_badge">
            <span className="hero_badge_dot" />
            SOFTWARE ENGINEER
          </div>

          <h1>
            <span className="hero_hello">{_("hello")}</span>

            <span className="hero_name">
              Onur
              <br />
              Solmaz<span className="hero_dot">.</span>
            </span>
          </h1>

          <div className="hero_role">
            <span className="hero_role_symbol">&gt;</span>

            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "React Developer",
                2000,
                "Full-Stack Developer",
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
            />
          </div>

          <p className="hero_description">{_("hero_description")}</p>

          <div className="hero_buttons">
            <a href="#projects" className="hero_primary_button">
              <TbBriefcase2 />
              {_("view_projects")}
              <FaArrowRight />
            </a>
          </div>

          <div className="hero_bottom">
            <span className="hero_social_line" />

            <div className="hero_socials">
              <a
                href="https://github.com/onursolmazz"
                target="_blank"
                rel="noreferrer"
                aria-label="Github profile"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/onur-solmaz-907971243/"
                target="_blank"
                rel="noreferrer"
                aria-label="Linkedin profile"
              >
                <FaLinkedin />
              </a>

              <a href="mailto:onursolmazzz2003@mail.com" aria-label="Mail">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="hero_visual">
          <div className="workspace_glow workspace_glow_one" />
          <div className="workspace_glow workspace_glow_two" />

          <div className="workspace">
            <div className="workspace_header">
              <div className="workspace_window_buttons">
                <span />
                <span />
                <span />
              </div>

              <div className="workspace_title">onur.solmaz / portfolio</div>

              <div className="workspace_status">
                <span />
                Online
              </div>
            </div>

            <div className="workspace_content">
              <div className="workspace_intro">
                <div>
                  <span className="workspace_label">{_("recent_work")}</span>

                  <h3>{_("featured_projects")}</h3>
                </div>
              </div>

              <div className="workspace_projects">
                {projects.map((project, index) => (
                  <div
                    className={`workspace_project ${project.className}`}
                    key={index}
                  >
                    <div className="hero_project_icon">{project.icon}</div>

                    <div className="workspace_project_content">
                      <span>0{index + 1}</span>

                      <p>{project.name}</p>
                    </div>

                  </div>
                ))}
              </div>

              <div className="workspace_footer">
                <div className="workspace_info">
                  <div>
                    <span>Development</span>
                    <strong>Full-Stack</strong>
                  </div>
                </div>

                <div className="workspace_info">
                  <div className="workspace_info_icon">
                    <TbWorld />
                  </div>

                  <div>
                    <span>Focus</span>
                    <strong>Web Applications</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="workspace_bottom_bar">
              <span>
                <span className="workspace_bottom_dot" />
                portfolio.tsx
              </span>

              <span>UTF-8</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
