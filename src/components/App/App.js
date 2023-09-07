import { useEffect } from 'react';

// import logo from '../../assets/logo.svg';
import './App.scss';
import Header from '../header/Header';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

export default function App() {

  useEffect(() => {
    document.title = `Kevin BRET`
  }, [])

  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

