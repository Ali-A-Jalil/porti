import './App.css';
import NavBar from './components/Nav/NavBar';
import Banner from './components/Banner/Banner';
import Skills from './components/Skills/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">

      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
