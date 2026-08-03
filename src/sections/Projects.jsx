import { motion } from "framer-motion";
import projectsData from "../data/projectsData";
import { _ } from "../languages/i18n";

import {
  HiOutlineTicket,
  HiOutlineBookOpen,
  HiOutlineClipboardCheck,
  HiOutlineChatAlt2,
  HiOutlineShoppingCart,
  HiOutlineCode,
} from "react-icons/hi";

const icons = [
  HiOutlineTicket,
  HiOutlineBookOpen,
  HiOutlineClipboardCheck,
  HiOutlineChatAlt2,
  HiOutlineShoppingCart,
];

const colors = ["#f16a6a", "#5b8def", "#4fd18b", "#f5c243", "#b06ce8"];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container projects_container">
        <h2>{_("projects")}</h2>

        <p className="projects_subtitle">{_("projects_subtitle")}</p>

        <div className="projects_grid">
          {projectsData.map((project, index) => {
            const Icon = icons[index % icons.length] || HiOutlineCode;
            const color = colors[index % colors.length];

            return (
              <motion.div
                className="project_card"
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.1,
                }}
              >
                <div className="project_card_header">
                  <div
                    className="project_icon"
                    style={{
                      background: `${color}22`,
                      color: color,
                    }}
                  >
                    <Icon />
                  </div>

                  <h3>{_(project.title)}</h3>
                </div>

                <p>
                  <p>{_(project.description)}</p>
                </p>

                <div className="project_card_footer">
                  <span className="project_tech">
                    <span
                      className="project_dot"
                      style={{
                        background: color,
                      }}
                    />

                    {project.technologies.slice(0, 2).join(" · ")}
                  </span>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project_link"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
