// src/components/Skills.js
import React from "react";
import "../App.css"; // Import the CSS

const skills = {
  Languages: ["HTML", "CSS", "XML", "JavaScript", "TypeScript", "ES5/ES6", "PHP", "Node.js", "Python", "Java", "C/C++", "C#", "Golang", "Ruby", "SQL", "Go"],
  Frameworks: ["React", "jQuery", "AngularJS", "Angular2+", "Vue", "Bootstrap", "SCSS", "LESS", "Tailwind", "Laravel", "Codeigniter", "Symfony", "Node Express", "React Native", "Next.js", "Nuxt.js", "DRF", "Flask", "Ruby on Rails", "Java Spring/Boot", ".NET", "TensorFlow", "NumPy", "Scikit", "OpenAI"],
  Databases: ["MySQL", "PostgreSQL", "MSSQL", "MongoDB", "Redis"],
  DevOps: ["GitHub", "GitLab", "Bitbucket", "Material UI", "Media Queries", "WCAG", "Unit Testing", "Jest", "AWS", "GCP", "Azure", "Docker", "Kubernetes", "CI/CD Pipelines", "Jenkins"],
  Methodologies: ["SDLC", "Agile", "Waterfall", "Scrum", "Jira", "Kanban", "ClickUp"],
  OS: ["Windows", "Linux (Ubuntu, CentOS, Debian…)", "MacOS"]
};

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-group">
            <h3>{category}</h3>
            <div className="skill-items">
              {items.map((item) => (
                <span key={item} className="skill-badge">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;