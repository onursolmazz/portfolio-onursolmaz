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
    <section className="projects" id="projects">
      <div className="container projects_container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {_("projects")}
        </motion.h2>

        <motion.p
          className="projects_subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {_("projects_subtitle")}
        </motion.p>

        <div className="projects_grid">
          {projectsData.map((project, index) => {
            const Icon = icons[index % icons.length] || HiOutlineCode;
            const color = colors[index % colors.length];

            return (
              <motion.div
                className="project_card"
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: (index % 3) * 0.08,
                }}
              >
                <div
                  className="project_card_accent"
                  style={{ background: color }}
                />

                <div className="project_card_header">
                  <div
                    className="project_icon"
                    style={{
                      background: `${color}18`,
                      color,
                      borderColor: `${color}28`,
                    }}
                  >
                    <Icon />
                  </div>

                  <h3>{_(project.title)}</h3>
                </div>

                <p>{_(project.description)}</p>

                <div className="project_card_footer">
                  <span className="project_tech">
                    <span
                      className="project_dot"
                      style={{
                        background: color,
                        boxShadow: `0 0 10px ${color}66`,
                      }}
                    />

                    {project.technologies.slice(0, 2).join(" · ")}
                  </span>
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
