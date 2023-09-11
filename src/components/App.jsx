import { useEffect } from 'react';

import Header from './Header';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
// import {ThemeProvider} from '../utils/context/ThemeProvider';
import GlobalStyle from '../style/GlobalStyle';
import { ThemeContext } from '../utils/context/ThemeProvider';
import { useContext } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faReact } from '@fortawesome/free-brands-svg-icons';

library.add(faReact);

export default function App() {

  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    document.title = `Kevin BRET`
  }, [])

  return (
    <div className="App">
      <GlobalStyle isDarkMode={darkMode}/>
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
  );
}

