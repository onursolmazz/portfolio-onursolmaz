import { motion } from "framer-motion";
import skillsData from "../data/skillsData";
import { _ } from "../languages/i18n";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container skills_container">

        <motion.h2
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: false,
            amount: 0.3
          }}
          transition={{
            duration: 0.5
          }}
        >
          {_("mySkills")}
        </motion.h2>


        <div className="skills_list">

          {skillsData.map((skill, index) => (

            <motion.span
              className="skill_badge"
              key={skill}

              initial={{
                opacity: 0,
                y: 30
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: false,
                amount: 0.2
              }}

              transition={{
                duration: 0.4,
                delay: index * 0.05
              }}
            >
              {skill}

            </motion.span>

          ))}

        </div>


      </div>
    </section>
  );
}

export default Skills;