import React from 'react';
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Introduction/intro";
import About from "./components/AboutMe/about"
import Skills from "./components/Skills/skills";
import Education from "./components/Education/education";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About/>
      <Skills />
      <Education /> {/* Added Education component */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
