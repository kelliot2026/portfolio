function Projects() {
  const projects = [
    { title: "Project 1",
       desc: "Built and improved responsive UIs using HTML, CSS3, Bootstrap, JavaScript, and jQuery across patient portals and internal healthcare admin tools" },
    { title: "Project 2",
       desc: " Added new features and fixed bugs in an existing LMS (Learning Management System) built with PHP and the CodeIgniter MVC framework, used for employee compliance training" },
    { title: "Project 3",
     desc: "Developed a full e-commerce-style project using PHP CodeIgniter + MySQL, where healthcare products and devices could be listed and tracked" },
  ];

  return (
    <section id="projects">
      <h2 className="project-title">My Projects</h2>
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