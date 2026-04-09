function Projects() {
  const projects = [
    { title: "Project 1", desc: "HTML, CSS, JS project" },
    { title: "Project 2", desc: "React app" },
    { title: "Project 3", desc: "Full-stack app" },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects project-grid">
        {projects.map((p, index) => (
          <div key={index} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;