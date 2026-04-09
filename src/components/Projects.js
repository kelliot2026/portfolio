import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my skills and projects.",
      image: "https://via.placeholder.com/300", // Placeholder image for project
      link: "https://www.example.com/portfolio", // Link to the live project
    },
    {
      title: "E-Commerce Site",
      description: "A fully functional e-commerce website with a sleek UI and seamless checkout process.",
      image: "https://via.placeholder.com/300", // Placeholder image for project
      link: "https://www.example.com/ecommerce", // Link to the live project
      
    },

    {
      title: "Admin Dashboard",
      description: "A responsive dashboard to manage tasks, notifications, and user data.",
      image: "https://via.placeholder.com/300", // Placeholder image for project
      link: "https://www.example.com/dashboard", // Link to the live project
    },
  ];

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Latest Projects</h2>
        <p style={styles.subheading}>Check out some of my recent work.</p>
        <div style={styles.projectsContainer}>
          {projects.map((project, index) => (
            <div key={index} style={styles.projectCard}>
              <img
                src={project.image}
                alt={project.title}
                style={styles.projectImage}
              />
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDescription}>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.projectLink}>
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 20px",
    backgroundColor: "#f5f5f5", // Light background for the projects section
    color: "#333",
    textAlign: "center",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#6200ea", // Consistent with your portfolio theme
  },
  subheading: {
    fontSize: "1.2rem",
    marginBottom: "40px",
    opacity: 0.8,
  },
  projectsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", // Responsive grid layout
    gap: "30px",
  },
  projectCard: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Smooth transition for hover effect
  },
  projectCardHover: {
    transform: "translateY(-10px)", // Slight lift on hover
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)", // More shadow on hover
  },
  projectImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },


  projectTitle: {
    fontSize: "1.8rem",
    fontWeight: "500",
    marginTop: "15px",
  },
  projectDescription: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    margin: "10px 0",
    color: "#555", // Softer text color for description
  },
  projectLink: {
    fontSize: "1.2rem",
    color: "#6200ea",
    textDecoration: "none",
    fontWeight: "500",
    marginTop: "15px",
    display: "inline-block",
    transition: "color 0.3s ease",
  },
  projectLinkHover: {
    color: "#ff4081", // Hover effect for project links
  },
};

// Adding hover effect for project cards
const applyHoverEffect = (e) => {
  e.target.style.transform = "translateY(-10px)";
  e.target.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.15)";
};

const removeHoverEffect = (e) => {
  e.target.style.transform = "none";
  e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
};

export default Projects;