import skillsData from "../data/skillsData";
import { _ } from "../languages/i18n";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container skills_container">
        <h2>{_("mySkills")}</h2>

        <div className="skills_list">
          {skillsData.map((skill, index) => (
            <span className="skill_badge" key={skill} style={{ "--i": index }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
