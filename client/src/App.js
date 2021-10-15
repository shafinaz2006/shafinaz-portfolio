import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Intro from './Containers/Intro';
import Projects from './Containers/Projects';
import Education from './Containers/Education';
import Contact from './Containers/Contact';
import { useEffect } from 'react';
import { addAnalytics } from './Utils/gaHelper';

function App() {
  useEffect(() =>{
    addAnalytics();
  }, []);
  
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
