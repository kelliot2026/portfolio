function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <h1>Senior developer!</h1>
      <p>Web Developer | Designer | Problem Solver</p>
      <button onClick={scrollToProjects}>View Projects</button>
    </section>
  );
}

export default Hero;