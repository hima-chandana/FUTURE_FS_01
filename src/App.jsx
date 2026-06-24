import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-primary min-h-screen text-gray-200 font-sans selection:bg-accent1/30 selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
