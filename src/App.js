
import './App.css';

/*import Navbar from './components/Navbar';
import HeroComponent from './components/HeroComponent';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';*/

import { Navbar, HeroComponent, AboutMe, Skills, Project, Contact, Footer} from './components/index'
function App() {
  return (
    <>
    <Navbar />
    <HeroComponent/>
    <AboutMe/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>

    
    </>
    
  );
}

export default App;
