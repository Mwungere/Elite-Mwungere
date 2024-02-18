import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Scroller from './components/Scroller';
import Testimonials from './components/Testimonials.tsx';

function App() {
  return (
    <div className=" overflow-x-hidden bg-primary">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
