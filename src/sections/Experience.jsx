import { motion } from "framer-motion";
import { experienceData, educationData } from "../data/experienceData";
import { _ } from "../languages/i18n";

const colors = ["#5b8def", "#e0596b", "#4fd18b", "#f5c243", "#b06ce8"];

function getInitials(company) {
  return company
    .split(" ")
    .filter((word) => word.length > 1)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container experience_container">
        <h2>{_("education_title")}</h2>

        <div className="experience_timeline">
          {educationData.map((item) => (
            <motion.div
              className="experience_item"
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
              }}
            >
              <span
                className="experience_dot"
                style={{
                  borderColor: "var(--primary)",
                }}
              />

              <div className="experience_card">
                <div className="experience_card_top">
                  <div
                    className="experience_logo"
                    style={{
                      borderColor: "var(--primary)",
                      color: "var(--primary)",
                    }}
                  >
                    SE
                  </div>

                  <div className="experience_heading">
                    <h3>{_("education_data1")}</h3>

                    <span className="experience_company">
                      {item.school} · {item.location}
                    </span>
                  </div>

                  <span className="experience_date">{item.period}</span>
                </div>

                <p>{item.gpa}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <h2 style={{ marginTop: "80px" }}>{_("experience_title")}</h2>

        <div className="experience_timeline">
          {experienceData.map((item, index) => {
            const color = colors[index % colors.length];

            return (
              <motion.div
                className="experience_item"
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <span
                  className="experience_dot"
                  style={{
                    borderColor: color,
                  }}
                />

                <div className="experience_card">
                  <div className="experience_card_top">
                    <div
                      className="experience_logo"
                      style={{
                        borderColor: color,
                        color: color,
                      }}
                    >
                      {getInitials(item.company)}
                    </div>
                    <div className="experience_heading">
                      <h3>{_(item.role)}</h3>

                      <span className="experience_company">
                        {item.company} · {item.location}
                      </span>
                    </div>

                    <span className="experience_date">{_(item.period)}</span>
                  </div>

                  <p>{_(item.description)}</p>

                  <div className="experience_tags">
                    {item.technologies.map((tech) => (
                      <span className="experience_tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
