import React from "react";
import Navbar from "./components/Navbar"; // Importing the Navbar component
import Home from "./components/Home"; // Importing the Home component
import About from "./components/About"; // Importing the About component
import Projects from "./components/Projects"; // Importing the Projects component
import Testimonials from "./components/Testimonials"; // Importing the Testimonials component
import Contact from "./components/Contact"; // Importing the Contact component

function App() {
  return (
    <div>
      <Navbar /> {/* Navbar component */}
      <Home /> {/* Home section */}
      <About /> {/* About section */}
      <Projects /> {/* Projects section */}
      <Testimonials /> {/* Testimonials section */}
      <Contact /> {/* Contact section */}
    </div>
  );
}

export default App;