import skillsData from "../data/skillsData";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container skills_container">
        <h2>My Skills</h2>

        <div className="skills_list">
          {skillsData.map((skill, index) => (
            <span
              className="skill_badge"
              key={skill}
              style={{ "--i": index }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;