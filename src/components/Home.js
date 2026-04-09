import "./Projects";
import { Link } from "react-router-dom";
function Home() {
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <img src="" alt="It is my photo" className="myphoto"/>
      <h1 className="hero-title">Senior developer!</h1>
      <p>Web Developer | Designer | Problem Solver</p>
      <button><Link to="/Projects">View Projects</Link></button>
    </section>
  );
}

export default Home;