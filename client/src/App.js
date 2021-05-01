import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
