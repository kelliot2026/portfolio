function Skills() {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <span>{skill.name}</span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: skill.level }}></div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;