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

function App() {
  return (
    <div className="App overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
